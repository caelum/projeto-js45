import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

describe('CaixaDeEntradaComponent', () => {
  let component: CaixaDeEntradaComponent;
  let fixture: ComponentFixture<CaixaDeEntradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDeEntradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDeEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
