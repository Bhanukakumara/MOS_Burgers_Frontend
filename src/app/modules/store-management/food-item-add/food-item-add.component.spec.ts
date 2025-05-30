import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemAddComponent } from './food-item-add.component';

describe('FoodItemAddComponent', () => {
  let component: FoodItemAddComponent;
  let fixture: ComponentFixture<FoodItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodItemAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
