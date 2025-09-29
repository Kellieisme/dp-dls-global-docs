import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule, MatCardHeader } from '@angular/material/card';
import { FooterComponent } from '../../partials/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { waitForAsync } from "@angular/core/testing";

@Component({
    selector: 'app-home-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatCardHeader, FooterComponent, RouterLink, MatTableModule],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class HomePageComponent implements OnInit {
  pageData$ = this.activatedRoute.data.pipe(map(({ pageData }) => pageData));

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const pageData = await firstValueFrom(this.pageData$);
    this.title.setTitle(pageData.metaTitle);
  }

}
