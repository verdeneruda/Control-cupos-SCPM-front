import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLicenceComponent } from './search-licence.component';

describe('SearchLicenceComponent', () => {
  let component: SearchLicenceComponent;
  let fixture: ComponentFixture<SearchLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLicenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
