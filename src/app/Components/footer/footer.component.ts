import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-footer',
    imports: [RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
    CRN:string = '1010857681';
    TRN:string = '311539478700003';
    ECC:string = '0000051907';

}
