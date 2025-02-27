import { Component, OnInit } from '@angular/core';
import { AutoScrollSliderComponent } from "../../Components/auto-scroll-slider/auto-scroll-slider.component";
import { OfferCardComponent } from "../../Components/offer-card/offer-card.component";
import { OverviewComponent } from "../../Components/overview/overview.component";
import { HomeAddsComponent } from "../../Components/home-adds/home-adds.component";
import { LoaderComponent } from "../loader/loader.component";
import { HomeService } from '../../Services/home.service';
import { OrderService } from '../../Services/add-order.service';
import { IsPagesLoadedService } from '../../Services/is-pages-loaded.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [AutoScrollSliderComponent, OfferCardComponent, OverviewComponent, HomeAddsComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sliderImagesUrl: any = [];
  productsImagesUrl: any = [];
  logos: any = [];
  videoUrl = '';
  ourSpecialCard:string = '';
  allOffers: any = [];
  private isDataLoaded = false;

  constructor(private homeService: HomeService, private orderService: OrderService, private isPagLoaded: IsPagesLoadedService) { 
    this.isPagLoaded.isPageLoaded = false;
  }
  isSliderLoaded = false;
  isProductsLoaded = false;

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.homeService.getImages('slider image for home page').subscribe({
      next: data => {
        this.sliderImagesUrl = data;
        this.isSliderLoaded = true;
        this.checkIfDataLoaded();
      },
      error: err => {
        console.error('Error loading slider images', err);
      }
    });

    this.homeService.getImages('slider image for products').subscribe({
      next: data => {
        this.productsImagesUrl = data;
        this.isProductsLoaded = true;
        // this.checkIfDataLoaded();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });

    this.homeService.getParagraphs('logo1').subscribe({
      next: data => {
        this.logos[0] = data[0].paragraph;
        // this.checkIfDataLoaded();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });

    this.homeService.getParagraphs('logo2').subscribe({
      next: data => {
        this.logos[1] = data[0].paragraph;
        // this.checkIfDataLoaded();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });

    this.homeService.getParagraphs('logo3').subscribe({
      next: data => {
        this.logos[2] = data[0].paragraph;
        // this.checkIfDataLoaded();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });

    this.homeService.getParagraphs('ourSpecialCard').subscribe({
      next: data => {
        console.log(data);
        this.ourSpecialCard = data[0].paragraph;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
    this.homeService.getParagraphs('video_link').subscribe({
      next: data => {
        this.videoUrl = data[0].paragraph;
        // this.checkIfDataLoaded();
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });

    this.orderService.getAllOffers().subscribe({
      next: (response) => {
        response.forEach((element: any) => {
          if (element.price != null) {
            this.allOffers.push(element);
          }
        });
        this.checkIfDataLoaded();
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });

    // Set a timeout to ensure the loader is displayed for at least 2 seconds
    window.setTimeout(() => {
      this.checkIfDataLoaded();
    }, 1000);
  }

  private checkIfDataLoaded() {
    if (this.isSliderLoaded) {
      this.isDataLoaded = true;
      this.isPagLoaded.isPageLoaded = true;
    }
  }
}