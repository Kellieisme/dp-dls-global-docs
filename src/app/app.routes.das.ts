import { ExtraOptions, Routes } from '@angular/router';
import { routeDataResolver } from './resolvers';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GetStartedPageComponent } from './pages/get-started-page/get-started-page.component';
import { DevelopPageComponent } from './pages/develop-page/develop-page.component';
import { FoundationsPageComponent } from './pages/foundations-page/foundations-page.component';
import { FoundationsDetailPageComponent } from './pages/foundations-detail-page/foundations-detail-page.component';
import { StylesPageComponent } from './pages/styles-page/styles-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { ComponentDetailPageComponent } from './pages/component-detail-page/component-detail-page.component';
import { PatternsPageComponent } from './pages/patterns-page/patterns-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { ResourcesDetailPageComponent } from './pages/resources-detail-page/resources-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DasHomePageComponent } from './pages/das-home-page/das-home-page.component';
import { DasSectionPageComponent } from './pages/das-section-page/das-section-page.component';
import { StylesDetailPageComponent } from './pages/styles-detail-page/styles-detail-page.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload' //Must have if you want to be able to use the anchor more than once
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'das/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'get-started',
    component: GetStartedPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'develop',
    component: DevelopPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'foundations',
    component: FoundationsPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'foundations/:id',
    component: FoundationsDetailPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'styles',
    component: StylesPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'styles/:id',
    component: StylesDetailPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'components',
    component: ComponentsPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'components/:id',
    component: ComponentDetailPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'patterns',
    component: PatternsPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'patterns/:id',
    component: ComponentDetailPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'request-component',
    component: ContactDetailPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'resources',
    component: ResourcesPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'resources/:id',
    component: ResourcesDetailPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'contact/:id',
    component: ContactDetailPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'das/design-thinking',
    component: DasSectionPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'das/design-standards',
    component: DasSectionPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'das/research',
    component: DasSectionPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'das/analytics',
    component: DasSectionPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'das/tools',
    component: DasSectionPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'das/careers-and-training',
    component: DasSectionPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'das/contact',
    component: DasSectionPageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: 'das/home',
    component: DasHomePageComponent,
    resolve: { pageData: routeDataResolver },
  },
  {
    path: "das",
    redirectTo: 'das/home'
  },
  {
    path: "**",
    redirectTo: 'das/home'
  }
];

export { routerOptions };