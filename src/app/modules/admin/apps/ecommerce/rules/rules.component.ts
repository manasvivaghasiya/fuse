import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  data: boolean = false;
  theCheckbox = false;
  panelOpenState: boolean = false;
  // listOfData: any[] = [];
  checked: boolean = false;
  // checkboxflag:boolean =false;

  displayedHead: string[] = ['No', 'Name', 'Description'];
  displayedFields: string[] = ['No', 'Name', 'Description'];
  myformArray = new FormArray([
    new FormGroup({
      // id: new FormControl("1"),
      No: new FormControl("1"),
      Name: new FormControl("keval"),
      Description: new FormControl("parekh"),
      // Checked: new FormControl(false),
      // Description: new FormControl("one")

    }),
    new FormGroup({
      // id: new FormControl("2"),
      No: new FormControl("2"),
      Name: new FormControl("hally"),
      Description: new FormControl("parekh"),
      // Checked: new FormControl(false),
      // Description: new FormControl("zdfzdfd")

    }),

    new FormGroup({
      No: new FormControl("3"),
      Name: new FormControl("Manasvi"),
      Description: new FormControl("vaghasiya"),
      // Checked: new FormControl(false),
      // Description: new FormControl("zdfzdfd")

    }),
    new FormGroup({
      No: new FormControl("4"),
      Name: new FormControl("hello"),
      Description: new FormControl("world"),
      // Checked: new FormControl(false),
      // Description: new FormControl("zdfzdfd")

    }),
    
  ])
  constructor() { }

  ngOnInit(): void {

  }

  add() {
    debugger
    const newGroup = new FormGroup({});
    this.displayedFields.forEach(x => {
      newGroup.addControl(x, new FormControl())
    })
    this.myformArray.push(newGroup)

  }
  checkboxflag(e: MatCheckboxChange) {
    debugger
    this.data = e.checked;
    // alert(this.data);
    // this.data = false;
  }
  check() {
    // this.data = true;
    // element.Checked = true;

    //  element.data = false;
    //  this.panelOpenState = true;
  }


  edit() {
    // this.data = false;
  }

  delete(index: number) {
    this.myformArray.removeAt(index);
    // element.Checked = false;
     this.data = false;
  }

  cancle(element) {
    debugger
    this.data = false;
    element.Checked = false;

  }


}

export interface eldisplayedFieldsement {
  id: number;
  no: number;
  name: string;
  description: string;
}
