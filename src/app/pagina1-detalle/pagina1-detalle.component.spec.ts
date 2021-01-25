import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina1DetalleComponent } from './pagina1-detalle.component';

describe('Pagina1DetalleComponent', () => {
  let component: Pagina1DetalleComponent;
  let fixture: ComponentFixture<Pagina1DetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina1DetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina1DetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
