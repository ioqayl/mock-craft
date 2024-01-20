import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCollectionsUpsertComponent } from './mock-collections-upsert.component';

describe('MockCollectionsUpsertComponent', () => {
  let component: MockCollectionsUpsertComponent;
  let fixture: ComponentFixture<MockCollectionsUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockCollectionsUpsertComponent]
    });
    fixture = TestBed.createComponent(MockCollectionsUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
