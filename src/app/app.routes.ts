import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: NotfoundComponent, title: 'Not Found' },
];
