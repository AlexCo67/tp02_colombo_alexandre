import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client.model';


@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  @Input() registrationDone:boolean = false;
  constructor() { }

  @Input() client:Client = new Client();

  ngOnInit(): void {
  }

  reloadCurrentPage(){
    window.location.reload();
  };

}
