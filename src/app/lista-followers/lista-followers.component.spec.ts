import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFollowersComponent } from './lista-followers.component';

describe('ListaFollowersComponent', () => {
  let component: ListaFollowersComponent;
  let fixture: ComponentFixture<ListaFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
