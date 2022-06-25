import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBindingExampleComponent } from './all-binding-example.component';

describe('AllBindingExampleComponent', () => {
  let component: AllBindingExampleComponent;
  let fixture: ComponentFixture<AllBindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBindingExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
