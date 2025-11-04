import { Component, ElementRef, Inject, OnInit, AfterViewInit, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IconRegistryModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { ThemeToggleModule } from '@jeppesen-foreflight/dp-dls-global-angular/theme-toggle';
import { NavigationRailComponent, AtmosphereNavRailMenuItem } from '@jeppesen-foreflight/dp-dls-global-angular/navigation-rail';
import { NavigationDrawerComponent, AtmosphereNavDrawerMenuSection } from '@jeppesen-foreflight/dp-dls-global-angular/navigation-drawer';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { filter } from 'rxjs/operators';
import { CommonModule, isPlatformBrowser } from '@angular/common';

const homeRouteMatch = '/home';
const drawerPath = '/das';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, RouterLink, IconRegistryModule, ThemeToggleModule, NavigationRailComponent, NavigationDrawerComponent, MatSidenavModule, MatListModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
  // Change this naming to correspond to the DAS nav or the DocHub Nav
  showDrawer: boolean = false;
  @ViewChild('sidenavContent', { read: ElementRef, static: false }) sidenavContent!: ElementRef;
  drawerMenuItems: AtmosphereNavDrawerMenuSection[] = [
    {
      sectionMenuItems: [
        {
          label: 'Home',
          icon: 'apps',
          route: '/das/home'
        },
        {
          label: 'Design thinking',
          icon: 'account-tree',
          route: '/das/design-thinking'
        },
        {
          label: 'Design standards',
          icon: 'draw',
          route: '/das/design-standards'
        },
        {
          label: 'Research',
          icon: 'manage-search',
          route: '/das/research'
        },
        {
          label: 'Analytics',
          icon: 'bar-chart',
          route: '/das/analytics'
        },
        {
          label: 'Tools',
          icon: 'build',
          route: '/das/tools'
        },
        {
          label: 'Careers and training',
          icon: 'verified-user',
          route: '/das/careers-and-training'
        },
        {
          label: 'Contact',
          icon: 'chat',
          route: '/das/contact'
        }
      ]
    }
  ];

  railMenuItems: AtmosphereNavRailMenuItem[] = [
    {
      label: 'Get started',
      icon: 'apps',
      route: '/get-started'
    },
    {
      label: 'Develop',
      icon: 'code',
      route: '/develop'
    },
    {
      label: 'Foundations',
      icon: 'book',
      route: '/foundations',
      children: [
        {
          label: 'Strategy',
          route: '/foundations/strategy'
        },
        {
          label: 'Design principles',
          route: '/foundations/design-principles'
        },
        {
          label: 'Accessibility',
          route: '/foundations/accessibility'
        },
        {
          label: 'Content design',
          route: '/foundations/content-design'
        },
        {
          label: 'Design tokens',
          route: '/foundations/design-tokens'
        },
        {
          label: 'Layout',
          route: '/foundations/layout'
        }
      ]
    },
    {
      label: 'Styles',
      icon: 'palette',
      route: '/styles',
      children: [
        {
          label: "Color system",
          route: "/styles/color-system"
        },
        {
          label: "Typography",
          route: "/styles/typography"
        },
        {
          label: "Icons",
          route: "/styles/icons"
        },
        {
          label: "Shape",
          route: "/styles/shape"
        }
      ]
    },
    {
      label: 'Components',
      icon: 'add-circle',
      route: '/components',
      children: [
        {
          label: "Breadcrumbs",
          route: "/components/breadcrumb"
        },
        {
          label: "Button (Common)",
          route: "/components/button-common"
        },
        {
          label: "Button (Icon)",
          route: "/components/button-icon"
        },
        {
          label: "Card",
          route: "/components/card"
        },
        {
          label: "Checkbox",
          route: "/components/checkbox"
        },
        {
          label: "Chip",
          route: "/components/chips"
        },
        {
          label: "Data table",
          route: "/components/table"
        },
        {
          label: "Date picker",
          route: "/components/date-picker"
        },
        {
          label: "Dialog",
          route: "/components/dialog"
        },
        {
          label: "Divider",
          route: "/components/divider"
        },
        {
          label: "List",
          route: "/components/list"
        },
        {
          label: "Menu",
          route: "/components/menu"
        },
        {
          label: "Navigation drawer",
          route: "/components/navigation-drawer"
        },
        {
          label: "Navigation rail",
          route: "/components/navigation-rail"
        },
        {
          label: "Radio button",
          route: "/components/radio-button"
        },
        {
          label: "Select",
          route: "/components/select"
        },
        {
          label: "Side sheet",
          route: "/components/side-sheet"
        },
        {
          label: "Snackbar",
          route: "/components/snackbar"
        },
        {
          label: "Switch",
          route: "/components/switch"
        },
        {
          label: "Tabs",
          route: "/components/tabs"
        },
        {
          label: "Text field",
          route: "/components/text-field"
        },
        {
          label: "Tooltip",
          route: "/components/tooltip"
        },
        {
          label: "Top app bar",
          route: "/components/top-app-bar"
        }
      ]
    },
    {
      label: 'Patterns',
      icon: 'tune',
      route: '/patterns',
      children: [
        {
          label: "Content overflow",
          route: "/patterns/content-overflow"
        },
        {
          label: "Data table",
          route: "/patterns/tables"
        },
        {
          label: "Data visualization",
          route: "/patterns/data-visualization"
        },
        {
          label: "Disabled state",
          route: "/patterns/disabled-states"
        },
        {
          label: "Empty state",
          route: "/patterns/empty-states"
        },
        {
          label: "Error handling",
          route: "/patterns/error-handling"
        },
        {
          label: "Link",
          route: "/patterns/links"
        },
        {
          label: "Navigation",
          route: "/patterns/navigation"
        },
        {
          label: "User profile",
          route: "/patterns/user-profile"
        }
      ]
    },
    {
      label: 'Resources',
      icon: 'support',
      route: '/resources',
      children: [
        {
          label: "Changelog",
          route: "/resources/changelog"
        },
        {
          label: "Downloads and links",
          route: "/resources/downloads"
        }
      ]
    },
    {
      label: 'Contact',
      icon: 'chat',
      route: '/contact',
      children: [
        {
          label: "Contribute to Atmosphere",
          route: "/contact/contribute"
        },
        {
          label: "Request a component",
          route: "/contact/request-component"
        },
        {
          label: "Report a bug",
          route: "/contact/report-bug"
        },
        {
          label: "Meet the team",
          route: "/contact/meet-the-team"
        }
      ]
    }
  ];

  isSidenavOpen: boolean = false;
  selectedLevel1Item: AtmosphereNavRailMenuItem | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {

  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.updateMenuToggledState(event.urlAfterRedirects);
        this.showDrawer = event.urlAfterRedirects.includes(drawerPath);
        if (isPlatformBrowser(this.platformId)) {
          console.log(event.urlAfterRedirects)
          window.scrollTo(0, 0)
        }
        if (this.sidenavContent && this.sidenavContent.nativeElement) {
          this.sidenavContent.nativeElement.scrollTop = 0;
        }
      });
  }

  private updateMenuToggledState(currentUrl: string): void {
    this.railMenuItems.forEach(item => {
      item.toggled = item.route ? currentUrl.includes(item.route) : false;
      item.children?.forEach(item => {
        item.toggled = item.route ? currentUrl.includes(item.route) : false;
      })
    }
    );
    if (currentUrl.includes(homeRouteMatch)) {
      this.selectedLevel1Item = undefined;
      this.isSidenavOpen = false;
    }
  }

  onLevel1ItemClick(item: AtmosphereNavRailMenuItem) {
    if (item.children && item.children.length > 0) {
      this.selectedLevel1Item = item;
      this.isSidenavOpen = true;
    } else {
      this.selectedLevel1Item = undefined;
      this.isSidenavOpen = false;
    }
  };

}
