import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { session } from '../utils/session';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router:Router = inject(Router)
  return !session 
  ?  router.navigate(['/'])
  : true
};
