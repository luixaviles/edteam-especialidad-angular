import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { ArbolComponent } from './arbol.component';

describe('ArbolComponent', () => {
  let component: ArbolComponent;
  let fixture: ComponentFixture<ArbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbolComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
