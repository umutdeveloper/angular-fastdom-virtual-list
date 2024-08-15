import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyLayoutComponent } from './dirty-layout.component';

describe('DirtyLayoutComponent', () => {
  let component: DirtyLayoutComponent;
  let fixture: ComponentFixture<DirtyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirtyLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirtyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
