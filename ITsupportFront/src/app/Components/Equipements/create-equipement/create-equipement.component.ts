import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Equipement } from 'src/app/Module/equipement';
import { EquipementsService } from 'src/app/Service/equipements.service';

@Component({
  selector: 'app-create-equipement',
  templateUrl: './create-equipement.component.html',
  styleUrls: ['./create-equipement.component.css']
})
export class CreateEquipementComponent {

  equipement: Equipement = new Equipement();

  constructor(private equipementservice: EquipementsService) { }

  ngOnInit(): void {}

  creerCompte(): void {
    console.log('Valeurs avant création:', this.equipement); // Pour déboguer
    this.equipementservice.createEquipement(this.equipement).subscribe(
      (response: Equipement) => {
        console.log('Compte créé avec succès:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de la création du compte:', error);
      }
    );
  }
}
