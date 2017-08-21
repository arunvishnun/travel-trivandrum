import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesToEatOutComponent } from './places-to-eat-out.component';

describe('PlacesToEatOutComponent', () => {
  let component: PlacesToEatOutComponent;
  let fixture: ComponentFixture<PlacesToEatOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesToEatOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesToEatOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
