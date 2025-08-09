import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-article',
  standalone: false,
  templateUrl: './nouvel-article.html',
  styleUrl: './nouvel-article.scss'
})
export class NouvelArticle {

  constructor(private router : Router){}

cancel():void {
  this.router.navigate(['articles'])
}

}
