import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUtilisateur } from './detail-utilisateur';

describe('DetailUtilisateur', () => {
  let component: DetailUtilisateur;
  let fixture: ComponentFixture<DetailUtilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailUtilisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailUtilisateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
