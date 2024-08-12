import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Panne } from '../Module/panne';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PannesService {

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

  getAllPanne(): Observable<Panne[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Panne[]>(`${this.apiUrl}/ShowAllPanne`, { headers });
  }
  deletePanne(idPanne: number): Observable<void> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete<void>(`${this.apiUrl}/delete/${idPanne}`, { headers});
  }

  createPanne(panne: Panne): Observable<Panne> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<Panne>(`${this.apiUrl}/panne`, panne, { headers });
  }

  updatePanne(panne: Panne, idPanne: number): Observable<Panne> {
    const headers = this.createAuthorizationHeader();
    return this.http.put<Panne>(`${this.apiUrl}/update/${idPanne}`, panne, { headers });
  }
  
  getEquipementById(idPanne: number): Observable<Panne> {
    return this.http.get<Panne>(`${this.apiUrl}/${idPanne}`);
  }

}
