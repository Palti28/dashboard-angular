import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDokuComponent } from './about-doku.component';

describe('AboutDokuComponent', () => {
  let component: AboutDokuComponent;
  let fixture: ComponentFixture<AboutDokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
