package com.app.Service;

import com.app.Model.EtatTicket;
import com.app.Model.TechnicienIT;
import com.app.Model.Ticket;

import java.util.List;
import java.util.Optional;

public interface TickerService {

    Ticket creerTicket(Ticket ticket);
    Optional<Ticket> getTicketById(Long id);
    List<Ticket> getAllTickets();
    Ticket assignerTechnicien(Long ticketId, TechnicienIT technicien);
    Ticket mettreAJourEtat(Long ticketId, EtatTicket etatTicket);
    List<Ticket> getTicketsByTechnicien(Long technicienId);
}
