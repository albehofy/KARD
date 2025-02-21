import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsPagesLoadedService {

  constructor() { }
  private isPageLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isPageLoaded(): BehaviorSubject<boolean> {
    return this.isPageLoaded$;
  }
  set isPageLoaded(value: boolean) {
    this.isPageLoaded$.next(value);
  }
}
