import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemListComponent } from './food-item-list.component';

describe('FoodItemListComponent', () => {
  let component: FoodItemListComponent;
  let fixture: ComponentFixture<FoodItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
