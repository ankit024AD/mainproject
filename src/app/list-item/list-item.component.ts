import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../shared/services.service";
import { ColDef } from 'ag-grid-community'
import { ButtonrenderComponent } from '../buttonrender/buttonrender.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  public itemList: any = [];
  public itemId: any;
  frameworkComponents: any;

  constructor(public serv: ServicesService, private router: Router) { 
    this.frameworkComponents = {
      buttonRenderer: ButtonrenderComponent ,
    }
  }

  ngOnInit(): void {
    this.getInventoryItems();
  }

  // Get the Items to List
  getInventoryItems(){
    this.serv.getAllItem().subscribe(data => {
      this.itemList = data;
     
    });
  }

  // Delete the Item by id
  deleteItem(id: any){
    this.serv.deleteItem(id).subscribe(data => {
      this.getInventoryItems();
    });
  }
  public defaultColDef ={
    sortable: true,
    filter: true,
    floatingFilter: true,}
  columnDefs: ColDef[] = [
    { field: 'product_code',headerName: 'Product Code', },
    { field: 'product_name' , headerName: 'Product Name',},
    { field: 'price' , headerName: 'Price',},
    { field: 'description', headerName: 'Description',},
    { field: 'quantity', headerName: 'Quantity',},
    {
      headerName: '',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.editItemInGrid.bind(this) ,
        label: 'Edit',
      }
      
    },
    {
      headerName: '',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.deleteItemFromGrid.bind(this) ,
        label: 'Delete',
      }
      
    }
    
]; 
//editItem in grid by Id
editItemInGrid(rowValue: any){
  this.router.navigate(['/editItem/'+rowValue.rowData.id])
}
// Delete the Item by id
deleteItemFromGrid(rowValue: any){
  
  this.serv.deleteItem(rowValue.rowData.id).subscribe(data => {
    this.getInventoryItems();
  });
 }

onGridReady(params:any) { 
  
}
}
