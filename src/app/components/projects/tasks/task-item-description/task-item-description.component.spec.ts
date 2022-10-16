import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemDescriptionComponent } from './task-item-description.component';

describe('TaskItemDescriptionComponent', () => {
  let component: TaskItemDescriptionComponent;
  let fixture: ComponentFixture<TaskItemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
