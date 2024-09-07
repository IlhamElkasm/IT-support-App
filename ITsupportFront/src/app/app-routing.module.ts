import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { UserComponent } from './Components/user/user.component';
import { MainComponent } from './Components/main/main.component';
import { RegisterComponent } from './Components/register/register.component';
import { EquipementComponent } from './Components/Equipements/equipement/equipement.component';
import { CreateEquipementComponent } from './Components/Equipements/create-equipement/create-equipement.component';
import { UpdateEquipementComponent } from './Components/Equipements/update-equipement/update-equipement.component';
import { PanneComponent } from './Components/Pannes/panne/panne.component';
import { CreatePanneComponent } from './Components/Pannes/create-panne/create-panne.component';
import { UpdatePanneComponent } from './Components/Pannes/update-panne/update-panne.component';
import { DashboardUserComponent } from './Components/dashboard-user/dashboard-user.component';
import { TechnicienComponent } from './Components/technicien/technicien.component';
import { RegisterTechnicienComponent } from './Components/register-technicien/register-technicien.component';
import { TicketCreateComponent } from './Components/Ticket/ticket-create/ticket-create.component';
import { AllPanneComponent } from './Components/all-panne/all-panne.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: 'dashboardUser', component: DashboardUserComponent, children:[
    {path: 'TicketCreate', component: TicketCreateComponent}
  ] },
  { path: 'dashboard', component: DashbordComponent, children: [
    { path: '', component: MainComponent },
    { path: 'user', component: UserComponent },
    { path: 'technicien', component: TechnicienComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'registertechnicien', component: RegisterTechnicienComponent },
    { path: 'equipements', component: EquipementComponent },
    { path: 'createEquipments', component: CreateEquipementComponent },
    { path: 'updateEquipement/:id', component: UpdateEquipementComponent },
    { path: 'panne', component: PanneComponent },
    { path: 'createPanne', component: CreatePanneComponent },
    { path: 'updatePanne/:id', component: UpdatePanneComponent }
  ]},
  { path: '**', redirectTo: '/login' },

  {path: 'allpane', component: AllPanneComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

