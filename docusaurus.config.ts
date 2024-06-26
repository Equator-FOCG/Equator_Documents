import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Equator Documents",
  tagline: "Looking forward to the arrival of a new era!",
  favicon: "img/FOCG_Logo.png",

  url: "https://docs.equatoraw.xyz",
  baseUrl: "/",

  organizationName: "Equator-FOCG",
  projectName: "Equator-Documents",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/theRunCom/Equator_Documents/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/theRunCom/Equator_Documents/tree/main/blog",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: "30Y37ED4G",
      indexName: "equatoraw",
      apiKey: "0d5975e4cd26c4862389320e1fedf5bb",
      contextualSearch: true,
      searchParameters: {},
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Equator Documents",
      logo: {
        alt: "My Site Logo",
        src: "img/FOCG_Logo.png",
      },
      items: [
        {
          to: "/docs/overview/home/introduction",
          label: "Overview",
          className: "nav-overview",
          position: "left",
          activeBasePath: "/docs/overview",
        },
        {
          to: "/blog",
          label: "Blogs",
          position: "left",
          className: "nav-blogs",
          activeBasePath: "/blog",
        },
        {
          to: "/docs/utils/home/introduction",
          label: "Utils",
          position: "left",
          className: "nav-utils",
          activeBasePath: "/docs/utils",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/Equator-FOCG",
          className: "header-github-link",
          position: "right",
        },
        {
          href: "https://twitter.com/EquatorFOCG",
          className: "header-twitter-link",
          position: "right",
        },
        {
          href: "https://discord.gg/CbZtq5S4sU",
          className: "header-discord-link",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
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
