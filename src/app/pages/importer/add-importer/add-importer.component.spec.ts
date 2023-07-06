import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImporterComponent } from './add-importer.component';

describe('AddImporterComponent', () => {
  let component: AddImporterComponent;
  let fixture: ComponentFixture<AddImporterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddImporterComponent]
    });
    fixture = TestBed.createComponent(AddImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
