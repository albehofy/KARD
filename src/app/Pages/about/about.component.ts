import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BackgoundPatternComponent } from '../../Components/backgound-pattern/backgound-pattern.component';

@Component({
    selector: 'app-about',
    imports: [BackgoundPatternComponent, ButtonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {

}
