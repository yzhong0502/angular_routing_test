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
  public product: any;
  public id : number;

  constructor(private route: ActivatedRoute, private service: DataService) {
    let para = this.route.snapshot.paramMap.get('id');
    if (para == null) {
      this.id = -1;
      console.log("invalid id")
    } else {
      this.id = parseInt(para);
    }
    this.getData();
  }

  ngOnInit(): void {}

  getData(): void {
    this.service.getProducts().subscribe((response) => {
      this.product = response[this.id-1];
      console.log(this.product)
    });
  }

}
