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
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    {path:'', title:'Home', component:FirstComponent},
    {path:'second', title:'Second' ,component:SecondComponent},
    {path:'contact', title:'Contact', component: ContactComponent},
    {path:'products', title:'Products', component: ProductslistComponent},
    // {path:'products/:id', title:'Products', component: ProductsdetailsComponent, canActivate:[authGuard]},
    {path: 'products', children: [
        {path:':id', component:ProductsdetailsComponent},
        {path:'product/checkout', component:CheckoutComponent, canActivate:[authGuard]}
    ]},
    {path:'obs', title:'Obs', component: ObservablesComponent},
    {path:'obs/unsubscribe', title:'unsub', component: UnsubscribeComponent},

    {path:'login', component:LoginComponent},

    {path:'not-found', title:'Not Found', component:NotFoundComponent},
    // {path:'**', component:NotFoundComponent}
];
