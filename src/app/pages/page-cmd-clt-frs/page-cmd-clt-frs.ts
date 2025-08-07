import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  standalone: false,
  templateUrl: './page-cmd-clt-frs.html',
  styleUrl: './page-cmd-clt-frs.scss'
})
export class PageCmdCltFrs  implements OnInit{

  ngOnInit(){}
  constructor(private router : Router){}

  nouvelleCommande():void{
    this.router.navigate(['nouvelCommandeClt'])
  }

}
