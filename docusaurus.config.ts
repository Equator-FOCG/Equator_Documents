import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Equator Documents',
  tagline: 'Looking forward to the arrival of a new era!',
  favicon: 'img/FOCG_Logo.png',

  url: 'https://equator-documents.vercel.app',
  baseUrl: '/',

  organizationName: 'Equator-FOCG',
  projectName: 'Equator-Documents',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Equator-FOCG/Equator-Documents/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Equator-FOCG/Equator-Documents/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: "KR1R8KFRXY",
      indexName: "equator-uments",
      apiKey: "61dd72c1c15e295325d08ff1f9017838",
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Equator Documents',
      logo: {
        alt: 'My Site Logo',
        src: 'img/FOCG_Logo.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/category/-tutorial-',
              activeBasePath: '/docs/category/-tutorial-',
            },
            {
              label:  'Development',
              to: '/docs/category/%EF%B8%8F-development-',
            },
            {
              label:  'Games',
              to: '/docs/category/%EF%B8%8F-fully-on-chain-games-',
            },
          ],
        },
        {to: '/blog', label: 'Blogs', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Equator-FOCG',
          className: 'header-github-link',
          position: 'right',
        },
        {
          href: 'https://twitter.com/EquatorFOCG',
          className: 'header-twitter-link',
          position: 'right',
        },
        {
          href: 'https://discord.gg/neF447HhcF',
          className: 'header-discord-link',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: "Equator Logo",
        src: "img/FOCG_Logo.png",
        width: 200,
      },
      copyright: `Made with ❤️ by <a target="_blank" rel="noopener noreferrer" href="https://github.com/Equator-FOCG">Equator-FOCG.</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
