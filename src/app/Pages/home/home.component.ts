import { Component } from '@angular/core';
import { AutoScrollSliderComponent } from "../../Components/auto-scroll-slider/auto-scroll-slider.component";
import { OfferCardComponent } from "../../Components/offer-card/offer-card.component";
import { OverviewComponent } from "../../Components/overview/overview.component";
import { HomeAddsComponent } from "../../Components/home-adds/home-adds.component";

@Component({
    selector: 'app-home',
    imports: [AutoScrollSliderComponent, OfferCardComponent, OverviewComponent, HomeAddsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
