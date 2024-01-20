import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockCollectionsListComponent } from './views/mock-collections-list/mock-collections-list.component';
import { MockCollectionsUpsertComponent } from './views/mock-collections-upsert/mock-collections-upsert.component';
import { RouterModule } from '@angular/router';
import { MOCK_COLLECTIONS_ROUTES } from './mock-collections.routes';

@NgModule({
  declarations: [MockCollectionsListComponent, MockCollectionsUpsertComponent],
  imports: [CommonModule, RouterModule.forChild(MOCK_COLLECTIONS_ROUTES)],
  exports: [RouterModule],
})
export class MockCollectionsModule {}
