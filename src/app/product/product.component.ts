import { Component, OnInit } from '@angular/core';
import { Product } from "./product";
import { Router} from "@angular/router";
import { DataService } from "../services/data.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[] = [];

  constructor(private router:Router, private service: DataService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((response) => {
      this.products = response;
      console.log(this.products)
    });
  }

  onClick(product : Product) {
    this.router.navigate(['/Product', product.id]);
  }
}
