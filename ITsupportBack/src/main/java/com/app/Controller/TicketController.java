package com.app.Controller;

import com.app.Model.EtatTicket;
import com.app.Model.TechnicienIT;
import com.app.Model.Ticket;
import com.app.Model.Utilisateur;
import com.app.Repository.UserRepository;
import com.app.Service.TickerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth/")
@CrossOrigin(origins = "http://localhost:4200/")
public class TicketController {

    @Autowired
    private TickerService ticketService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("User/Add")
    public ResponseEntity<String> creerTicket(@RequestBody Ticket ticket, @AuthenticationPrincipal Utilisateur user) {
        try {
            Utilisateur utilisateurVerifie = userRepository
                    .findById(user.getId())
                    .orElseThrow(()-> new RuntimeException("utilisateur not found"));

            ticketService.creerTicket(ticket,user);

            return ResponseEntity.status(HttpStatus.CREATED).body("created successfully");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("not created" + e.getMessage());
        }
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
