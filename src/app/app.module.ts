import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
import { ROUTING } from './app.routing';
import { MotosTousComponent } from './motos-tous/motos-tous.component';
import { MotosValideesComponent } from './motos-validees/motos-validees.component';
import { TousAgentsComponent } from './tous-agents/tous-agents.component';
import { AjouterAgentComponent } from './ajouter-agent/ajouter-agent.component';
import { ImpressionComponent } from './impression/impression.component';
import { ModifierAgentComponent } from './modifier-agent/modifier-agent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    UtilisateurComponent,
    LoginComponent,
    MotosTousComponent,
    MotosValideesComponent,
    TousAgentsComponent,
    AjouterAgentComponent,
    ImpressionComponent,
    ModifierAgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
