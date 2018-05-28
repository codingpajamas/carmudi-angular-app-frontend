import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'; 
import { VehicleService } from '../../_services/vehicle.service';   

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  listVehicles = [];
  isListLoading = true;

  constructor(private vehicleService:VehicleService) {}

   

  getBranches(){ 
    this.vehicleService.all()
      .subscribe(
        arrVehicles => {
          console.log(arrVehicles);

          if(arrVehicles && arrVehicles.length) { 
          	this.listVehicles = arrVehicles; 
          }

          this.isListLoading = false;
        },
        error => {
          console.log(error);
          this.isListLoading = false;
        }
      ) 
      
    return false;
  }

   


  ngOnInit() { 
  	this.getBranches(); 
  }

}
