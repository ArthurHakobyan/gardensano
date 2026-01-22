/// <reference types="astro/client" />
/// <reference types="@types/alpinejs__collapse" />
import type { Alpine } from 'alpinejs';

declare global {
  interface Window {
    Alpine: Alpine;
  }
}

declare module '@alpinejs/collapse' {
  export default function plugin(Alpine: any): void;
}

type ThemeStore = {
  isDark: boolean;
  toggle(): void;
  init(): void;
};

declare module 'alpinejs' {
  interface Alpine {
    store<K extends 'theme'>(
      name: K,
      value?: K extends 'theme' ? ThemeStore : any
    ): K extends 'theme' ? ThemeStore : any;
  }
}
