import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.productId = id;
  }

}
