import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../Services/home.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auto-scroll-slider',
  templateUrl: './auto-scroll-slider.component.html',
  styleUrls: ['./auto-scroll-slider.component.css'],
  imports: [CommonModule,RouterLink]
})
export class AutoScrollSliderComponent implements AfterViewInit, OnDestroy, OnInit {
  currentImageIndex: number = 0;
  images: string[] = ['assets/images/slider/1.png'];
  intervalValue: any;
  isAutoScrollPaused: boolean = false;  // New flag to track pause status

  
  constructor(private homeService: HomeService) {
    
  }
  
  ngAfterViewInit() {
    console.log('Auto scroll slider component initialized');
    if (this.images.length > 0) {
      this.startAutoScroll();
      console.log('Auto scroll started');
    }
  }

  ngOnDestroy() {
    console.log('Auto scroll slider component destroyed');
    this.stopAutoScroll();  // Clear interval on component destruction
  }

  startAutoScroll() {
    if (this.isAutoScrollPaused) return;  // Prevent auto-scroll from starting if it's paused
    this.intervalValue = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000);
  }

  stopAutoScroll() {
    clearInterval(this.intervalValue);
  }

  pauseAutoScroll() {
    this.isAutoScrollPaused = true;
    this.stopAutoScroll();  // Stop the interval when paused
  }

  resumeAutoScroll() {
    this.isAutoScrollPaused = false;
    this.startAutoScroll();  // Resume the interval when not paused
  }

  goToSlide(index: number) {
    this.currentImageIndex = index;
    this.stopAutoScroll();  // Stop auto-scrolling when manually changed
    if (!this.isAutoScrollPaused) {
      this.startAutoScroll();  // Restart auto-scrolling after manual change
    }
  }

  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    if (!this.isAutoScrollPaused) {
      this.stopAutoScroll();
      this.startAutoScroll();
    }
  }

  previousSlide() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    if (!this.isAutoScrollPaused) {
      this.stopAutoScroll();
      this.startAutoScroll();
    }
  }

  ngOnInit(): void {
    this.homeService.getImages('slider image for home page').subscribe({
      next: data => {
        this.images = [];
        data.map((item: any) => {
          this.images.push(item.photo);
        })
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }
}
