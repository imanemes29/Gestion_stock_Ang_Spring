import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  standalone: false,
  templateUrl: './page-profil.html',
  styleUrl: './page-profil.scss'
})
export class PageProfil implements OnInit {
  ngOnInit(): void {
      
  }

  constructor(private router :Router){}

  modifierMotdepasse():void{
  this.router.navigate(['changermotdepasse']);
  }
}
