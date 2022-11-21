import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementComponent } from './components/measurement/measurement.component';
import { ResultsComponent } from './components/results/results.component';
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

@NgModule({
  declarations: [
    MeasurementComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
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
    MatRadioModule
  ],
  exports:[
    MeasurementComponent,
    ResultsComponent
  ]
})
export class SharedModule { }
