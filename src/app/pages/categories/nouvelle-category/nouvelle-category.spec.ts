import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCategory } from './nouvelle-category';

describe('NouvelleCategory', () => {
  let component: NouvelleCategory;
  let fixture: ComponentFixture<NouvelleCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelleCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
