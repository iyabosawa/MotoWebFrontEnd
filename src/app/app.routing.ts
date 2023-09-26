import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { MotosTousComponent } from './motos-tous/motos-tous.component';
import { MotosValideesComponent } from './motos-validees/motos-validees.component';
import { TousAgentsComponent } from './tous-agents/tous-agents.component';
import { AjouterAgentComponent } from './ajouter-agent/ajouter-agent.component';
import { ImpressionComponent } from './impression/impression.component';
import { ModifierAgentComponent } from './modifier-agent/modifier-agent.component';





const APP_ROUTING: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'motos-enregistrees', component: UtilisateurComponent},
  {path: 'toutes-les-motos', component: MotosTousComponent},
  {path: 'motos-validees', component: MotosValideesComponent},
  {path: 'tous-agents', component: TousAgentsComponent},
  {path: 'ajouter-agent', component: AjouterAgentComponent},
  {path: 'impression', component: ImpressionComponent},
  {path: 'modifier-agent', component: ModifierAgentComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
