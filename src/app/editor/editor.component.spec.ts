import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDITORComponent } from './editor.component';

describe('EDITORComponent', () => {
  let component: EDITORComponent;
  let fixture: ComponentFixture<EDITORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EDITORComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDITORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
