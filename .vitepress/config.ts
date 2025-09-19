import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const config = {
  title: "Henry's Recipes",
  description: "Collection of recipes Henry has personally tested and loved. Find your next favorite meal here.",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/limhenry/recipe' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/henrylim96.bsky.social' },
    ]
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag: string) => tag === 'lite-youtube',
      },
    },
  },
}

const sidebarOptions = {
  documentRootPath: '/',
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
};

export default defineConfig(withSidebar(config, sidebarOptions));
