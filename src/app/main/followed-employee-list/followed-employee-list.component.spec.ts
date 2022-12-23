import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedEmployeeListComponent } from './followed-employee-list.component';

describe('FollowedEmployeeListComponent', () => {
  let component: FollowedEmployeeListComponent;
  let fixture: ComponentFixture<FollowedEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowedEmployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowedEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
