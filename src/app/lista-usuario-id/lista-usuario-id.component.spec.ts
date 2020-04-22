import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaUsuarioIdComponent } from './lista-usuario-id.component';

describe('ListaUsuarioIdComponent', () => {
  let component: ListaUsuarioIdComponent;
  let fixture: ComponentFixture<ListaUsuarioIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuarioIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuarioIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
