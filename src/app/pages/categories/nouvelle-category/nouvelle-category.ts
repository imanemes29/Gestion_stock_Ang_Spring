import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-category',
  standalone: false,
  templateUrl: './nouvelle-category.html',
  styleUrl: './nouvelle-category.scss'
})
export class NouvelleCategory implements OnInit {

  ngOnInit():void{}

  constructor(private router : Router){}

  cancel():void{
    this.router.navigate(['category'])
  }

}
