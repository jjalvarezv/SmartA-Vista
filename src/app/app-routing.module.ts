import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importo componentes
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
	{path : '' , component : HomeComponent},
	{path : 'home' , component : HomeComponent},
	{path : 'about-us' , component : AboutUsComponent},
	{path : 'contacto' , component : ContactoComponent},
	{path : 'registro' , component : RegistroComponent},
	{path : '404' , component : HomeComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
