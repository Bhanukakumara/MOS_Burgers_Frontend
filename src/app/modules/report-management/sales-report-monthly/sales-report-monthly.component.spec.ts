import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportMonthlyComponent } from './sales-report-monthly.component';

describe('SalesReportMonthlyComponent', () => {
  let component: SalesReportMonthlyComponent;
  let fixture: ComponentFixture<SalesReportMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesReportMonthlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesReportMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
