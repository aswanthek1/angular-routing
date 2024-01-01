import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductsdetailsComponent } from './products/productsdetails/productsdetails.component';
import { authGuard } from './guards/auth-guard.guard';
import { ObservablesComponent } from './observables/observables.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

export const routes: Routes = [
    {path:'', title:'Home', component:FirstComponent},
    {path:'second', title:'Second' ,component:SecondComponent},
    {path:'contact', title:'Contact', component: ContactComponent},
    {path:'products', title:'Products', component: ProductslistComponent, canActivate:[authGuard]},
    {path:'products/:id', title:'Products', component: ProductsdetailsComponent, canActivate:[authGuard]},
    {path:'obs', title:'Obs', component: ObservablesComponent},
    {path:'obs/unsubscribe', title:'unsub', component: UnsubscribeComponent},
    {path:'not-found', title:'Not Found', component:NotFoundComponent},
    {path:'**', component:NotFoundComponent}
];
