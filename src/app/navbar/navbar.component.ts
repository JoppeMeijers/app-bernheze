import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../shared/guard/auth.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(public authService: AuthService) { 
  }

  ngOnInit() {

  }

}
