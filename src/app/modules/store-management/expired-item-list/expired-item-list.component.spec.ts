import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredItemListComponent } from './expired-item-list.component';

describe('ExpiredItemListComponent', () => {
  let component: ExpiredItemListComponent;
  let fixture: ComponentFixture<ExpiredItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiredItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiredItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
