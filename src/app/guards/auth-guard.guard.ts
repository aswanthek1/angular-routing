import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChildFn, RouterState } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router)
  const authService: AuthService = inject(AuthService);
  if (authService.isAuthenticated()) {
    return true;
  }
  else {
    router.navigate(['/login'])
    return false;
  }
};

export const canActivateChildFn: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, childState: RouterStateSnapshot) => {
  return canActivate(childRoute, childState)
}
