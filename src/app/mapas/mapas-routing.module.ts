import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreemComponent } from './pages/full-screem/full-screem.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'fullscreem',
        component:FullScreemComponent
      },
      {
        path:'zoom-range',
        component:ZoomRangeComponent
      },
      {
        path:'marcadores',
        component:MarcadoresComponent
      },
      {
        path:'propiedades',
        component:PropiedadesComponent
      },
      {
        path:'**',
        redirectTo:'fullscreem'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
