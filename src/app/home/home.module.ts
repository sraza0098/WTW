import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatRadioModule} from '@angular/material/radio';
import { MomentPipePipe } from './pipe/moment-pipe.pipe';

@NgModule({
  declarations: [
    InsuranceComponent,
    SliderComponent,
    TableComponent,
    MomentPipePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatToolbarModule,
    MatRadioModule,
  ]
})
export class HomeModule { }
