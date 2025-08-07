import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-fournisseur',
  standalone: false,
  templateUrl: './page-fournisseur.html',
  styleUrl: './page-fournisseur.scss'
})
export class PageFournisseur {

  constructor(private router :Router){}

  nouveauFournisseur():void{
  this.router.navigate(['nouveauFournisseur'])
  }
}
