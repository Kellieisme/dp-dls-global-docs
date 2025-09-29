import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../../partials/footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom, map } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-resources-detail-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatTabsModule, FooterComponent, RouterLink, MatIconModule, MatButtonModule, MatTableModule],
    templateUrl: './resources-detail-page.component.html',
    styleUrl: './resources-detail-page.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class ResourcesDetailPageComponent {
  pageData$ = this.activatedRoute.data.pipe(map(({ pageData }) => pageData));
  backgroundImage: string = '';

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    const pageData = await firstValueFrom(this.pageData$);
    this.title.setTitle(pageData.metaTitle);
    this.backgroundImage = `background-image: url('./assets/images/${pageData.header.backgroundImg}')`;
    this.changeDetectorRef.markForCheck();
  }
}


