import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubstanceComponent } from './add-substance.component';

describe('AddSubstanceComponent', () => {
  let component: AddSubstanceComponent;
  let fixture: ComponentFixture<AddSubstanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubstanceComponent]
    });
    fixture = TestBed.createComponent(AddSubstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
