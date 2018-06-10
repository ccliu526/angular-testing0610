import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
@Output() go = new EventEmitter<boolean>()
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getData() {
    return this.http.get('url').pipe(map(
      (value: any) => value.name + '!!'
    ));
  }

  somethingClick(){
    this.go.emit(true);
  }
}
