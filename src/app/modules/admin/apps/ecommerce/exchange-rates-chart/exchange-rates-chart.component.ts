import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'environments/environment';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-exchange-rates-chart',
  templateUrl: './exchange-rates-chart.component.html',
  styleUrls: ['./exchange-rates-chart.component.scss']
})
export class ExchangeRatesChartComponent implements OnInit {
  // form:FormGroup;
  countryOne:any;
  countryTwo:data[] = [];
  currencyOne:any[]=[];
  Highcharts: typeof Highcharts = Highcharts;
  mapped:any;
  number:any;


  unitPrice = 600;
  value: any;
  value1: any;
  value2: any;
  number1:any;
  number2:any;

  constructor(private fb:FormBuilder,
              private http:HttpClient) { }

   form = this.fb.group({
    numOne:[''],
    one:[''],
    Two:['']
 })

  ngOnInit(): void {
    this.getCountryOne();
    this.getCurrancyOne();
    // this.getCountryTwo();
  }
  
  changed1(value) {
    this.value1 = value;
  }
  changed(value) {
    this.value2 = value;
  }
  // chnagedNumber1(value) {
  //   this.number1 = value;
  // }
  // chnagedNumber2(value) {
  //   this.number2 = value;
  // }



getCountryOne(){
  debugger
  this.http.get(`${environment.apiCountry}/currencies`)
  .subscribe((res:any)=>{
    // this.countryOne = res
    // this.countryOne  = Array.from(Object.entries({res}));
    this.mapped = Object.keys(res).map(key => ({type: key, value: res[key]}));
    console.log(this.mapped);
  })
}

// getCountryTwo(){
//   this.http.get(`${environment.apiCountry}/currencies`)
//   .subscribe((res:any)=>{
//     this.countryTwo = res
//     this.countryOne = Array.from(Object.entries({res}));

//     console.log(res);
//   })
// }

getCurrancyOne(){
  this.http.get(`${environment.apiCountry}/latest`)
  .subscribe((res:any)=>{
    // this.number = res
    this.number = Object.keys(res).map(key => ({type: key, value: res[key]}));
    console.log( this.number)
  })
}

chartOptions: Highcharts.Options = {
  series: [
    {
      type: "line",
      data: [1, 2, 3, 4, 5]
    }
  ] 
};


}

export interface data{
  one:string;
  two:string;
}