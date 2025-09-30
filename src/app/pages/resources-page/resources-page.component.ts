import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../../partials/footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom, map } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-resources-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatCardModule, FooterComponent, RouterLink, MatIconModule],
    templateUrl: './resources-page.component.html',
    styleUrl: './resources-page.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class ResourcesPageComponent {
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
