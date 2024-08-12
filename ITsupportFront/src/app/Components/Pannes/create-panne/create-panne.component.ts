import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Panne } from 'src/app/Module/panne';
import { PannesService } from 'src/app/Service/pannes.service';

@Component({
  selector: 'app-create-panne',
  templateUrl: './create-panne.component.html',
  styleUrls: ['./create-panne.component.css']
})
export class CreatePanneComponent {

  panne: Panne = new Panne();

  constructor(private pannesService: PannesService, private router: Router ) { }

  ngOnInit(): void {
  }

  createPanne(): void {
    this.pannesService.createPanne(this.panne).subscribe(
      (response: Panne) => {
        alert('Compte créé avec succès:');
        this.router.navigate(['/dashboard/panne']);
      }
    );
  }
}
