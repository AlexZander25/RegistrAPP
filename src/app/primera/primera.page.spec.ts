import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeraPage } from './primera.page';

describe('PrimeraPage', () => {
  let component: PrimeraPage;
  let fixture: ComponentFixture<PrimeraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrimeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
