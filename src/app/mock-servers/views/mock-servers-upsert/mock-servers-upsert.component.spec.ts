import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockServersUpsertComponent } from './mock-servers-upsert.component';

describe('MockServersUpsertComponent', () => {
  let component: MockServersUpsertComponent;
  let fixture: ComponentFixture<MockServersUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockServersUpsertComponent]
    });
    fixture = TestBed.createComponent(MockServersUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
