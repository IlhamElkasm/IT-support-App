import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { UserComponent } from './Components/user/user.component';
import { MainComponent } from './Components/main/main.component';
import { RegisterComponent } from './Components/register/register.component';
import { EquipementComponent } from './Components/equipement/equipement.component';
import { AuthGuard } from './Service/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashbordComponent , children:[
    { path: '', component: MainComponent }, 
    {path: 'user', component: UserComponent},
    { path: 'equipements', component: EquipementComponent},
  ]},
  { path: '**', redirectTo: '/login' },
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

