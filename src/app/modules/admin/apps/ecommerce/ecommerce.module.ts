import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { InventoryComponent } from 'app/modules/admin/apps/ecommerce/inventory/inventory.component';
import { InventoryListComponent } from 'app/modules/admin/apps/ecommerce/inventory/list/inventory.component';
import { ecommerceRoutes } from 'app/modules/admin/apps/ecommerce/ecommerce.routing';
import { StudentdataComponent } from './student/studentdata/studentdata.component';
import { StudentformComponent } from './student/studentform.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RulesComponent } from './rules/rules.component';
import { MatTableModule } from '@angular/material/table';
import { ExchangeRatesChartComponent } from './exchange-rates-chart/exchange-rates-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { StrategiesComponent } from './strategies/strategies.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

// import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
// import { AddcartComponent } from './scrumboard/addcart/addcart.component';



@NgModule({
    declarations: [
        InventoryComponent,
        InventoryListComponent,
        StudentdataComponent,
        StudentformComponent,
        RulesComponent,
        ExchangeRatesChartComponent,
        StrategiesComponent,
        // ScrumboardComponent,
        // AddcartComponent
    ],
    imports     : [
        RouterModule.forChild(ecommerceRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSortModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatRadioModule, 
        SharedModule,
        FormsModule,
        MatTableModule,
        ReactiveFormsModule,
        MatExpansionModule,
        HighchartsChartModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
         MatMomentDateModule,
    ]
})
export class ECommerceModule
{
}
