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

  describe('處理DOM', () => {
    let nativeElement;
    let spanElement;
    beforeEach(() => {
       nativeElement = fixture.debugElement.nativeElement as HTMLElement;
       spanElement = nativeElement.querySelector('span');
    })

    it('display should be On', () => {

      // console.log(spanElement);
      component.clicked();
      fixture.detectChanges();

      expect(spanElement.innerText).toContain('ON');
    })

    it('display should be OFF', () => {
      fixture.detectChanges();

      expect(spanElement.innerText).toContain('OFF');
    })

    it('display ON when button clicked', () => {
      const buttonElement = nativeElement.querySelector('button');

      buttonElement.click();
      fixture.detectChanges();

      expect(spanElement.innerText).toContain('ON');
    })

    it('display OFF when button clicked', () => {
      const buttonElement = nativeElement.querySelector('button');

      // buttonElement.click();
      // buttonElement.click();

      component.isOn = false;

      fixture.detectChanges();

      expect(spanElement.innerText).toContain('OFF');
    })
  })



});
