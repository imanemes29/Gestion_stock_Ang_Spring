import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonAction } from './boutton-action';

describe('BouttonAction', () => {
  let component: BouttonAction;
  let fixture: ComponentFixture<BouttonAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BouttonAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouttonAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
