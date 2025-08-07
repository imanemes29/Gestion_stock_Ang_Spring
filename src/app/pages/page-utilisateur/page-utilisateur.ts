import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-utilisateur',
  standalone: false,
  templateUrl: './page-utilisateur.html',
  styleUrl: './page-utilisateur.scss'
})
export class PageUtilisateur implements OnInit
 {
  constructor(private router : Router){}
  ngOnInit():void{

  }
  nouvelUtilisateur():void{
   this.router.navigate(['nouvelUtilisateur'])
  }
}
