import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipement, EtatEquipement } from 'src/app/Module/equipement';
import { EquipementsService } from 'src/app/Service/equipements.service';

@Component({
  selector: 'app-create-equipement',
  templateUrl: './create-equipement.component.html',
  styleUrls: ['./create-equipement.component.css']
})
export class CreateEquipementComponent {
  
  equipement: Equipement = {
    nom: '',
    description: '',
    etat: EtatEquipement.EN_SERVICE
  };

  etats = Object.values(EtatEquipement);

  constructor(private equipementService: EquipementsService,private router: Router) { }

  onSubmit() {
    this.equipementService.createEquipement(this.equipement).subscribe({
      next: (response) => {
        alert('Équipement créé avec succès');
        this.router.navigate(['/dashboard/equipements']);
        // Réinitialiser le formulaire après la soumission ou naviguer vers une autre page
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'équipement', error);
      
      }
    });
  }

 
}
