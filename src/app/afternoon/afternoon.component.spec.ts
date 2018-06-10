import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfternoonComponent } from './afternoon.component';

describe('AfternoonComponent', () => {
  let component: AfternoonComponent;
  let fixture: ComponentFixture<AfternoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AfternoonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfternoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('message should be On', () => {

  })
  it('message should be Off', () => {

  })

  it('display should be On', () => {
    const nativeElement = fixture.debugElement.nativeElement as HTMLElement;
    const spanElement = nativeElement.querySelector('span');
    // console.log(spanElement);
    component.clicked();
    fixture.detectChanges();

    expect(spanElement.innerText).toContain('ON');
  })

  it('display should be OFF', () => {
    const nativeElement = fixture.debugElement.nativeElement as HTMLElement;
    const spanElement = nativeElement.querySelector('span');

    fixture.detectChanges();

    expect(spanElement.innerText).toContain('OFF');
  })

  it('display ON when button clicked', () => {
    const nativeElement = fixture.debugElement.nativeElement as HTMLElement;
    const buttonElement = nativeElement.querySelector('button');

    buttonElement.click();
    fixture.detectChanges();
    const spanElement = nativeElement.querySelector('span');
    expect(spanElement.innerText).toContain('ON');
  })

  it('display OFF when button clicked', () => {
    const nativeElement = fixture.debugElement.nativeElement as HTMLElement;
    const buttonElement = nativeElement.querySelector('button');

    // buttonElement.click();
    // buttonElement.click();

    component.isOn = false;

    fixture.detectChanges();
    const spanElement = nativeElement.querySelector('span');
    expect(spanElement.innerText).toContain('OFF');
  })

});
