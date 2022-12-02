import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolFormComponent } from './vol-form.component';

describe('VolFormComponent', () => {
  let component: VolFormComponent;
  let fixture: ComponentFixture<VolFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
