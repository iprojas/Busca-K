import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: '',
        component: RootComponent,
        data: {
            /**
             * Desktop header layout, one of:
             * - spaceship/{one, two, three}
             * - classic/{one, two, three, four, five}
             */
            desktopHeader: 'spaceship/one',
            /**
             * Mobile header layout, one of:
             * - one
             * - two
             */
            mobileHeader: 'two',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => import('./modules/home-two/home-two.module').then(m => m.HomeTwoModule),
            },
            {
                path: 'shop',
                loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule),
            },
            {
                path: 'blog',
                loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule),
            },
            {
                path: 'account',
                loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule),
            },
            {
                path: 'site',
                loadChildren: () => import('./modules/site/site.module').then(m => m.SiteModule),
            },
            {
                path: '**',
                component: PageNotFoundComponent,
            },
        ],
    },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'disabled',
            anchorScrolling: 'disabled',
            initialNavigation: 'enabled',
            preloadingStrategy: PreloadAllModules,
            relativeLinkResolution: 'legacy'
        }),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
