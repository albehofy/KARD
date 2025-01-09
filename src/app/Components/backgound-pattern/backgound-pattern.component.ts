import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-backgound-pattern',
    imports: [],
    templateUrl: './backgound-pattern.component.html',
    styleUrl: './backgound-pattern.component.css'
})
export class BackgoundPatternComponent {
  @Input() patternType: string = 'pattern-1';

}
