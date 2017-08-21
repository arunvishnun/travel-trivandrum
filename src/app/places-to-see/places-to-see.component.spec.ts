import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesToSeeComponent } from './places-to-see.component';

describe('PlacesToSeeComponent', () => {
  let component: PlacesToSeeComponent;
  let fixture: ComponentFixture<PlacesToSeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesToSeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesToSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
