import { Component } from '@angular/core';

@Component({
  selector: 'product-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
 public nameLower: string = 'jair';
 public nameUpper: string = 'JAIR';
 public fullname: string = 'JaIr VaLlEjOs';
 public customDate: Date = new Date();
}
