import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoCamaraPage } from './alumno-camara.page';

describe('AlumnoCamaraPage', () => {
  let component: AlumnoCamaraPage;
  let fixture: ComponentFixture<AlumnoCamaraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoCamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
