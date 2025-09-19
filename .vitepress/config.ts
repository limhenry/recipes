import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const sidebarOptions = {
  documentRootPath: '/',
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  excludePattern: ['**/README.md', '**/template.md'],
};

export default defineConfig(withSidebar({
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
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { property: 'og:image', content: '/ogimage.jpg' }],
  ],
  srcExclude: ['**/README.md', '**/template.md'],
}, sidebarOptions));
