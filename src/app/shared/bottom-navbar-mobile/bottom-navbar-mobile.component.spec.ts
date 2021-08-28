import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavbarMobileComponent } from './bottom-navbar-mobile.component';

describe('BottomNavbarMobileComponent', () => {
  let component: BottomNavbarMobileComponent;
  let fixture: ComponentFixture<BottomNavbarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNavbarMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavbarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
