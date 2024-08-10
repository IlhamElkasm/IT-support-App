import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { UserComponent } from './Components/user/user.component';
import { MainComponent } from './Components/main/main.component';
import { RegisterComponent } from './Components/register/register.component';
import { EquipementComponent } from './Components/Equipements/equipement/equipement.component';
import { AuthGuard } from './Service/auth.guard';
import { CreateEquipementComponent } from './Components/Equipements/create-equipement/create-equipement.component';
import { UpdateEquipementComponent } from './Components/Equipements/update-equipement/update-equipement.component';

const routes: Routes = [
  { path: 'dashboard', component: DashbordComponent , children:[
    { path: '', component: MainComponent }, 
    {path: 'user', component: UserComponent},
    {path: 'register', component: RegisterComponent},
    { path: 'equipements', component: EquipementComponent},
    {path: 'createEquipments', component: CreateEquipementComponent},
    {path: 'updateEquipement/:id', component: UpdateEquipementComponent}
  ]},
  { path: '**', redirectTo: '/login' },
  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

