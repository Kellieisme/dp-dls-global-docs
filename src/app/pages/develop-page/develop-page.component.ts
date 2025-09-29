import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../../partials/footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom, map } from 'rxjs';
import {waitForAsync} from "@angular/core/testing";

@Component({
    selector: 'app-develop-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, FooterComponent],
    templateUrl: './develop-page.component.html',
    styleUrl: './develop-page.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class DevelopPageComponent {
  pageData$ = this.activatedRoute.data.pipe(map(({ pageData }) => pageData));

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    const pageData = await firstValueFrom(this.pageData$);
    this.title.setTitle(pageData.metaTitle);
  }
}
