import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss']
})
export class StrategiesComponent implements OnInit {

  toppings:FormGroup;
  btnDisabled:false;
  filter = false;
  options:any=[];
  check:any=[];
  checked:any=[];
  rightArray:any=[];
  rightcheck:any=[];
  name:boolean;
  selected: boolean = false;
  selectCheck:boolean = false;

  constructor(private fb: FormBuilder) { 
    // this.toppings = fb.group({
    //   MinCostOfPrinting: [''],
    //   MinShippingTime: [''],
    //   VendorPerformance: [''],
    //   IFCVendor: [''],

    //   VendorCapacity: [''],
    //   Ranking: [''],
    //   RiskFactor: [''],
    //   DeactivationDate: [''],

    // });

    this.options = [
      {name:'Min Cost Of Printing',selected:''},
      {name:'Min Shipping Time',selected:''},
      {name:'Vendor Performance',selected:''},
      {name:'IFC Vendor',selected:''},
      {name:'Vendor Capacity',selected:''},
      {name:'Ranking',selected:''},
      {name:'Deactivation date',selected:''},

    ]


  }

  ngOnInit(): void {
  }

  checkBoxName(event:any,isChecked:boolean) {
    debugger
    // if (isChecked) {
    //   this.checked.push(event.target.value)
    // }
    // else {
    //   let index = this.checked.indexOf(event.target.value);
    //   this.checked.splice(index, 1);
    // }
    // this.filter = !this.filter;
  }
 
  rightData():void{
    debugger
    this.checked.push(this.options);
    // this.options = this.checked.splice(7);
     this.rightArray = this.checked[0];
    this.options = [];
  }

  leftData(){
    debugger
    this.rightcheck.push(this.rightArray);
    // this.rightArray = this.rightcheck.splice(7);
    this.options = this.rightcheck[0];
    this.rightArray = [];

    // this.options.push(this.check);
  }

  movedata(){
     debugger
     this.selected = true;
     

  }

  right(){
    debugger
  this.selected = true;
  this.checked.push(this.selected);
  this.rightArray = this.checked;


}

  left(){

  }

}
