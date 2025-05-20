import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../../partials/footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom, map } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-contact-detail-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, FooterComponent, MatIconModule, MatButtonModule, MatDividerModule, RouterLink],
    templateUrl: './contact-detail-page.component.html',
    styleUrl: './contact-detail-page.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class ContactDetailPageComponent {
  pageData$ = this.activatedRoute.data.pipe(map(({ pageData }) => pageData));
  backgroundImage: string = '';

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    const pageData = await firstValueFrom(this.pageData$);
    this.title.setTitle(pageData.metaTitle);
    this.backgroundImage = `background-image: url('./assets/images/${pageData.header.backgroundImg}')`;
    this.changeDetectorRef.markForCheck();
  }
}
