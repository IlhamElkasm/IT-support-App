import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../Model/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'http://localhost:8089/api/v1/auth';

  constructor(private http: HttpClient) {}
  
  creerTicket(ticket: Ticket): Observable<string> {
    const headers = this.createAuthorizationHeader();
    return this.http.post(`${this.apiUrl}/User/Add`, ticket, { headers, responseType: 'text' });
  }
  

  private createAuthorizationHeader(): HttpHeaders {
    const jwtToken = localStorage.getItem('jwt');
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    if (jwtToken) {
      headers = headers.set('Authorization', 'Bearer ' + jwtToken);
    }
    return headers;
  }
}