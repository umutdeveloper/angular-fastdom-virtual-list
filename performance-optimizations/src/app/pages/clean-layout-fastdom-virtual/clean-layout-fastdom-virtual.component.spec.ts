import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanLayoutFastdomVirtualComponent } from './clean-layout-fastdom-virtual.component';

describe('CleanLayoutFastdomVirtualComponent', () => {
  let component: CleanLayoutFastdomVirtualComponent;
  let fixture: ComponentFixture<CleanLayoutFastdomVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanLayoutFastdomVirtualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanLayoutFastdomVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
