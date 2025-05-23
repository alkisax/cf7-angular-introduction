import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User, Credentials, LoggedInUser } from '../Interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_URL = `${environment.apiURL}/api/users`
const API_URL_AUTH = `${environment.apiURL}/api/auth`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  router = inject(Router);

  // η μεταβλιτή signal οταν αλλάξει αλλάζει σε όλα τα componet (κατι σαν redux)
  // δηλ μου επιστρέφει LoggedInUser|null και αρχική τιμή null
  // όταν ένας γίνει Login  εκχώρησε αυτά που παίρνω απο το payload
  // η signal μεταβλητη εμφανίζετε σε διαφορα component. τους βάζω ένα $ για να τις γνωρίζω
  // της δίνω τιμή με user$.set()
  user$ = signal<LoggedInUser | null>(null);

  constructor(){
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      const decodedTokenSubject = jwtDecode(access_token) as unknown as LoggedInUser
      this.user$.set({
        username: decodedTokenSubject.username,
        email: decodedTokenSubject.email,
        roles: decodedTokenSubject.roles
      })
    }

    effect(() =>{
      if (this.user$()){
        console.log('User Logged In', this.user$()?.username);
      } else {
        console.log("No user Logged in");
      }
    });
  }

  registerUser(user:User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user)
  }

  check_dublicate_email(email: string) {
    return this.http.get<{status: boolean, data:User}>(
      `${API_URL}/check_duplicate_email/${email}`
    )
  }

  loginUser(credentials: Credentials){
    return this.http.post<{status:boolean, data:string}>(
      `${API_URL_AUTH}/login`,credentials
    )
  }

  logoutUser(){
    this.user$.set(null);
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  isTokenExpired(): boolean {
    // φερε το τοκεν απο το local storage
    const token = localStorage.getItem('access_token');
    // is token expired? -> true
    if (!token) return true;

    try {
      const decoded = jwtDecode(token);
      // το exp είναι το expire Που το έχουμε αποθηκεύσει στο payload του τόκεν. είναι σε χρόνο σε msec
      const exp = decoded.exp;
      const now = Math.floor(Date.now()/1000);
      // όπότε συγκρίνων την τωρινή ώρα με την ώρα λήξης
      if (exp) {
        // μπερδέυτικα. αυτό δεν μας γυρνάει false? OXI If exp (expiration time) is less than now (current time), it means: The expiration time is in the past. Therefore, the token has expired
        return exp < now;
      } else {
        return true
      }
    } catch (err) {
      return true
    } 
  }

  redirectToGoogleLogin() {
    // το παίρνω απο το env του backend που το είχα ξαναπαρει απο το google cloud
    const clientId = '57920510271-53632el4r6trhgmv72f0bn01ljui923e.apps.googleusercontent.com';
    // επιστρέφω στο backend
    const redirectUri = 'http://localhost:3000/api/auth/google/callback';
    // διάφορα του google
    const scope = 'email profile';
    const responseType = 'code';
    const accessType = 'offline'
    
    // to εκανα κοπι πειστ απο οταν το είχα φτιαξει στο μπακ απλως έβαλα τις μεταβλητές
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=${accessType}`;

    //
    window.location.href = url;
  }
}

/* 
// https://accounts.google.com/o/oauth2/auth?client_id=57920510271-53632el4r6trhgmv72f0bn01ljui923e.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/auth/google/callback&response_type=code&scope=email%20profile&access_type=offline
// το client id απο το γκουγκλ
// το uri απο το γκουγκλ
// το responce_type απο το auth.service

// auth.controller.js backend
exports.googleLogin = async(req, res) => {
  const code = req.query.code
  if (!code) {
    res.status(400).json({status: false, data: "auth code is missing"})
  } else {
    let user = await authService.googleAuth(code)
    if (user) {
      console.log(">>>", user)
      res.status(200).json({status:true, data: user})      
    } else {
      res.status(400).json({status: false, data: "problem in google login"})
    }
  }
}

// auth.srvice.js
async function googleAuth(code) {
  console.log("Google login", code);
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;

  const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI); //εχουμε καλέσει την βιβλιοθήκη στην αρχη

  try {
    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code)
    console.log("Step 1", tokens)
    oauth2Client.setCredentials(tokens) // πιστοποίησε οτι το τοκεν είναι πράγματικά του γκουγκλ
    const ticket = await oauth2Client.verifyIdToken({ //εδώ ελέγχουμε αν είναι έγκυρο το token που μας δίνει η google
      idToken: tokens.id_token,
      audience: CLIENT_ID
    });

    console.log("Step 2")

    const userInfo = await ticket.getPayload();
    console.log("Google User", userInfo);
    return {user: userInfo, tokens}
  } catch (error) {
    console.log("Error in google authentication", error);
    return { error: "Failed to authenticate with google"}
  }
}
*/