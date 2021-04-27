import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Product } from "../product/product";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public products: Product[] = [];
  public product: Product;
  public id : number;

  constructor(private route: ActivatedRoute, private service: DataService) {
    this.getData();
    while (this.products.length == 0) {
      setTimeout(()=>{ //deal with asyn data
        console.log('waiting for data...')
      },100);
    }
    let para = this.route.snapshot.paramMap.get('id');
    if (para == null) {
      this.id = -1;
      console.log("invalid id")
    } else {
      this.id = parseInt(para);
    }
    this.product = this.products[this.id - 1];
  }

  ngOnInit(): void {}

  getData(): void {
    this.service.getProducts().subscribe((response) => {
      this.products = response;
      console.log(response)
    });
  }

}
