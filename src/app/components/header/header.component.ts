import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  title: string = 'My task list';
  constructor() { }

  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {  }


    toggleAddTask(){
        console.log(' clic en toggleAddTask');
        this.btnClick.emit();
    }

}
