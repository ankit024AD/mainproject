import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


@Component({
  selector: 'app-buttonrender',
  templateUrl: './buttonrender.component.html',
  styleUrls: ['./buttonrender.component.scss']
})
export class ButtonrenderComponent implements ICellRendererAngularComp  {
 private params: any;
label: any;
  constructor() { }
  refresh(params?: any): boolean {
    return true;

  }
  agInit(params:any): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  onClick($event: any) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }
}
