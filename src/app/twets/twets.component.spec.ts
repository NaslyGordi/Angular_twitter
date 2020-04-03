import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwetsComponent } from './twets.component';

describe('TwetsComponent', () => {
  let component: TwetsComponent;
  let fixture: ComponentFixture<TwetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
