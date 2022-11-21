import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['referenceDates', 'benchMark_1', 'benchMark_2'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  finishedTime:boolean = true;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  tableDataAvailable:boolean = true;
  welcome:boolean = false;
  constructor(private sharedService:SharedService) { 
    this.sharedService.getTableData().subscribe((res)=>{
      if(res){
        this.finishedTime = false;
        this.welcome = true;
        setTimeout(()=>{
          this.finishedTime =true;
          this.tableDataAvailable = true;
        },3000)
      }else{
        this.tableDataAvailable = false;
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  referenceDates: string;
  benchMark_1: string;
  benchMark_2: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079},
  {referenceDates: '22 Jan 2017', benchMark_1: "22.37%", benchMark_2: 1.0079}
];
