import { Routes } from '@angular/router';
import { ProductParentComponent } from './product-parent/product-parent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: "" , component: ProductParentComponent},
    {path: "login" , component: LoginComponent},
    {path: "register" , component: RegisterComponent},
    {path: "cart" , component: CartComponent},
    {path: "details/:id" , component: ProductDetailsComponent},
    {path: "**" , component: NotFoundComponent},
];
