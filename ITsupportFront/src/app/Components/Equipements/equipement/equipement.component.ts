import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipement } from 'src/app/Model/equipement';
import { EquipementsService } from 'src/app/Service/equipements.service';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit {

  equipements: Equipement[] = [];
  errorMessage: string = '';

  constructor(private equipementService: EquipementsService, private router: Router) {}

  ngOnInit(): void {
    this.loadEquipements();
  }

  loadEquipements(): void {
    this.equipementService.getAllEquipements().subscribe(
      (data: Equipement[]) => {
        this.equipements = data;
      },
      (error) => {
        console.error('Failed to load equipements', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des équipements.';
      }
    );
  }
  
  deleteEquipement(idEquipement: number): void {
    this.equipementService.deleteEquipement(idEquipement).subscribe(
      () => {
        this.equipements = this.equipements.filter(equipements => equipements.idEquipement !== idEquipement);
        console.log('User deleted successfully');
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
  }
  updateEquipement(idEquipement: number): void {
    this.router.navigate(['/dashboard/updateEquipement', idEquipement]); // Redirige vers la page de mise à jour
  }
}
