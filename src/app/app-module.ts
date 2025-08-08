import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PageLogin } from './pages/page-login/page-login';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { PageDashboard } from './pages/page-dashboard/page-dashboard';
import { PageStatistiques } from './pages/page-statistiques/page-statistiques';
import { Menu } from './composant/menu/menu';
import { Header } from './composant/header/header';
import { PageArticle } from './pages/articles/page-article/page-article';
import { DetailArticle } from './composant/detail-article/detail-article';
import { Pagination } from './composant/pagination/pagination';
import { BouttonAction } from './composant/boutton-action/boutton-action';
import { NouvelArticle } from './pages/articles/nouvel-article/nouvel-article';
import { PageMvtstk } from './pages/mvtstk/page-mvtstk/page-mvtstk';
import { DetailMvtStkArticle } from './composant/detail-mvt-stk-article/detail-mvt-stk-article';
import { DetailMvtStk } from './composant/detail-mvt-stk/detail-mvt-stk';
import { DetailCltFrs } from './composant/detail-clt-frs/detail-clt-frs';
import { PageClient } from './pages/client/page-client/page-client';
import { PageFournisseur } from './pages/fournisseur/page-fournisseur/page-fournisseur';
import { NouveauCltFrs } from './composant/nouveau-clt-frs/nouveau-clt-frs';
import { DetailCmdCltFrs } from './composant/detail-cmd-clt-frs/detail-cmd-clt-frs';
import { DetailCmd } from './composant/detail-cmd/detail-cmd';
import { PageCmdCltFrs } from './pages/page-cmd-clt-frs/page-cmd-clt-frs';
import { NouvelleCmdCltFrs } from './composant/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs';
import { PageCategories } from './pages/categories/page-categories/page-categories';
import { NouvelleCategory } from './pages/categories/nouvelle-category/nouvelle-category';
import { PageUtilisateur } from './pages/page-utilisateur/page-utilisateur';
import { DetailUtilisateur } from './composant/detail-utilisateur/detail-utilisateur';
import { NouvelUtilisateur } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur';
import { PageProfil } from './pages/profil/page-profil/page-profil';
import { ChangerMotDePasse } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe';

@NgModule({
  declarations: [
    App,
    PageLogin,
    PageInscription,
    PageDashboard,
    PageStatistiques,
    Menu,
    Header,
    PageArticle,
    DetailArticle,
    Pagination,
    BouttonAction,
    NouvelArticle,
    PageMvtstk,
    DetailMvtStkArticle,
    DetailMvtStk,
    DetailCltFrs,
    PageClient,
    PageFournisseur,
    NouveauCltFrs,
    DetailCmdCltFrs,
    DetailCmd,
    PageCmdCltFrs,
    NouvelleCmdCltFrs,
    PageCategories,
    NouvelleCategory,
    PageUtilisateur,
    DetailUtilisateur,
    NouvelUtilisateur,
    PageProfil,
    ChangerMotDePasse,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
