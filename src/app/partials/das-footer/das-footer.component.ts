import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-das-footer',
    imports: [RouterLink],
    templateUrl: './das-footer.component.html',
    styleUrl: './das-footer.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class DasFooterComponent {

}
