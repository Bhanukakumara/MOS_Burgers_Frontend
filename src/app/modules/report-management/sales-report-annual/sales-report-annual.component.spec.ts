import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportAnnualComponent } from './sales-report-annual.component';

describe('SalesReportAnnualComponent', () => {
  let component: SalesReportAnnualComponent;
  let fixture: ComponentFixture<SalesReportAnnualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesReportAnnualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesReportAnnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
