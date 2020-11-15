import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityincrementComponent } from './quantityincrement.component';

describe('QuantityincrementComponent', () => {
  let component: QuantityincrementComponent;
  let fixture: ComponentFixture<QuantityincrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityincrementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityincrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
