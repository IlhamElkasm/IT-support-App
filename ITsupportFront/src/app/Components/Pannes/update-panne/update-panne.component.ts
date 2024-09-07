import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Panne } from 'src/app/Model/panne';
import { PannesService } from 'src/app/Service/pannes.service';

@Component({
  selector: 'app-update-panne',
  templateUrl: './update-panne.component.html',
  styleUrls: ['./update-panne.component.css']
})
export class UpdatePanneComponent implements OnInit {
  
  panne: Panne = new Panne();
  idPanne!: number;
  errorMessage: string = '';

  constructor(
    private panneService: PannesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idPanne = +params.get('id')!;
      console.log("Retrieved idPanne from paramMap:", this.idPanne);
    });

    // Fetch the existing Panne data
    this.panneService.getEquipementById(this.idPanne).subscribe(
      data => {
        this.panne = data;
      }
    );
  }

  onSubmit(): void {
    this.panneService.updatePanne(this.panne, this.idPanne).subscribe(
      data => {
        this.router.navigate(['/dashboard/panne']);
      }
    );    
  }
  
}