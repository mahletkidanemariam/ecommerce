import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productList : any []=[];

  cartObj : any ={
    "cartId":0,
    "customerId": 1,
    "productId":0,
    "Quantity": 0,
    "AddedDate":""
  }

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    debugger;
    this.loadAllProducts();
  }

  loadAllProducts(){
    debugger;
    this.productService.getAllProducts().subscribe((result: any)=>{
      this.productList =result.data;
    })
  }

  addItemToCart(productId: number){
    debugger;
    this.cartObj.productId= productId;
    this.productService.addToCart(this.cartObj).subscribe((result:any)=>{
      this.productList= result.data;
    })
  }

}
