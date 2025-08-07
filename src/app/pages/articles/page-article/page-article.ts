import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-article',
  standalone: false,
  templateUrl: './page-article.html',
  styleUrl: './page-article.scss'
})
export class PageArticle implements OnInit {

  constructor( private router:Router){

  }
  ngOnInit(): void {
      
  }
  NouvelArticle(){
    this.router.navigate(['nouvelarticle'])
    }
}
