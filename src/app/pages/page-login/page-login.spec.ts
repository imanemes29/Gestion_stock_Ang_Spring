import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLogin } from './page-login';

describe('PageLogin', () => {
  let component: PageLogin;
  let fixture: ComponentFixture<PageLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
