import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RouteGuardServiceService } from 'src/services/route-guard-service.service';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'index', component: LoginComponent  },

  /* Da qui inziano le rotte che vanno protette con l'autenticazione */
  { path: 'welcome/:userID', component: WelcomeComponent, canActivate: [RouteGuardServiceService] },
  { path: 'articoli', component: ArticoliComponent, canActivate: [RouteGuardServiceService] },

  /* questo lo posso fare. Ovvero posso decidre io il "nome" del path. Posso decidere che
  questo componente (Grid..) sia dopo articoli nel path, ed il nome che vedrò sull'url però
  dovrà essere qusto che indico. */
  { path: 'articoli/grid', component: GridArticoliComponent, canActivate: [RouteGuardServiceService] },
  { path: 'logout', component: LogoutComponent},
  { path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
