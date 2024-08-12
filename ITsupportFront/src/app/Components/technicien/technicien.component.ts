import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technicien } from 'src/app/Module/Technicien';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css']
})
export class TechnicienComponent implements OnInit {

  technicien: Technicien[] = [];
  dataSource: any;

  constructor(private Service: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(): void {
    this.Service.getAllTechnicien().subscribe(
      (response) => {
        this.technicien = response;
      },
      (error) => {
        console.error("Error occurred while fetching comptes", error);
      }
    );
  }
}
