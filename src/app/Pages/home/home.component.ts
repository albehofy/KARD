import { Component } from '@angular/core';
import { AutoScrollSliderComponent } from "../../Components/auto-scroll-slider/auto-scroll-slider.component";
import { OfferCardComponent } from "../../Components/offer-card/offer-card.component";
import { OverviewComponent } from "../../Components/overview/overview.component";
import { HomeAddsComponent } from "../../Components/home-adds/home-adds.component";
import { LoaderComponent } from "../loader/loader.component";
import { HomeService } from '../../Services/home.service';

@Component({
    selector: 'app-home',
    imports: [AutoScrollSliderComponent, OfferCardComponent, OverviewComponent, HomeAddsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    sliderImagesUrl:any = []
    productsImagesUrl:any = []
    logos:any = [];
    videoUrl = '';
 constructor(private homeService: HomeService) {
    this.homeService.getImages('slider image for home page').subscribe({
        next: data => {
          this.sliderImagesUrl = data; // Log the data to the console
          console.log(this.sliderImagesUrl)
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
    this.homeService.getImages('slider image for products').subscribe({
        next: data => {
          this.productsImagesUrl = data; // Log the data to the console
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })

      this.homeService.getParagraphs('logo1').subscribe({
        next: data => {
          this.logos[0] = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
      this.homeService.getParagraphs('logo2').subscribe({
        next: data => {
          this.logos[1] = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
      this.homeService.getParagraphs('logo3').subscribe({
        next: data => {
          this.logos[2] = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
      this.homeService.getParagraphs('video_link').subscribe({
        next: data => {
          this.videoUrl = data[0].paragraph;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
 }
}
