import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLicenceComponent } from './edit-licence.component';

describe('EditLicenceComponent', () => {
  let component: EditLicenceComponent;
  let fixture: ComponentFixture<EditLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLicenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
