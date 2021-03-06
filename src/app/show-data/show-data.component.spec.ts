import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShowDataComponent } from './show-data.component';
import { of } from 'rxjs';
import { Component, ViewChild } from '@angular/core';

describe('ShowDataComponent', () => {
  let component: ShowDataComponent;
  let fixture: ComponentFixture<ShowDataComponent>;
  let httpController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDataComponent],
      imports: [HttpClientTestingModule],
      // providers: [HttpTestingController]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataComponent);
    component = fixture.componentInstance;
    httpController = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call url api', () => {
    const mockResult = { name: 'Kevin' };
    const expectResult = 'Kevin!!';
    component.getData().subscribe(value => {
      expect(value).toEqual(expectResult);
    });

    const req = httpController.expectOne('url');
    expect(req.request.method).toEqual('GET');
    req.flush(mockResult);

    // const req = httpController.expectOne({ method: 'GET', url: 'url' });

    httpController.verify(); // 確保上面都有跑到 可放在afterEach裡
  });

  it('use spyOn', () => {
    const mockResult = { name: 'Kevin' };
    const expectResult = 'Kevin!!';

    spyOn(component['http'], 'get').and.returnValue(of(mockResult));

    component.getData().subscribe(value => {
      expect(component['http'].get)
        .toHaveBeenCalledWith('url');
      expect(value).toEqual(expectResult);
    })
  })

  it('use spyObject', () => {
    // TestingModule -> providers ->
    // {
    //   provide: HttpClient, useValue:httpClientSpyObject
    // }
  })

  it('use output something', ()=>{
    component.go.subscribe(value=>{
      expect(value).toBe(true);
    });
    component.somethingClick();
  })
});




// input
// @Component({
//   template: `<app-show-data [data]="mockData"></app-show-data>`
// })
// export class TestHostComponent {
//   @ViewChild(ShowDataComponent) child;
//   mockData;
// }
// describe('ShowDataComponent input output', () => {
//   let fixture: ComponentFixture<TestHostComponent>;
//   let component: TestHostComponent;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         ShowDataComponent,
//         TestHostComponent
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(TestHostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should have data input', () => {

//   })
// })
