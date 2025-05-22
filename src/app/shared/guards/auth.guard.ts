import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  // εδω θέλει const γιατί δεν είμαστε μεσα σε κλάση
  const userService = inject(UserService);
  const router = inject(Router);
  
  if (userService.user$() && !userService.isTokenExpired()) {
    return true;
  }

  // αν δεν είναι Login αντί να μπεί μεσα στείλε τον στον Login
  return router.navigate(['login']);
};