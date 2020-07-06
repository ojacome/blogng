//importar modulos de router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';

//importar componentyes q necesitan pagina en concreto
import { HomeComponent} from './components/home/home.component'
import { BlogComponent} from './components/blog/blog.component'
import { FormularioComponent} from './components/formulario/formulario.component'
import { PaginaComponent} from './components/pagina/pagina.component'
import { PeliculasComponent} from './components/peliculas/peliculas.component'
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';

//Aarrays de rutas

const appRoutes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-pruebas', component: PaginaComponent},
    {path: 'pagina-pruebas/:nombre', component: PaginaComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: '**', component: ErrorComponent}
];


//exportar modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);