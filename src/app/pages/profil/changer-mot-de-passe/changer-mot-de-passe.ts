import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: false,
  templateUrl: './changer-mot-de-passe.html',
  styleUrl: './changer-mot-de-passe.scss'
})
export class ChangerMotDePasse  implements OnInit{

  ngOnInit():void{}

  constructor(private router : Router){}

  cancel():void{
    this.router.navigate(['profil'])
  }

}
