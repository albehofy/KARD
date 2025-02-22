import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuTogglerService {

  constructor() { }
  isMenuOpen:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
