import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { firstValueFrom, map } from 'rxjs';
import { DasFooterComponent } from '../../partials/das-footer/das-footer.component';

@Component({
  selector: 'app-das-section-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    DasFooterComponent
  ],
  templateUrl: './das-section-page.component.html',
  styleUrl: './das-section-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DasSectionPageComponent implements OnInit {
  pageData$ = this.activatedRoute.data.pipe(map(({ pageData }) => pageData));

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly title: Title
  ) {}

  async ngOnInit(): Promise<void> {
    const pageData = await firstValueFrom(this.pageData$);
    if (pageData?.metaTitle) {
      this.title.setTitle(pageData.metaTitle);
    }
  }
}
