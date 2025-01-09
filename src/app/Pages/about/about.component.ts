import { Component } from '@angular/core';
import { BackgoundPatternComponent } from "../../Components/backgound-pattern/backgound-pattern.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BackgoundPatternComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
