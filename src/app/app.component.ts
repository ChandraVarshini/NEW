import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  pageHeader:string="Favourite Movie:Lord of the rings";
  constructor(){}
    ngOnInit(){

    
  }
}
