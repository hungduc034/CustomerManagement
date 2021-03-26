import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  customers!: any[];
  constructor(private dataCus:DataService) { }

  ngOnInit(): void {
    this.customers = this.dataCus.getData();
  }

}
