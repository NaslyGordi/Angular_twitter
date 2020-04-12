import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTweetAutorComponent } from './lista-tweet-autor.component';

describe('ListaTweetAutorComponent', () => {
  let component: ListaTweetAutorComponent;
  let fixture: ComponentFixture<ListaTweetAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTweetAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTweetAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
