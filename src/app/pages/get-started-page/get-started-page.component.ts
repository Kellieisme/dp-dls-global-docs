import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../../partials/footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom, map } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {waitForAsync} from "@angular/core/testing";

@Component({
    selector: 'app-get-started-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, FooterComponent, MatButtonModule, MatIcon, RouterLink],
    templateUrl: './get-started-page.component.html',
    styleUrl: './get-started-page.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class GetStartedPageComponent {
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