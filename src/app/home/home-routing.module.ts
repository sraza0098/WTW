import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceComponent } from './components/insurance/insurance.component';

const routes:Routes = [
    {
        path: 'insurance',
        component: InsuranceComponent
    },
    {
        path: '',
        redirectTo: 'insurance',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class HomeRoutingModule {}