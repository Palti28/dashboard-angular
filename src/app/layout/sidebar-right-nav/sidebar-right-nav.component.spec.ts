import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRightNavComponent } from './sidebar-right-nav.component';

describe('SidebarRightNavComponent', () => {
  let component: SidebarRightNavComponent;
  let fixture: ComponentFixture<SidebarRightNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarRightNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRightNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
