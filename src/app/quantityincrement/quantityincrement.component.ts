import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantityincrement',
  templateUrl: './quantityincrement.component.html',
  styleUrls: ['./quantityincrement.component.css']
})
export class QuantityincrementComponent implements OnInit {
 name="";
  constructor() { }

  ngOnInit(): void {
  }
  goto(){
    this.name='click me button clicked';
  }
}
