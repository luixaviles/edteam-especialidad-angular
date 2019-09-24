import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaDigitalComponent } from './escuela-digital.component';

describe('EscuelaDigitalComponent', () => {
  let component: EscuelaDigitalComponent;
  let fixture: ComponentFixture<EscuelaDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuelaDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
