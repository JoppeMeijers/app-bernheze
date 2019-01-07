import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KccComponent } from './kcc.component';

describe('KccComponent', () => {
  let component: KccComponent;
  let fixture: ComponentFixture<KccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
