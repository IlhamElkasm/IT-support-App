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
        console.error('Failed to load  panne', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des équipements.';
      }
    );
  }

  deletePanne(idPanne: number): void {
    this.pannesService.deletePanne(idPanne).subscribe(
      () => {
        this.pannes = this.pannes.filter(pannes => pannes.idPanne !== idPanne);
        alert('User deleted successfully');
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
  }
  editPanne(idPanne: number): void {
    this.router.navigate(['/dashboard/updatePanne', idPanne]); // Navigates to the edit form with the panne ID
  }
  
}
