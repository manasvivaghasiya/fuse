import { Route } from '@angular/router';
import { InventoryComponent } from 'app/modules/admin/apps/ecommerce/inventory/inventory.component';
import { InventoryListComponent } from 'app/modules/admin/apps/ecommerce/inventory/list/inventory.component';
import { InventoryBrandsResolver, InventoryCategoriesResolver, InventoryProductsResolver, InventoryTagsResolver, InventoryVendorsResolver } from 'app/modules/admin/apps/ecommerce/inventory/inventory.resolvers';
import { StudentdataComponent } from './student/studentdata/studentdata.component';
import { StudentformComponent } from './student/studentform.component';
import { RulesComponent } from './rules/rules.component';
import { ExchangeRatesChartComponent } from './exchange-rates-chart/exchange-rates-chart.component';
import { StrategiesComponent } from './strategies/strategies.component';
// import { ScrumboardComponent } from './scrumboard/scrumboard.component';

export const ecommerceRoutes: Route[] = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'inventory'
    },
    {
        path     : 'inventory',
        component: InventoryComponent,
        children : [
            {
                path     : '',
                component: InventoryListComponent,
                resolve  : {
                    brands    : InventoryBrandsResolver,
                    categories: InventoryCategoriesResolver,
                    products  : InventoryProductsResolver,
                    tags      : InventoryTagsResolver,
                    vendors   : InventoryVendorsResolver
                }
            }
        ]
        /*children : [
            {
                path     : '',
                component: ContactsListComponent,
                resolve  : {
                    tasks    : ContactsResolver,
                    countries: ContactsCountriesResolver
                },
                children : [
                    {
                        path         : ':id',
                        component    : ContactsDetailsComponent,
                        resolve      : {
                            task     : ContactsContactResolver,
                            countries: ContactsCountriesResolver
                        },
                        canDeactivate: [CanDeactivateContactsDetails]
                    }
                ]
            }
        ]*/
    },
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'student'
    },
    {
        path     : 'student',
        component: StudentdataComponent,
        children : [
            {
                path     : '',
                component: StudentformComponent,
                // resolve  : {
                //     brands    : InventoryBrandsResolver,
                //     categories: InventoryCategoriesResolver,
                //     products  : InventoryProductsResolver,
                //     tags      : InventoryTagsResolver,
                //     vendors   : InventoryVendorsResolver
                // }
            },
            
        ]
    },
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'rules'
    },
    {
        path     : 'rules',
        component: RulesComponent,
        children : [
            {
                path     : '',
                component: RulesComponent,
                // resolve  : {
                //     brands    : InventoryBrandsResolver,
                //     categories: InventoryCategoriesResolver,
                //     products  : InventoryProductsResolver,
                //     tags      : InventoryTagsResolver,
                //     vendors   : InventoryVendorsResolver
                // }
            },
            
        ]
    },
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'exchange-rates-chart'
    },
    {
        path     : 'exchange-rates-chart',
        component: ExchangeRatesChartComponent,
        children : [
            {
                path     : '',
                component: ExchangeRatesChartComponent,
                // resolve  : {
                //     brands    : InventoryBrandsResolver,
                //     categories: InventoryCategoriesResolver,
                //     products  : InventoryProductsResolver,
                //     tags      : InventoryTagsResolver,
                //     vendors   : InventoryVendorsResolver
                // }
            },
            
        ]
    },
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'strategies'
    },
    {
        path     : 'strategies',
        component: StrategiesComponent,
        children : [
            {
                path     : '',
                component: StrategiesComponent,
                // resolve  : {
                //     brands    : InventoryBrandsResolver,
                //     categories: InventoryCategoriesResolver,
                //     products  : InventoryProductsResolver,
                //     tags      : InventoryTagsResolver,
                //     vendors   : InventoryVendorsResolver
                // }
            },
            
        ]
    },
  
    // {
    //     path      : '',
    //     pathMatch : 'full',
    //     redirectTo: 'scrumboard'
    // },
    // {
    //     path     : 'scrumboard',
    //     component: ScrumboardComponent,
    //     children : [
    //         {
    //             path     : '',
    //             component: StudentformComponent,
    //             // resolve  : {
    //             //     brands    : InventoryBrandsResolver,
    //             //     categories: InventoryCategoriesResolver,
    //             //     products  : InventoryProductsResolver,
    //             //     tags      : InventoryTagsResolver,
    //             //     vendors   : InventoryVendorsResolver
    //             // }
    //         },
            
    //     ]
    // }

];
