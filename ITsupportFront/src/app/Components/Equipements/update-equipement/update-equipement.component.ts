import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipement, EtatEquipement } from 'src/app/Model/equipement';
import { EquipementsService } from 'src/app/Service/equipements.service';

@Component({
  selector: 'app-update-equipement',
  templateUrl: './update-equipement.component.html',
  styleUrls: ['./update-equipement.component.css']
})
export class UpdateEquipementComponent  implements OnInit {
  equipement: Equipement = {
    nom: '',
    description: '',
    etat: EtatEquipement.EN_SERVICE
  };
  idEquipement!: number;
  EtatEquipement = EtatEquipement; // Ajout de cette ligne

  constructor(
    private equipementService: EquipementsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idEquipement = +this.route.snapshot.paramMap.get('id')!;
    this.equipementService.getEquipementById(this.idEquipement).subscribe((data) => {
      this.equipement = data;
    });
  }

  onSubmit(): void {
    this.equipementService.updateEquipement(this.equipement, this.idEquipement).subscribe(
      () => {
        console.log('Équipement mis à jour avec succès');
        this.router.navigate(['/dashboard/equipements']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'équipement', error);
      }
    );
  }
  
}