import { Component, OnInit } from '@angular/core';
import { Product } from "./product";
import { Router} from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[] = [{
    id: 1,
    name: "Nokia 5.1 Plus",
    price: 899,
    description: "Nokia 3GB/32GB",
    image: "../../assets/nokia"
  },
    {
      id: 2,
      name: "Samsung A10s",
      price: 1099,
      description: "Samsung 32GB/64GB",
      image: "../../assets/samsung"
    },
    {
      id: 3,
      name: "Redmi Mi note 5 pro",
      price: 1299,
      description: "Redmi Mi note 64GB/128GB",
      image: "../../assets/redmi"
    },
    {
      id: 4,
      name: "Vivo Y2",
      price: 950,
      description: "Vivo 32GB/64GB",
      image: "../../assets/vivo"
    }];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(product : Product) {
    this.router.navigate(['/Product', product.id]);
  }
}
