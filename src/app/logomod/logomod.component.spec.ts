import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogomodComponent } from './logomod.component';

describe('LogomodComponent', () => {
  let component: LogomodComponent;
  let fixture: ComponentFixture<LogomodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogomodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogomodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
