import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  standalone: false,
  templateUrl: './page-client.html',
  styleUrl: './page-client.scss'
})
export class PageClient implements OnInit{

  ngOnInit(): void {
      
  }
constructor(private router: Router) {}

  nouveauClient():void{
this.router.navigate(['nouveauClient']);
  }
}
