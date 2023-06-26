import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubstanceComponent } from './update-substance.component';

describe('UpdateSubstanceComponent', () => {
  let component: UpdateSubstanceComponent;
  let fixture: ComponentFixture<UpdateSubstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSubstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
