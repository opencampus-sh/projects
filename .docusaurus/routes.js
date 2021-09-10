
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/projects/build/',
    component: ComponentCreator('/projects/build/','f3b'),
    exact: true
  },
  {
    path: '/projects/build/blog',
    component: ComponentCreator('/projects/build/blog','551'),
    exact: true
  },
  {
    path: '/projects/build/blog/archive',
    component: ComponentCreator('/projects/build/blog/archive','14d'),
    exact: true
  },
  {
    path: '/projects/build/blog/first-blog-post',
    component: ComponentCreator('/projects/build/blog/first-blog-post','9b5'),
    exact: true
  },
  {
    path: '/projects/build/blog/long-blog-post',
    component: ComponentCreator('/projects/build/blog/long-blog-post','3bd'),
    exact: true
  },
  {
    path: '/projects/build/blog/mdx-blog-post',
    component: ComponentCreator('/projects/build/blog/mdx-blog-post','9c6'),
    exact: true
  },
  {
    path: '/projects/build/blog/tags',
    component: ComponentCreator('/projects/build/blog/tags','39b'),
    exact: true
  },
  {
    path: '/projects/build/blog/tags/docusaurus',
    component: ComponentCreator('/projects/build/blog/tags/docusaurus','a34'),
    exact: true
  },
  {
    path: '/projects/build/blog/tags/facebook',
    component: ComponentCreator('/projects/build/blog/tags/facebook','763'),
    exact: true
  },
  {
    path: '/projects/build/blog/tags/hello',
    component: ComponentCreator('/projects/build/blog/tags/hello','393'),
    exact: true
  },
  {
    path: '/projects/build/blog/tags/hola',
    component: ComponentCreator('/projects/build/blog/tags/hola','133'),
    exact: true
  },
  {
    path: '/projects/build/blog/welcome',
    component: ComponentCreator('/projects/build/blog/welcome','c03'),
    exact: true
  },
  {
    path: '/projects/build/docs/tags',
    component: ComponentCreator('/projects/build/docs/tags','73c'),
    exact: true
  },
  {
    path: '/projects/build/markdown-page',
    component: ComponentCreator('/projects/build/markdown-page','785'),
    exact: true
  },
  {
    path: '/projects/build/docs',
    component: ComponentCreator('/projects/build/docs','36b'),
    routes: [
      {
        path: '/projects/build/docs/intro',
        component: ComponentCreator('/projects/build/docs/intro','b4a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/build/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/projects/build/docs/tutorial-basics/congratulations','22e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/build/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/projects/build/docs/tutorial-basics/create-a-blog-post','e05'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/build/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/projects/build/docs/tutorial-basics/create-a-document','40c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/build/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/projects/build/docs/tutorial-basics/create-a-page','012'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/build/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/projects/build/docs/tutorial-basics/deploy-your-site','ea3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/build/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/projects/build/docs/tutorial-basics/markdown-features','dcd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/build/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/projects/build/docs/tutorial-extras/manage-docs-versions','52d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/build/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/projects/build/docs/tutorial-extras/translate-your-site','48b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
