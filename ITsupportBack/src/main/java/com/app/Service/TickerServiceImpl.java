package com.app.Service;

import com.app.Model.*;
import com.app.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TickerServiceImpl implements  TickerService{

    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public Ticket creerTicket(Ticket ticket) {
        ticket.setEtatTicket(EtatTicket.OUVERT);
        return ticketRepository.save(ticket);
    }

    @Override
    public Optional<Ticket> getTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public Ticket assignerTechnicien(Long ticketId, TechnicienIT technicien) {
        Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket non trouvé"));
        ticket.setTechnicien(technicien);
        ticket.setEtatTicket(EtatTicket.EN_COURS);
        return ticketRepository.save(ticket);
    }

    @Override
    public Ticket mettreAJourEtat(Long ticketId, EtatTicket etatTicket) {
        Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket non trouvé"));
        ticket.setEtatTicket(etatTicket);
        return ticketRepository.save(ticket);
    }

    public List<Ticket> getTicketsByTechnicien(Long technicienId) {
        return ticketRepository.findByTechnicienId(technicienId);
    }
}

