export interface Ticket {
    id?: number;
    equipement: { idEquipement: number };
    panne: { idPanne: number };
    utilisateur?: { id: number };
    etatTicket?: EtatTicket;
    dateCreation?: string;
    description?: string;  // Ajout du champ description
  }
  
  
  export enum EtatTicket {
    OUVERT = 'OUVERT',
    EN_COURS = 'EN_COURS',
    EN_ATTENTE = 'EN_ATTENTE',
    FERME = 'FERME'
  }