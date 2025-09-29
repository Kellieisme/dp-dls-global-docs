import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DasFooterComponent } from '../../partials/das-footer/das-footer.component';
import { MatTableModule } from '@angular/material/table';
import {waitForAsync} from "@angular/core/testing";

@Component({
    selector: 'app-das-home-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, DasFooterComponent, RouterLink, MatTableModule],
    templateUrl: './das-home-page.component.html',
    styleUrl: './das-home-page.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class DasHomePageComponent implements OnInit {
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
