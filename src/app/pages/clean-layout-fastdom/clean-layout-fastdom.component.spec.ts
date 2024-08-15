import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanLayoutFastdomComponent } from './clean-layout-fastdom.component';

describe('CleanLayoutFastdomComponent', () => {
  let component: CleanLayoutFastdomComponent;
  let fixture: ComponentFixture<CleanLayoutFastdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanLayoutFastdomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanLayoutFastdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
