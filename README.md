# Professor Natassa Pippa - Personal Webpage

This repository contains the source code and assets for the personal webpage of **Professor Natassa Pippa**, an Associate Professor at the **National and Kapodistrian University of Athens (NKUA)**. The webpage showcases Professor Pippa's research, publications, awards, and academic contributions in **Pharmaceutical Technology** and **Nanotechnology**.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Languages](#languages)
- [Technologies Used](#technologies-used)

## Demo

You can view the live webpage [here](https://tkrinas.github.io/natlab.github.io/).

## Features

- English and Greek on one page, with an in-page language switch.
- Side navigation on desktop and a top bar with a menu button on smaller screens.
- Smooth scrolling between sections.
- Structured data for SEO using `schema.org`.
- Google Analytics (`gtag.js`).
- Links to LinkedIn, Facebook, Google Scholar, and Scopus.

## Languages

The page stays at one address. **EN / ΕΛ** sits under the section links on a wide screen and in the top bar on a phone, between the name and the menu button. The choice is remembered, and `?lang=el` opens the Greek text directly. The current section stays in view, and an open phone menu stays open.

Translated text covers the navigation, headings, about, research, teaching, awards, and the “Editor, year” lines. Paper titles, author lists, journal names, and book titles stay in English. Strings live in `js/i18n.js`. Headings and the side menu use capitals in both languages.

Both languages use the same type: **Sofia Sans Extra Condensed** for headings and **Sofia Sans** for body text. Those faces include Greek, so the type does not change when the language changes.

`node js/check-i18n.js` fails if a label in `index.html` is missing from either language.

## Technologies Used

- **HTML5**: Page structure, with `data-i18n` hooks for translatable text.
- **CSS3**: Layout, the language switch, and shared styling for both languages.
- **JavaScript**: Language switching in `js/i18n.js` and `js/scripts.js`.
- **Google Analytics**: Visit counting via `gtag.js`.
- **Schema.org**: Structured data in English for the public page.
- **Sofia Sans**: Headings and body text for English and Greek.