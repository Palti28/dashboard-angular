import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopDokuComponent } from './develop-doku.component';

describe('DevelopDokuComponent', () => {
  let component: DevelopDokuComponent;
  let fixture: ComponentFixture<DevelopDokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopDokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopDokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
