import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auto-scroll-slider',
  templateUrl: './auto-scroll-slider.component.html',
  styleUrls: ['./auto-scroll-slider.component.css'],
  imports: [CommonModule]
})
export class AutoScrollSliderComponent implements AfterViewInit, OnDestroy {
  currentImageIndex: number = 0;
  images: string[] = ['assets/images/slider/1.png', 'assets/images/slider/2.png','assets/images/slider/3.png'];
  intervalValue: any;
  isAutoScrollPaused: boolean = false;  // New flag to track pause status

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
    this.stopAutoScroll();
    if (!this.isAutoScrollPaused) {
      this.startAutoScroll();
    }
  }

  previousSlide() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.stopAutoScroll();
    if (!this.isAutoScrollPaused) {
      this.startAutoScroll();
    }
  }
}
