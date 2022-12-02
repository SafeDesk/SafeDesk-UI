import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenoComponent } from './phoneno.component';

describe('PhonenoComponent', () => {
  let component: PhonenoComponent;
  let fixture: ComponentFixture<PhonenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
