export default {
  "title": "opencampus.sh projects",
  "tagline": "check out the projects",
  "url": "https://opencampus-sh.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/logo_OC.ico",
  "organizationName": "opencampus.sh",
  "projectName": "projects",
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "opencampus logo with text",
        "src": "img/logo_OC_w_text.png"
      },
      "items": [
        {
          "href": "https://edu.opencampus.sh",
          "label": "Courses",
          "position": "left"
        },
        {
          "href": "https://opencampus.gitbook.io/faq/leistungsnachweise/projekte",
          "label": "FAQ",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "image": "static/img/logo_OC.png",
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Opencampus",
          "items": [
            {
              "label": "opencampus.sh homepage",
              "href": "https://opencampus.sh"
            },
            {
              "label": "EDU Hub",
              "href": "https://edu.opencampus.sh"
            },
            {
              "label": "Machine Learning Degree",
              "href": "https://edu.opencampus.sh/courses/158"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Mattermost",
              "href": "https://chat.opencampus.sh"
            },
            {
              "label": "Slack",
              "href": "https://opencampus-sh.slack.com"
            },
            {
              "label": "KielAI",
              "href": "https://kiel.ai/"
            }
          ]
        },
        {
          "title": "Events",
          "items": [
            {
              "label": "Waterkant Festival",
              "href": "https://www.waterkant.sh/"
            },
            {
              "label": "Prototyping Week",
              "href": "https://starterkitchen.de/ptw/"
            },
            {
              "label": "Coding Waterkant",
              "href": "https://coding-waterkant-2021.devpost.com/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Opencampus.sh. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "plugins": [
    "@docusaurus/plugin-ideal-image"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/Palma/Documents/Opencampus/OC_Projects_general/projects/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/main/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/opencampus-sh/ML-Projects/blog/"
        },
        "theme": {
          "customCss": "/Users/Palma/Documents/Opencampus/OC_Projects_general/projects/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};