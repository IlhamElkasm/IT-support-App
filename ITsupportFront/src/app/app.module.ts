import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- Import this
import { AuthenticationService } from './Service/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { UserComponent } from './Components/user/user.component';
import { MainComponent } from './Components/main/main.component';
import { EquipementComponent } from './Components/Equipements/equipement/equipement.component';
import { CreateEquipementComponent } from './Components/Equipements/create-equipement/create-equipement.component';
import { UpdateEquipementComponent } from './Components/Equipements/update-equipement/update-equipement.component';
import { PanneComponent } from './Components/Pannes/panne/panne.component';
import { CreatePanneComponent } from './Components/Pannes/create-panne/create-panne.component';
import { UpdatePanneComponent } from './Components/Pannes/update-panne/update-panne.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    SidebarComponent,
    UserComponent,
    MainComponent,
    EquipementComponent,
    CreateEquipementComponent,
    UpdateEquipementComponent,
    PanneComponent,
    CreatePanneComponent,
    UpdatePanneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
