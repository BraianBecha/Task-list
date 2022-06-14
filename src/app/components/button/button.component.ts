import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
/*agrego el input arriba*/

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
  
}
)

export class ButtonComponent implements OnInit {


  @Input() color: string ="";
  @Input() text: string ="";/* valores que nos val a llegar como parametro*/
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
   console.log("click!")
    this.btnClick.emit();
  }

}
