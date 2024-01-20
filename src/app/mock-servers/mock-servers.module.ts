import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockServersUpsertComponent } from './views/mock-servers-upsert/mock-servers-upsert.component';
import { MockServersListComponent } from './views/mock-servers-list/mock-servers-list.component';
import { RouterModule } from '@angular/router';
import { MOCK_SERVERS_ROUTES } from './mock-servers.routes';

@NgModule({
  declarations: [MockServersUpsertComponent, MockServersListComponent],
  imports: [CommonModule, RouterModule.forChild(MOCK_SERVERS_ROUTES)],
  exports: [RouterModule],
})
export class MockServersModule {}
