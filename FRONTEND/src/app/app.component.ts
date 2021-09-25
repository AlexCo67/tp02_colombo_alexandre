import { Component } from '@angular/core';
import { Client } from './client.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp02';
 registrationDone:boolean=false;
 public client:Client = new Client();
 

  constructor() { }
 
recieveclient($event:Client){
  this.client=$event;
}
  receiveregistration($event: boolean) {
    this.registrationDone = $event
  }
}
