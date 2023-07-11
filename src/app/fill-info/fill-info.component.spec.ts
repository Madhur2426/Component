import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInfoComponent } from './fill-info.component';

describe('FillInfoComponent', () => {
  let component: FillInfoComponent;
  let fixture: ComponentFixture<FillInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillInfoComponent]
    });
    fixture = TestBed.createComponent(FillInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
