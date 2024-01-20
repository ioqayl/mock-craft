import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCollectionsListComponent } from './mock-collections-list.component';

describe('MockCollectionsListComponent', () => {
  let component: MockCollectionsListComponent;
  let fixture: ComponentFixture<MockCollectionsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockCollectionsListComponent]
    });
    fixture = TestBed.createComponent(MockCollectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
