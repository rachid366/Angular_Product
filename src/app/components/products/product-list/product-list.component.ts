import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../../state/product.state";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productsInput$:Observable<AppDataState<Product[]>> |null=null;
  //@Output() productsEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  readonly DataStateEnum=DataStateEnum;
  constructor() { }

  ngOnInit(): void {

  }



/*
  onSelect(p: Product) {
    this.productsEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCTS,payload:p})
  }


  onDelete(p: Product) {
    this.productsEventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCTS,payload:p})
  }

  onEdit(p: Product) {
    this.productsEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCTS,payload:p})
  }

  onActionEvent($event: ActionEvent) {
    this.productsEventEmitter.emit($event);
  }
   */
}
