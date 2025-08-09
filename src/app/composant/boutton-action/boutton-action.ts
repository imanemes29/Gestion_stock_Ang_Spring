import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  standalone: false,
  templateUrl: './boutton-action.html',
  styleUrl: './boutton-action.scss'
})
export class BouttonAction  implements OnInit{

    @Input()
  isNouveauVisible= true ;
    @Input()
  isExporterVisible = true ;
    @Input()
  isImporterVisible = true ;

  @Output() // c envoyer un elm du composant fils au composant parent
  clickEvent=new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {
      
  }
  bouttonNouveauClick():void{
   this.clickEvent.emit();
    }

    
}
