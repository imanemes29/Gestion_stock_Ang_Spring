import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  standalone: false,
  templateUrl: './page-cmd-clt-frs.html',
  styleUrl: './page-cmd-clt-frs.scss'
})
export class PageCmdCltFrs  implements OnInit{

  origin='';

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute       ){}

      ngOnInit():void{
        this.activatedRoute.data.subscribe(data => {
          this.origin = data['origin'];
        });
      }

  nouvelleCommande():void{
    if(this.origin === 'client') {
      this.router.navigate(['nouvelCommandeClt']);
    } else if (this.origin === 'fournisseur'){
    this.router.navigate(['nouvelCommandeFrs'])
    }
  }

}
