import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  data:boolean = false;
  theCheckbox = false;
  panelOpenState :boolean = false; 

  displayedHead:string[]=['select','No','Name','Description'];
  displayedFields:string[] = ['select','No','Name','Description'];
  myformArray = new FormArray([
    new FormGroup({
      select: new FormControl(""),
      No: new FormControl("1"),
      Name: new FormControl("one"),
      Description: new FormControl("one")

    }),
    new FormGroup({
      select: new FormControl(),
      No: new FormControl("cxzz"),
      Name: new FormControl("zfzdz"),
      Description: new FormControl("zdfzdfd")

    }),
   ])
  constructor() { }

  ngOnInit(): void {
  }
  add()
  {
    debugger
    const newGroup=new FormGroup({});
    this.displayedFields.forEach(x=>{
      newGroup.addControl(x,new FormControl())
    })
    this.myformArray.push(newGroup)

  }

  check(){
   this.data = true;
   this.panelOpenState = true;
  }
 

  edit(){
    
  }
  delete(index:number)
  {
    this.myformArray.removeAt(index);
    this.data = false;
   }

  cancle(){

  }

}
