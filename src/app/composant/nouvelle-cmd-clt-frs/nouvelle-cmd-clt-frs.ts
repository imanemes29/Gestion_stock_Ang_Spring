import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  standalone: false,
  templateUrl: './nouvelle-cmd-clt-frs.html',
  styleUrl: './nouvelle-cmd-clt-frs.scss'
})
export class NouvelleCmdCltFrs implements OnInit {

  origin = '' ;

  constructor( private activatedRoute : ActivatedRoute){}

  ngOnInit() : void{
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    })
  }

}
