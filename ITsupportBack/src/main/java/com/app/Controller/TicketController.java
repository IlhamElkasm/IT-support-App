package com.app.Controller;

import com.app.Model.EtatTicket;
import com.app.Model.TechnicienIT;
import com.app.Model.Ticket;
import com.app.Service.TickerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth/")
public class TicketController {

    @Autowired
    private TickerService ticketService;

    @PostMapping("User/Add")
    public ResponseEntity<Ticket> creerTicket(@RequestBody Ticket ticket) {
        Ticket nouveauTicket = ticketService.creerTicket(ticket);
        return ResponseEntity.ok(nouveauTicket);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
        Optional<Ticket> ticket = ticketService.getTicketById(id);
        return ticket.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Ticket>> getAllTickets() {
        List<Ticket> tickets = ticketService.getAllTickets();
        return ResponseEntity.ok(tickets);
    }

    @PutMapping("/{ticketId}/assigner")
    public ResponseEntity<Ticket> assignerTechnicien(@PathVariable Long ticketId, @RequestBody TechnicienIT technicien) {
        Ticket ticketMisAJour = ticketService.assignerTechnicien(ticketId, technicien);
        return ResponseEntity.ok(ticketMisAJour);
    }

    @PutMapping("/{ticketId}/etat")
    public ResponseEntity<Ticket> mettreAJourEtat(@PathVariable Long ticketId, @RequestParam EtatTicket etat) {
        Ticket ticketMisAJour = ticketService.mettreAJourEtat(ticketId, etat);
        return ResponseEntity.ok(ticketMisAJour);
    }

    @GetMapping("/technicien/{technicienId}")
    public ResponseEntity<List<Ticket>> getTicketsByTechnicien(@PathVariable Long technicienId) {
        List<Ticket> tickets = ticketService.getTicketsByTechnicien(technicienId);
        return ResponseEntity.ok(tickets);
    }
}
