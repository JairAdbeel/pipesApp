import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {
    // public items: MenuItem[] | undefined;
    public isUpperCase: boolean = false;
    public orderBy?: keyof Hero;
    public colores = Color;
    public heroes: Hero[] = [
        {
            name: 'SuperMan',
            canFly: true,
            color: Color.blue,
        },
        {
            name: 'Batman',
            canFly: false,
            color: Color.black,
        },
        {
            name: 'Daredevil',
            canFly: false,
            color: Color.red,
        },
        {
            name: 'Robin',
            canFly: false,
            color: Color.green,
        },
        {
            name: 'Green Lintern',
            canFly: true,
            color: Color.green,
        },
    ]

    toggleUpperCase(): void {
        this.isUpperCase = !this.isUpperCase;
    }

    changeOrder( value: keyof Hero): void {
        this.orderBy = value;
    }

    ngOnInit(): void {
        // this.items = [
        //     {
        //         label: 'Update',
        //         icon: 'pi pi-refresh'
        //     },
        //     {
        //         label: 'Delete',
        //         icon: 'pi pi-times'
        //     },
        //     {
        //         label: 'Angular',
        //         icon: 'pi pi-external-link',
        //         url: 'http://angular.io'
        //     },
        //     {
        //         label: 'Router',
        //         icon: 'pi pi-upload',
        //         routerLink: '/fileupload'
        //     }
        // ];
    }

    
}
