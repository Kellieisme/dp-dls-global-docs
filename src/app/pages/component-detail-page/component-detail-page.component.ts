import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../partials/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-component-detail-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FooterComponent, MatIconModule, MatTabsModule, MatDividerModule, MatTableModule],
  templateUrl: './component-detail-page.component.html',
  styleUrl: './component-detail-page.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class ComponentDetailPageComponent implements OnInit {
  private pageDataSubject = new BehaviorSubject<any>(null); // Create a BehaviorSubject to hold the page data
  pageData$ = this.pageDataSubject.asObservable();
  // pageData$ = this.activatedRoute.data.pipe(map(({ pageData }) => pageData));
  backgroundImage: string = '';
  storybookDefaultStory: string = '';
  storybookId: string = '';

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  storybookEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://design.pages.boeing.com/design-system/dls-global-angular/?path=/story/${this.storybookId}--${this.storybookDefaultStory}&full=1&shortcuts=false&singleStory=true`);
  }

  storybookFullUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://design.pages.boeing.com/design-system/dls-global-angular/?path=/story/${this.storybookId}--${this.storybookDefaultStory}`);
  }

  storybookDocsEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://design.pages.boeing.com/design-system/dls-global-angular/iframe.html?id=${this.storybookId}--overview&singleStory=true&viewMode=docs&theme=light`);
  }

  storybookDocsFullUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://design.pages.boeing.com/design-system/dls-global-angular/?path=/docs/${this.storybookId}--overview`);
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.pageDataSubject.next(data['pageData']);
      this.initializeData(data['pageData']).then(r => { });
    });
  }

  private async initializeData(pageData: any): Promise<void> {
    try {
      this.title.setTitle(pageData.metaTitle);
      this.backgroundImage = `background-image: url('./assets/images/${pageData.header.backgroundImg}')`;
      this.storybookDefaultStory = pageData.storybookDefaultStory;
      this.storybookId = pageData.storybookId;
    } catch (error) {
      console.error('Error loading page data:', error);
    }
  }
}
