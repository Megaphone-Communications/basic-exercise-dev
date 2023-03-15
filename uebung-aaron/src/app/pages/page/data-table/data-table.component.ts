import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';

const EXAMPLE_DATA: any[] = [
  { firstname: 'hallo', lastname: 'hallo', description: 'hallo' },
  { firstname: 'test', lastname: 'hallo', description: 'hallo' },
  { firstname: 'tblabla', lastname: 'hallo', description: 'hallo' },
  { firstname: 'lorem Ipsum', lastname: 'hallo', description: 'hallo' },
  { firstname: 'Moin', lastname: 'hallo', description: 'hallo' },
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource: any;
  searchText: string = '';
  PlaceholderKey: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstname', 'lastname', 'description'];

  constructor(private translateService: TranslateService) {
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
  }
  searchthis() {
    this.dataSource.filter = this.searchText;
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  ngOnInit(): void {}
}
