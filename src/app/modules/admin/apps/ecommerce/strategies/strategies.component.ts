import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss']
})
export class StrategiesComponent implements OnInit {

  toppings: FormGroup;
  btnDisabled: false;
  filter = false;
  options: EnumValue[] = [];
  check: any = [];
  checked: any = [];
  rightArray: any = [];
  rightcheck: any = [];
  name: boolean;
  selected: boolean = false;
  selectCheck: boolean = false;
  rightCheckArray: EnumValue[] = [];
  leftCheckArray: EnumValue[] = [];
  tempCheckArray: EnumValue[] = [];

  constructor(private fb: FormBuilder,
    private changeDetector: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    debugger
    this.options = [
      { id: 1, name: 'Min Cost Of Printing', selected: false },
      { id: 2, name: 'Min Shipping Time', selected: false },
      { id: 3, name: 'Vendor Performance', selected: false },
      { id: 4, name: 'IFC Vendor', selected: false },
      { id: 5, name: 'Vendor Capacity', selected: false },
      { id: 6, name: 'Ranking', selected: false },
      { id: 7, name: 'Deactivation date', selected: false },

    ];

    this.leftCheckArray = JSON.parse(JSON.stringify(this.options));
    this.changeDetector.detectChanges();
  }

  checkBoxName(event: any, isChecked: boolean) {
  }

  rightSidePush(): void {
    this.rightCheckArray = JSON.parse(JSON.stringify(this.leftCheckArray));
    this.leftCheckArray = [];
    this.changeDetector.detectChanges();
  }

  leftSidePush(): void {
    this.leftCheckArray = JSON.parse(JSON.stringify(this.rightCheckArray));
    this.rightCheckArray = [];
    this.changeDetector.detectChanges();
  }

  movedataLeft(event: MatCheckboxChange) {
    let val = this.leftCheckArray.find(x => x.id == parseInt(event.source.name));
    this.tempCheckArray.push(val);
  }

  movedataRight(event: MatCheckboxChange) {
    let val = this.rightCheckArray.find(x => x.id == parseInt(event.source.name));
    this.tempCheckArray.push(val);

  }

  right() {
    this.rightCheckArray = JSON.parse(JSON.stringify(this.tempCheckArray));
    for (let index = 0; index < this.tempCheckArray.length; index++) {
      const element = this.tempCheckArray[index];
      this.leftCheckArray = this.leftCheckArray.filter(x => x.id !== element.id);
    }
    this.tempCheckArray = [];



  }

  left() {
    this.leftCheckArray = JSON.parse(JSON.stringify(this.tempCheckArray));
    for (let index = 0; index < this.tempCheckArray.length; index++) {
      const element = this.tempCheckArray[index];
      this.rightCheckArray = this.rightCheckArray.filter(x => x.id !== element.id);
    }
    this.tempCheckArray = [];
    // this.rightCheckArray = [];
  }

}

export class EnumValue {
  id: number;
  name: string;
  selected: boolean;
}