import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afternoon',
  template: `
  <button (click)="clicked()">click me</button>
  <span>{{message}}</span>
  `,
  styleUrls: ['./afternoon.component.css']
})
export class AfternoonComponent implements OnInit {
  isOn: boolean;
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  clicked() {
    this.isOn = !this.isOn;
  }

  get message() {
    return this.isOn ? 'ON' : 'OFF';
  }
}
