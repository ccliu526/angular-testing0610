import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {
  totalCount = 0;
  constructor(private dataService: DataService) { }
  // 加上型別防呆
  sum(a: number, b: number): number {
    return a + b;
  }

  add() {
    this.totalCount++;
  }

  multiple(a, b) {
    return a * b;
  }

  getData(){
    return this.dataService.method1();
  }
}
