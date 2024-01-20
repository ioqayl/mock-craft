import { MockCollectionsListComponent } from './views/mock-collections-list/mock-collections-list.component';
import { MockCollectionsUpsertComponent } from './views/mock-collections-upsert/mock-collections-upsert.component';

export const MOCK_COLLECTIONS_ROUTES = [
  { path: 'new', component: MockCollectionsUpsertComponent },
  {
    path: ':id/edit',
    component: MockCollectionsUpsertComponent,
  },
  { path: '', component: MockCollectionsListComponent },
];
