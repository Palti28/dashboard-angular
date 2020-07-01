import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignDokuComponent } from './design-doku.component';

describe('DesignDokuComponent', () => {
  let component: DesignDokuComponent;
  let fixture: ComponentFixture<DesignDokuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignDokuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignDokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
