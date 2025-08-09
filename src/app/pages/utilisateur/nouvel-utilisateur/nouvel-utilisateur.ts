import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  standalone: false,
  templateUrl: './nouvel-utilisateur.html',
  styleUrl: './nouvel-utilisateur.scss'
})
export class NouvelUtilisateur implements OnInit{
  ngOnInit():void{}

  constructor(private router : Router){}

cancel():void {
this.router.navigate(['utilisateurs'])
}

}
