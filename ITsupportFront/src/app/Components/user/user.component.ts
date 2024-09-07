import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/Model/Utilisateur';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Utilisateur[] = [];
  dataSource: any;

  constructor(private Service: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(): void {
    this.Service.getAllUser().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error("Error occurred while fetching comptes", error);
      }
    );
  }
}
