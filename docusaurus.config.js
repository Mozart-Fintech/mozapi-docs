// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const { ProvidePlugin } = require("webpack");
const lightCodeTheme = require("prism-react-renderer/dist/index").themes.github;
const darkCodeTheme = require("prism-react-renderer/dist/index").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mozart Docs",
  tagline: "Documentación técnica de Mozart",
  url: "https://docs.mozarth.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mozart", // Usually your GitHub org/user name.
  projectName: "mozart", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // docLayoutComponent: "@theme/DocPage",
          // docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
    // Add custom webpack config to make @stoplight/elements work
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve("process/browser"),
            }),
          ],
          resolve: {
            fallback: {
              buffer: require.resolve("buffer"),
              stream: false,
              path: false,
              process: false,
            },
          },
        };
      },
    }),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Mozart Docs",
        logo: {
          alt: "Mozart Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentación",
          },
          { to: "/api", label: "API", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Pagina principal",
            href: "https://mozartfintech.com/",
          },
          {
            label: "Hub",
            href: "https://app.mozarth.com/",
          },
          {
            label: "Documentación",
            href: "https://docs.mozarth.com/",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mozart Fintech.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  themes: ["docusaurus-theme-openapi-docs"],

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    localeConfigs: {
      es: {
        htmlLang: 'es-ES',
      },
    },
  },
};

module.exports = config;
