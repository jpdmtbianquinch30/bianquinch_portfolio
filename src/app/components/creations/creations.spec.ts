import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Creations } from './creations';

describe('Creations', () => {
  let component: Creations;
  let fixture: ComponentFixture<Creations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Creations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Creations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
