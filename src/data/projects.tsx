/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {difference, sortBy} from '../utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a marketingion-ready site with real content and decent customizations (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain name (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - Use relevant tags to qualify your site (read the tag descriptions bellow)
 * - The image MUST be added to the GitHub repository, and use `require("image")`
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your users.js edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remains correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 *
 */

export type Tag = {
  label: string;
  description: string;
  icon: JSX.Element;
};

export type TagType =
  | 'favorite'
  | 'marketing'
  | 'social'
  | 'PM';

export type User = {
  title: string;
  description: string;
  course: string;
  semester: string;
  participants: string;
  preview: any;
  website: string;
  source: string;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose widely, we'll remove unappropriate tags
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'OC-Favorite',
    description:
      'Our favorite Docusaurus sites that you must absolutely check-out!',
    icon: <></>,
  },

  marketing: {
    label: 'Marketing',
    description: 'Docusaurus sites associated to a commercial marketing!',
    icon: <></>,
  },

  social: {
    label: 'Social Media',
    description:
      'Beautiful Docusaurus sites, polished and standing out from the initial template!',
    icon: <></>,
  },

  PM: {
    label: 'Projectmanagement',
    description:
      'Projects about PM.',
    icon: <></>,
  },
};

const PROJECT_FOLDER = 'https://github.com/opencampus-sh/projects/blob/main/src/data/pdfs/';
// Add your site to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'Kommunikationskonzept - Informationskampagne hinsichtlich des Earth Overshoot Days',
    preview: require('./img/25tagen.png'),
    course: 'Social Media Sessions',
    semester: 'SoSe 21',
    participants: 'Eva Henschke',
    description: (
      <>
      Instagram bietet eine reichweitenstarke Plattform, um Menschen mit Informationen zu versorgen.
      Diese Stärke soll genutzt werden, um auf die Problematik des Earth Overshoot Days aufmerksam zu machen,
      Wissen über verschiedene Contentformate zu vermitteln und somit für mehr Aufklärung zu sorgen.
      </>
    ),
    source: null,
    website: PROJECT_FOLDER + 'Kommunikationskonzept_EarthOvershootDay.pdf',
    tags: ['favorite', 'social'],
  },
  {
    title: 'Planung einer Marketing-Kampagne für ein Kunstevent in der Burg Liebper',
    preview: require('./img/planung.png'),
    course: 'Marketing Sessions',
    semester: 'WiSe 20/21',
    participants: 'Kim Müller',
    description: (
      <>
      Es wird das Marketing-Konzept zu dem Kunstevent “Emotionen - Kunst trifft auf Lyrik” vorgestellt und näher erläutert.
      Ziel der kostenlosen Ausstellung soll es sein, sowohl kunstbegeisterte Menschen zu erreichen als auch Kunstobjekte zu verkaufen.
      </>
    ),
    source: null,
    website: PROJECT_FOLDER + 'Marketing_Kunstevent.pdf',
    tags: ['favorite', 'marketing'],
  },
  {
    title: 'Planung eines „Runden Tischs” für ein Mehrwegsystem in der Kieler Gastronomie',
    preview: require('./img/gastro.png'),
    course: 'Projektmanagement Sessions',
    semester: 'SoSe 21',
    participants: 'Sarah Diefenbach',
    description: (
      <>
      Der Projektbericht dokumentiert den Planungsprozess für die Organisation eines Runden Tischs für ein Mehrwegsystem im Kieler Gastronomiesektor.
      Das Ziel des Events ist es, den Austausch zur Einführung eines oder einiger weniger Mehrwegsysteme in den teilnehmenden Kieler Restaurants anzuregen.
      Dazu werden Vertreter des Umweltamts, des Gesundheitsamts, der Restaurants, der Presse und verschiedene Mehrwegsystem-Anbieter eingeladen.
      </>
    ),
    source: null,
    website: PROJECT_FOLDER + 'Mehrwegsystem_Kieler_Gastronomie.pdf',
    tags: ['favorite', 'PM'],
  },
  {
    title: 'Praxis ohne Plastik',
    preview: require('./img/p_o_p.png'),
    course: 'Social Media Sessions',
    semester: 'SoSe 21',
    participants: 'Nora Stroetzel',
    description: (
      <>
       Praxis ohne Plastik wurde gegründet, um nachhaltigen Produkten in der Medizinbranche eine Plattform zu bieten
       und Müll im Gesundheitswesen zu verringern. Als junges Projekt, das seit Januar besteht, ist es noch sehr unbekannt.
       Eine Social Media Strategie wurde erarbeitet, um es auf dem Markt bekannt zu machen.
      </>
    ),
    source: null,
    website: PROJECT_FOLDER + 'Praxis_ohne_Plastik.pdf',
    tags: ['favorite', 'social'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const SortedUsers = sortUsers();

// Fail-fast on common errors
function ensureUserValid(user: User) {
  function checkFields() {
    const keys = Object.keys(user);
    const validKeys = [
      'title',
      'description',
      'course',
      'semester',
      'participants',
      'preview',
      'website',
      'source',
      'tags',
    ];
    const unknownKeys = difference(keys, validKeys);
    if (unknownKeys.length > 0) {
      throw new Error(
        `Site contains unknown attribute names=[${unknownKeys.join(',')}]`,
      );
    }
  }

  function checkTitle() {
    if (!user.title) {
      throw new Error('Site title is missing');
    }
  }

  function checkDescription() {
    if (!user.description) {
      throw new Error('Site description is missing');
    }
  }

  function checkWebsite() {
    if (!user.website) {
      throw new Error('Site website is missing');
    }
    const isHttpUrl =
      user.website.startsWith('http://') || user.website.startsWith('https://');
    if (!isHttpUrl) {
      throw new Error(
        `Site website does not look like a valid url: ${user.website}`,
      );
    }
  }

  function checkPreview() {
    if (
      !user.preview ||
      (user.preview instanceof String &&
        (user.preview.startsWith('http') || user.preview.startsWith('//')))
    ) {
      throw new Error(
        `Site has bad image preview=[${user.preview}].\nThe image should be hosted on Docusaurus site, and not use remote HTTP or HTTPS URLs`,
      );
    }
  }

  function checkTags() {
    if (
      !user.tags ||
      !(user.tags instanceof Array) ||
      (user.tags as string[]).includes('')
    ) {
      throw new Error(`Bad showcase tags=[${JSON.stringify(user.tags)}]`);
    }
    const unknownTags = difference(user.tags, TagList);
    if (unknownTags.length > 0) {
      throw new Error(
        `Unknown tags=[${unknownTags.join(
          ',',
        )}\nThe available tags are ${TagList.join(',')}`,
      );
    }
  }

  function checkML() {
    if (typeof user.source === 'undefined') {
      throw new Error(
        "The source attribute is required.\nIf your Docusaurus site is not open-source, please make it explicit with 'source: null'",
      );
    // } else {
    //   const hasOpenSourceTag = user.tags.includes('opensource');
    //   if (user.source === null && hasOpenSourceTag) {
    //     throw new Error(
    //       "You can't add the opensource tag to a site that does not have a link to source code.",
    //     );
    //   } else if (user.source && !hasOpenSourceTag) {
    //     throw new Error(
    //       "For open-source sites, please add the opensource tag",
    //     );
    //   }
    }
  }

  try {
    checkFields();
    checkTitle();
    checkDescription();
    checkWebsite();
    checkPreview();
    checkTags();
    checkML();
  } catch (e) {
    throw new Error(
      `Showcase site with title=${user.title} contains errors:\n${e.message}`,
    );
  }
}

Users.forEach(ensureUserValid);
