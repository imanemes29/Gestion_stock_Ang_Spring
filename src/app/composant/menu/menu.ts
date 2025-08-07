import { Component, OnInit } from '@angular/core';
import { MenuOb } from './menu-objet'
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu implements OnInit {

  public menuProperties: Array<MenuOb> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fa-solid fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: 'fa-solid fa-chart-pie',
          url: ''
        },
        {
          id: '12',
          titre: 'Statistique',
          icon: 'fa-solid fa-chart-column',
          url: 'statistiques'
        }
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa-solid fa-boxes-stacked',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'fa-solid fa-boxes-stacked',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Mouvements de stock',
          icon: 'fa-brands fa-stack-overflow',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa-solid fa-user',
      url: 'clients',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fa-solid fa-user',
          url: 'clients'
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fa-solid fa-basket-shopping',
          url: 'commandesClient'
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-users',
      url: 'fournisseurs',
      sousMenu: [
        {
          id: '41',
          titre: 'fournisseur',
          icon: 'fa-solid fa-users',
          url: 'fournisseurs'
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'fa-solid fa-truck',
          url: 'commandesFournisseur'
        }
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fa-solid fa-gears',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: 'fa-solid fa-screwdriver-wrench',
          url: 'category'
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-user-gear',
          url: 'utilisateurs'
        }
      ]
    }



  ];
  ngOnInit(): void {

  }
  constructor(private router: Router
  ) { }

  navigate(url?: string): void {
    this.router.navigate([url]);
  }

}
