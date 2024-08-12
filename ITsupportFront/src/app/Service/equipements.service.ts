import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from '../Module/equipement';


@Injectable({
  providedIn: 'root'
})
export class EquipementsService {
  
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8089/api/v1/auth/Admin';

  private createAuthorizationHeader(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set("Authorization", "Bearer " + jwtToken);
    } else {
      console.log("JWT token not found in local storage");
      return undefined;
    }
  }

  getAllEquipements(): Observable<Equipement[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Equipement[]>(`${this.apiUrl}/ShowAll`, { headers });
  }

  createEquipement(equipement: Equipement): Observable<Equipement> {
    return this.http.post<Equipement>(`${this.apiUrl}/CreateEquipement`, equipement);
  }

  updateEquipement(equipement: Equipement, idEquipement: number): Observable<Equipement> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<Equipement>(`${this.apiUrl}/eventsPut/${idEquipement}`, equipement, { headers });
  }

  getEquipementById(idEquipement: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.apiUrl}/${idEquipement}`);
  }
  deleteEquipement(idEquipement: number): Observable<void> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete<void>(`${this.apiUrl}/${idEquipement}`, { headers});
  }
}