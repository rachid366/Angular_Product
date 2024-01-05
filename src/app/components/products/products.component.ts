import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {Observable, of} from "rxjs";
import {AppDataState, DataStateEnum} from "../../state/product.state";
import {catchError, map, startWith} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$:Observable<AppDataState<Product[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;
  constructor(private productsService:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
   this.products$=
     this.productsService.getAllProducts().pipe(
        map(data=>{
          console.log(data);
          return ({dataState:DataStateEnum.LOADED,data:data})
        }),
       startWith({dataState:DataStateEnum.LOADING}),
       catchError(err => of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
     );
  }

  onGetSelectedProducts() {
    this.products$=
      this.productsService.getSelectedProducts().pipe(
        map(data=>{
          console.log(data);
          return ({dataState:DataStateEnum.LOADED,data:data})
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  onGetAvailableProducts() {
    this.products$=
      this.productsService.getAvialableProducts().pipe(
        map(data=>{
          console.log(data);
          return ({dataState:DataStateEnum.LOADED,data:data})
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  onSearch(dataForm: any) {
    this.products$=
      this.productsService.searchProducts(dataForm.keyword).pipe(
        map(data=>{
          console.log(data);
          return ({dataState:DataStateEnum.LOADED,data:data})
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err => of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  protected readonly onselect = onselect;

  onSelect(P: any) {
    this.productsService.select(P).subscribe(data=>{
      P.selected=data.selected;
    })
  }

  onDelete(p: Product) {
    let v=confirm("Etes vous sure ?");
    if (v==true)
    this.productsService.deleteProduct(p).subscribe(data=>{
      this.onGetAllProducts()
        })
  }

  onNewProduct() {
      this.router.navigateByUrl("/newProduct");
  }

  onEdit(p: Product) {
    this.router.navigateByUrl("/editProduct/"+p.id);
  }
}
