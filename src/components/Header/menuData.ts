import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Nos Services",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Services avec filtres",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Tous les services",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Commander",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Panier",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Favoris",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Connexion",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Inscription",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        title: "Mon Compte",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 70,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        title: "Erreur",
        newTab: false,
        path: "/error",
      },
      {
        id: 63,
        title: "Confirmation",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 7,
    title: "Blog",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 71,
        title: "Blog avec sidebar",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        title: "Blog grille",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 73,
        title: "Article avec sidebar",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 74,
        title: "Article détaillé",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
];
