import { DataService } from './data.service';
import { TestBed, inject } from '@angular/core/testing';

import { PracticeService } from './practice.service';

describe('PracticeService', () => {
  let service: PracticeService;
  let dataService: DataService;
  // 隔離真實資料 方法2
  let dataServiceMock = {
    method1: () => {
      return 1;
    }
  } as DataService;
  // 隔離真實資料 方法3
  let dataServiceSpy = jasmine.createSpyObj('DataService', ['method1']);
  // 以下改寫為 TestBed
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PracticeService,
        // 隔離真實資料 方法2
        {
          provide: DataService,
          useValue: dataServiceMock
        }
      ]
    })
  });
  beforeEach(() => {
    service = TestBed.get(PracticeService);
    dataService = TestBed.get(DataService);
  })

  it('call dataSerice', () => {
    // 隔離真實資料 方法1
    // spyOn(dataService, 'method1').and.returnValue(1);
    // 隔離真實資料 方法3
    dataServiceSpy.method1.and.returnValue(1);
    expect(service.getData()).toBe(1);
  });


  // let service: PracticeService;
  // // 以防跟正式資料庫溝通 方法1
  // let dataService = {
  //   method1: () => {
  //     return 3;
  //   }
  // } as DataService;
  // // 以防跟正式資料庫溝通 方法2
  // // let dataServiceSpy = jasmine.createSpyObj('DataService', ['method1']);
  // // 每一個測試案例(it)執行前
  // beforeEach(() => {
  //   // 以防跟正式資料庫溝通 方法1
  //   service = new PracticeService(dataService);
  //   // 以防跟正式資料庫溝通 方法2
  //   // service = new PracticeService(dataServiceSpy);
  // })

  // it('should be created', () => {
  //   // const service = new PracticeService();
  //   expect(service).toBeTruthy();
  // });

  // it('should sum two number', () => {
  //   // const service = new PracticeService();
  //   expect(service.sum(1, 2)).toBe(3);
  // });

  // it('每次按 add，總計數會增加1', () => {
  //   // const service = new PracticeService();
  //   service.add();
  //   expect(service.totalCount).toBe(1);
  // });

  // it('should multiple', () => {
  //   // const service = new PracticeService();
  //   expect(service.multiple(1, 2)).toBe(2);
  // });

  // it('call dataSerice', () => {
  //   // 以防跟正式資料庫溝通 方法1 mock obj
  //   spyOn(dataService, 'method1').and.returnValue(1);
  //   // 以防跟正式資料庫溝通 方法2 use createSpyObj
  //   // dataServiceSpy.method1.and.returnValue(1);
  //   expect(service.getData()).toBe(1);
  // });

});
