export interface NavLink {
  to: string;      // путь для react-router
  label: string;
}

export interface SocialLink {
  href: string;
  icon: string;    // класс иконки (fab fa-telegram)
  label: string;
}