import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockServersListComponent } from './mock-servers-list.component';

describe('MockServersListComponent', () => {
  let component: MockServersListComponent;
  let fixture: ComponentFixture<MockServersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockServersListComponent]
    });
    fixture = TestBed.createComponent(MockServersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
