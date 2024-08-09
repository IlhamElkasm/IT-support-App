import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from '../Module/equipement';

const Url = ["http://localhost:8089/api/v1/auth/Admin"]
@Injectable({
  providedIn: 'root'
})
export class EquipementsService {
  
  constructor(private http: HttpClient) {}

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
    return this.http.get<Equipement[]>(Url+ '/ShowAll', { headers });
  }

  createEquipement(equipement: Equipement): Observable<Equipement> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<Equipement>(Url+ '/{idEquipement}', { headers});
  }

  updateEquipement(equipement: Equipement, id: number): Observable<Equipement> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<Equipement>(Url+ '/eventsPut/{idEquipement}', { headers});
  }

  deleteEquipement(id: number): Observable<void> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete<void>(Url + '/{idEquipement}', { headers});
  }
}
