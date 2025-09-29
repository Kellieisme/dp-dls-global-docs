import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { FooterComponent } from '../../partials/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


@Component({
    selector: 'app-styles-detail-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatTabsModule, FooterComponent, MatIcon, MatTableModule],
    templateUrl: './styles-detail-page.component.html',
    styleUrl: './styles-detail-page.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class StylesDetailPageComponent {
  private pageDataSubject = new BehaviorSubject<any>(null); // Create a BehaviorSubject to hold the page data
  pageData$ = this.pageDataSubject.asObservable();
  // pageData$ = this.activatedRoute.data.pipe(map(({ pageData }) => pageData));
  backgroundImage: string = '';

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

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
    } catch (error) {
      console.error('Error loading page data:', error);
    }
  }
  
}

