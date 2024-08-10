import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Panne } from 'src/app/Module/panne';
import { PannesService } from 'src/app/Service/pannes.service';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.component.html',
  styleUrls: ['./panne.component.css']
})
export class PanneComponent implements OnInit {

  pannes: Panne[] = [];
  errorMessage: string = '';

  constructor(private pannesService: PannesService, private router: Router) {}

  ngOnInit(): void {
    this.loadPanne();
  }

  loadPanne(): void {
    this.pannesService.getAllPanne().subscribe(
      (data: Panne[]) => {
        this.pannes = data;
      },
      (error) => {
        console.error('Failed to load equipements', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des équipements.';
      }
    );
  }
}
