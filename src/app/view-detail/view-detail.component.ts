import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  customers!: any[];
  public id: any;
  constructor(public dataUser: DataService, private route: ActivatedRoute) { }
  getDataCustomers(){
    this.customers = this.dataUser.getData();
  }
  ngOnInit(): void {
    this.route.params.subscribe(param =>{
    this.getDataCustomers();
    let newID = this.route.snapshot.paramMap.get('id');
    this.id = newID;
    }
)}

}
