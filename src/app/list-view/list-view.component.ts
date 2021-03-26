import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  customers!: any[];
  constructor(private dataCus:DataService) { }

  ngOnInit(): void {
    this.customers = this.dataCus.getData();
  }

}
