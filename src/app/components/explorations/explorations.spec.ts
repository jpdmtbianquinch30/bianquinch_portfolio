import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explorations } from './explorations';

describe('Explorations', () => {
  let component: Explorations;
  let fixture: ComponentFixture<Explorations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explorations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Explorations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
