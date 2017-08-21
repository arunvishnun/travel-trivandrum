import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismGuidesComponent } from './tourism-guides.component';

describe('TourismGuidesComponent', () => {
  let component: TourismGuidesComponent;
  let fixture: ComponentFixture<TourismGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourismGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
