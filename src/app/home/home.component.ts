import { Component, OnInit } from '@angular/core';

import { AppModule } from '../app.module';
import { Blog } from '../model/blog-module';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  implements OnInit {

  responsiveOptions: any[] | undefined;
  products: Blog[] = [];

  ngOnInit() {
    this.products = [
      {
          name: 'Modern Interior',
          description: 'iscover the latest trends in modern interior design...',
          image: 'blog1.png'
        
      },
      {
        name: 'Exterior Project',
        description: 'Explore the beauty of eclectic interior design...',
          image: 'blog2.png'
      },
      {
           name: 'Grey Beauty',
           description:'Learn how to incorporate grey tones into your home...',
          image: 'blog3.png'
      },
      {
           name: 'Plantation Interior',
           description:'Bring the outdoors in with plantation-style design...',
          image: 'blog4.png'
      },
      {
           name: 'Rise of Furniture',
           description:'See how to mix and match furniture styles...',
          image: 'blog5.png'
      }
  ];
    
    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}
}
