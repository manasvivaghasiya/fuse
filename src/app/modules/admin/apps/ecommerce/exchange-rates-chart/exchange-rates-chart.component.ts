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
  form:FormGroup;
  countryOne:any;
  countryTwo:data[] = [];
  currencyOne:any[]=[];
  Highcharts: typeof Highcharts = Highcharts;
  mapped:any;
  number:any;
  from:any;
  to:any;
  


  item:any;
  unitPrice = 600;
  value: any;
  value1: any;
  value2: any;
  number1:any;
  number2:any;
  currency="1"
  // email = "asd@example.com";
  mappedTwo: { type: string; value: any; }[];

  constructor(private fb:FormBuilder,
              private http:HttpClient) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      numOne:[''],
      one:[''],
      numTwo:[''],
      Two:['']
   })
  
    this.getCountryOne();
    this.getCurrencyOne();
    this.getCountryTwo();
    
    // this.getCountryTwo();
  }
  
  changed1(value) {
    debugger
    // this.value1 = value;

    this.value1 = value.value.slice(3).trim();
    if(this.value2) {
      this.getTwoValue();
    }
  }
  changed2(value) {
    debugger
    // this.value2 = value;
    this.value2 = value.value.slice(3).trim();
    // this.currency = this.currency;
    // this.getCurrencyOne();  
    if(this.value1) {
      this.getOneValue();
    }
  }

  getOneValue(){
    debugger
    // https://api.frankfurter.app/1999-01-01..?from=USD&to=CHF
    if(this.value1 == this.value2) return;
    // let val = this.value2;
    this.http.get(`${environment.apiCountry}/1999-01-01..?from=${this.value1}&to=${this.value2}`)
    .subscribe((rates:any)=>{
      debugger
    // this.currency = rates;
    let lastElement = rates.rates[Object.keys(rates.rates)[Object.keys(rates.rates).length - 1]]
    let val = (Object.keys(lastElement))[0];
    let data = lastElement[val];
    // let val = Object.keys(rates).map(key => ({type: key, value: rates[key]}));
    this.form.get('numOne').setValue(data);
    // this.form.get('numTwo').setValue(data);


      // this.currency = rates;
      // this.from = rates;
      // this.to = rates;
    });
  }

  getTwoValue(){
    debugger
    // https://api.frankfurter.app/1999-01-01..?from=USD&to=CHF
    if(this.value2 == this.value1) return;
    // let val = this.value2;
    this.http.get(`${environment.apiCountry}/1999-01-01..?from=${this.value2}&to=${this.value1}`)
    .subscribe((rates:any)=>{
      debugger
    // this.currency = rates;
    let lastElement = rates.rates[Object.keys(rates.rates)[Object.keys(rates.rates).length - 1]]
    let val = (Object.keys(lastElement))[0];
    let data = lastElement[val];
    // let val = Object.keys(rates).map(key => ({type: key, value: rates[key]}));
    // this.form.get('numOne').setValue(data);
    this.form.get('numTwo').setValue(data);


      // this.currency = rates;
      // this.from = rates;
      // this.to = rates;
    });
  }

  numberOne(value) {
    this.number1 = value;
  }
  numberTwo(value) {
    this.number2 = value;
  }



getCountryOne(){
 
  this.http.get(`${environment.apiCountry}/currencies`)
  .subscribe((res:any)=>{
    // this.countryOne = res
    // this.countryOne  = Array.from(Object.entries({res}));
    this.mapped = Object.keys(res).map(key => ({type: key, value: res[key]}));
    console.log(this.mapped);
  });
  // this.numberOne(this.value);
}

getCountryTwo(){

  this.http.get(`${environment.apiCountry}/currencies`)
  .subscribe((res:any)=>{
    // this.countryOne = res
    // this.countryOne  = Array.from(Object.entries({res}));
    this.mappedTwo = Object.keys(res).map(key => ({type: key, value: res[key]}));
    console.log(this.mappedTwo);
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

getCurrencyOne(){
  debugger
  this.http.get(`${environment.apiCountry}/latest`)
  .subscribe((res:any)=>{
    debugger
    // this.number = res
    this.number = Object.keys(res.rates).map(key => ({type: key, value: res[key]}));
    // this.number[3].rates = Object.keys(this.number[3].rates).map(key => ({type: key, value: res[key]}));
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

// this.form.get('numOne').setvalue();