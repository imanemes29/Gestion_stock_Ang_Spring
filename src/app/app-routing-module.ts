import { NouvelUtilisateur } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur';
import { NouveauCltFrs } from './composant/nouveau-clt-frs/nouveau-clt-frs';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLogin } from './pages/page-login/page-login';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { PageDashboard } from './pages/page-dashboard/page-dashboard';
import { PageStatistiques } from './pages/page-statistiques/page-statistiques';
import { PageArticle } from './pages/articles/page-article/page-article';
import { NouvelArticle } from './pages/articles/nouvel-article/nouvel-article';
import { PageMvtstk } from './pages/mvtstk/page-mvtstk/page-mvtstk';
import { PageClient } from './pages/client/page-client/page-client';
import { PageFournisseur } from './pages/fournisseur/page-fournisseur/page-fournisseur';
import { PageCmdCltFrs } from './pages/page-cmd-clt-frs/page-cmd-clt-frs';
import { NouvelleCmdCltFrs } from './composant/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs';
import { PageCategories } from './pages/categories/page-categories/page-categories';
import { NouvelleCategory } from './pages/categories/nouvelle-category/nouvelle-category';
import { PageUtilisateur } from './pages/page-utilisateur/page-utilisateur';
import { PageProfil } from './pages/profil/page-profil/page-profil';
import { ChangerMotDePasse } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe';

const routes: Routes = [
  {
    path:'login',
    component:PageLogin
  },
  {
    path:'inscrire',
    component:PageInscription
  }   ,
  {
    path:'',
    component:PageDashboard,
    children:[
      { 
        path:'statistiques',
        component:PageStatistiques

      },
      {
        path:'articles',
        component:PageArticle
      },
      {
        path:'nouvelarticle',
        component:NouvelArticle
      },
       {
        path:'mvtstk',
        component:PageMvtstk
      },
       {
        path:'clients',
        component:PageClient
      },
      {
        path:'nouveauClient',
        component:NouveauCltFrs
      },
       {
        path:'commandesClient',
        component:PageCmdCltFrs
      },
       {
        path:'nouvelCommandeClt',
        component:NouvelleCmdCltFrs
      },
      {
        path:'fournisseurs',
        component:PageFournisseur
      },
      {
        path:'nouveauFournisseur',
        component:NouveauCltFrs
      },{
        path:'commandesFournisseur',
        component:PageCmdCltFrs
      }, {
        path:'nouvelCommandeFrs',
        component:NouvelleCmdCltFrs
      },
       {
        path:'nouvelleCategory',
        component:NouvelleCategory
      },
       {
        path:'category',
        component:PageCategories
      },
      {
        path:'utilisateurs',
        component:PageUtilisateur
      },
      {
        path:'nouvelUtilisateur',
        component:NouvelUtilisateur
      },
       {
        path:'profil',
        component:PageProfil
      },
       {
        path:'changermotdepasse',
        component:ChangerMotDePasse
      }
      
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
