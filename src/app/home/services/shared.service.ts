import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private tableDataAvailable = new BehaviorSubject<boolean>(false);
  currentTableDataAvailable = this.tableDataAvailable;

  getTableData(){
    return this.tableDataAvailable;
  }

  setTableData(data:boolean){
    this.currentTableDataAvailable.next(data);
  }
}
