import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categories',
  standalone: false,
  templateUrl: './page-categories.html',
  styleUrl: './page-categories.scss'
})
export class PageCategories  implements OnInit{

  ngOnInit(): void {
      
  }
  constructor(private router :Router){}

  NouvelCategory():void{
  this.router.navigate(['nouvelleCategory'])
  }
}
