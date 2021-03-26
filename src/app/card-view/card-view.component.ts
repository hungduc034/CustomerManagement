import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  customers!: any[];
  constructor(private dataCus:DataService) { }

  ngOnInit(): void {
    this.customers = this.dataCus.getData();
  }

}
