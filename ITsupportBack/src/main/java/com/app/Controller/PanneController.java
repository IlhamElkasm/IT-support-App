package com.app.Controller;

import com.app.Model.EtatPanne;
import com.app.Model.Historique;
import com.app.Model.Panne;
import com.app.Service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/Admin")
public class PanneController {
    @Autowired
    private PanneService panneService;

    @PostMapping("/createPanne")
    public Panne createPanne(@RequestBody Panne panne) {
        return panneService.addPanne(panne);
    }

    @PutMapping("/{id}")
    public Panne updatePanne(@PathVariable Long id, @RequestBody Panne panneDetails) {
        return panneService.updatePanne(id, panneDetails);
    }

    @DeleteMapping("/detele/{id}")
    public ResponseEntity<Void> deletePanne(@PathVariable Long id) {
        panneService.deletePanne(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/equipement/{idEquipement}/historique")
    public List<Historique> getHistoriqueByEquipement(@PathVariable Long idEquipement) {
        return panneService.getHistoriqueByEquipement(idEquipement);
    }

}
