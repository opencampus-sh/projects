
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/projects/',
    component: ComponentCreator('/projects/','a90'),
    exact: true
  },
  {
    path: '/projects/blog',
    component: ComponentCreator('/projects/blog','7e1'),
    exact: true
  },
  {
    path: '/projects/blog/archive',
    component: ComponentCreator('/projects/blog/archive','70a'),
    exact: true
  },
  {
    path: '/projects/blog/first-blog-post',
    component: ComponentCreator('/projects/blog/first-blog-post','202'),
    exact: true
  },
  {
    path: '/projects/blog/long-blog-post',
    component: ComponentCreator('/projects/blog/long-blog-post','777'),
    exact: true
  },
  {
    path: '/projects/blog/mdx-blog-post',
    component: ComponentCreator('/projects/blog/mdx-blog-post','7b3'),
    exact: true
  },
  {
    path: '/projects/blog/tags',
    component: ComponentCreator('/projects/blog/tags','758'),
    exact: true
  },
  {
    path: '/projects/blog/tags/docusaurus',
    component: ComponentCreator('/projects/blog/tags/docusaurus','369'),
    exact: true
  },
  {
    path: '/projects/blog/tags/facebook',
    component: ComponentCreator('/projects/blog/tags/facebook','82f'),
    exact: true
  },
  {
    path: '/projects/blog/tags/hello',
    component: ComponentCreator('/projects/blog/tags/hello','cc3'),
    exact: true
  },
  {
    path: '/projects/blog/tags/hola',
    component: ComponentCreator('/projects/blog/tags/hola','857'),
    exact: true
  },
  {
    path: '/projects/blog/welcome',
    component: ComponentCreator('/projects/blog/welcome','f1d'),
    exact: true
  },
  {
    path: '/projects/docs/tags',
    component: ComponentCreator('/projects/docs/tags','6ac'),
    exact: true
  },
  {
    path: '/projects/markdown-page',
    component: ComponentCreator('/projects/markdown-page','f65'),
    exact: true
  },
  {
    path: '/projects/docs',
    component: ComponentCreator('/projects/docs','6f0'),
    routes: [
      {
        path: '/projects/docs/intro',
        component: ComponentCreator('/projects/docs/intro','690'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/projects/docs/tutorial-basics/congratulations','28d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/projects/docs/tutorial-basics/create-a-blog-post','ac5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/projects/docs/tutorial-basics/create-a-document','411'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/projects/docs/tutorial-basics/create-a-page','c52'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/projects/docs/tutorial-basics/deploy-your-site','24a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/projects/docs/tutorial-basics/markdown-features','ff9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/projects/docs/tutorial-extras/manage-docs-versions','5b6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/projects/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/projects/docs/tutorial-extras/translate-your-site','6d4'),
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
