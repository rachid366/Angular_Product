import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../state/product.state";
import {EventDriverService} from "../../../state/event.driver.service";

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

 // @Output() productEventEmiter : EventEmitter<ActionEvent>=new EventEmitter();
  constructor(private eventDrivenService:EventDriverService) { }

  ngOnInit(): void {
  }

  onNewProduct() {
    //this.productEventEmiter.emit({type:ProductActionsTypes.NEW_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.NEW_PRODUCTS});
  }

  onGetAvailableProducts() {
    //this.productEventEmiter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});

  }

  onGetAllProducts() {
    //this.productEventEmiter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts() {
    //this.productEventEmiter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onSearch(dataForm: any) {
    //this.productEventEmiter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS, payload:dataForm});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS, payload:dataForm});
  }
}
