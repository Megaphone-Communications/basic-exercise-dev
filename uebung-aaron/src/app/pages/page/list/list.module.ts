import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../../../shared/layouts/description/shared.module';
import { DataTableComponent } from '../data-table/data-table.component';

@NgModule({
  declarations: [ListComponent, DataTableComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    ReactiveFormsModule,
    MatSelectModule,
    TranslateModule,
  ],
})
export class ListModule {}
