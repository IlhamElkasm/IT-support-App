import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  serCount: number | undefined;

  constructor(
    private service: AuthenticationService
  ){}

  ngOnInit(): void {
    this.loadUserCount();
  }

  private loadUserCount(): void {
    this.service.getUserCount().subscribe(
      (count: number) => {
        this.serCount = count;
      },
      (error) => {
        console.error('Error fetching user count', error);
      }
    );
  }
}
