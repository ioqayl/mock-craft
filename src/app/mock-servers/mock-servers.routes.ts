import { MockServersListComponent } from './views/mock-servers-list/mock-servers-list.component';
import { MockServersUpsertComponent } from './views/mock-servers-upsert/mock-servers-upsert.component';

export const MOCK_SERVERS_ROUTES = [
  { path: 'new', component: MockServersUpsertComponent },
  {
    path: ':id/edit',
    component: MockServersUpsertComponent,
  },
  { path: '', component: MockServersListComponent },
];
