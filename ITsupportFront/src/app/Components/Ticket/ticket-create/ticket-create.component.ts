import { Component } from '@angular/core';
import { EtatTicket, Ticket } from 'src/app/Module/ticket';
import { TicketService } from 'src/app/Service/ticket.service';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent {

  ticket: Ticket = {
    equipement: { idEquipement: 1 },  // exemple de valeur
    panne: { idPanne: 1 },            // exemple de valeur
    etatTicket: EtatTicket.OUVERT  ,   // par défaut à l'état OUVERT
    description: ''
  };

  etatsTicket = Object.values(EtatTicket); // Récupérer toutes les valeurs de l'enum

  constructor(private ticketService: TicketService) {}

  onSubmit(): void {
    this.ticketService.creerTicket(this.ticket).subscribe({
      next: (response) => {
        alert('Ticket créé avec succès');
      },
      error: (error) => {
        console.error('Erreur lors de la création du ticket', error);
      }
    });
  }
}
