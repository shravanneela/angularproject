import { Routes } from '@angular/router';
import { Signup} from './signup/signup';
import { Signin } from './signin/signin';
import { Homepage } from './homepage/homepage';
import { Libsignin } from './libsignin/libsignin';    
import { Libhomepage } from './libhomepage/libhomepage'; 
import { Libsignup } from './libsignup/libsignup'; 
import{ProfileFormPractice} from './profile-form-practice/profile-form-practice';
import { EventRegistrationForm } from './event-registration-form/event-registration-form';      

export const routes: Routes = [
  { path: 'homepage',
     component: Homepage },
  { path: 'signup',
     component: Signup },
  { path: 'signin', 
    component: Signin },
    {path:'libsignin',
      component:Libsignin },
      {path:'libsignup',
         component:Libsignup},
         {
            path:'libhomepage',
            component:Libhomepage
         },
         {
            path:'profile-form-practice',
            component:ProfileFormPractice
         },
         {
            path:'event-registration-form',
            component:EventRegistrationForm
         }

];