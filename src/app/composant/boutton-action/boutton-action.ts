import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boutton-action',
  standalone: false,
  templateUrl: './boutton-action.html',
  styleUrl: './boutton-action.scss'
})
export class BouttonAction  implements OnInit{

  @Output() // c envoyer un elm du composant fils au composant parent
  clickEvent=new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {
      
  }
  bouttonNouveauClick():void{
   this.clickEvent.emit();
    }

    
}
