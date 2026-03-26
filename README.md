# Campuses Map

A responsive results page layout featuring a sticky map and a grid of content cards, built using modern CSS techniques.

## Features

- Responsive card grid layout
- Sticky map that remains visible while scrolling
- Layout built using Flexbox and CSS positioning
- Clean separation between components and page-level styles
- Interactive map rendered using Leaflet

## Tech Stack

- HTML5
- CSS3 (Flexbox, CSS Grid, positioning)
- JavaScript (vanilla ES6)
- Leaflet.js (map rendering)
- OpenStreetMap

## How It Works

The page is divided into two main sections:

- A grid of city cards (20 campuses worldwide)
- A map panel that is hidden by default and revealed when a card is clicked

Clicking a card:
- Shows the map (if hidden) and centers it on the selected city with a marker
- Clicking the same card again when centered closes the map
- Clicking a different card moves the map to that city

The layout is implemented using:
- Flexbox for the horizontal structure (cards + map side by side)
- CSS Grid for the card layout (`grid-template-columns: 1fr 1fr 1fr 1fr`)
- Sticky positioning (`position: sticky`) so the map stays in view while scrolling through cards

The map is rendered using Leaflet and centered on predefined coordinates for each city.

## Implementation Note

While the original challenge suggested using Mapbox, this implementation uses Leaflet with OpenStreetMap data.

This approach was chosen to:
- Work with fully open and free mapping tools
- Avoid reliance on API keys or external billing setup
- Explore how mapping libraries can be integrated independently of proprietary services

The result preserves the intended functionality while using an alternative, open-source mapping stack.

## Setup

```bash
git clone https://github.com/sp1aca9fa/campuses-map.git
cd campuses-map
npx serve
```

Open in your browser: http://localhost:3000

## Learnings

- Building layouts from scratch using Flexbox
- Using position: sticky for UI behavior
- Structuring CSS into components vs page-level styles
- Structuring multi-column layouts without a CSS framework
- Integrating a mapping library into a static page


## Notes

This project is a solution to a bootcamp coding challenge, focused on layout and CSS architecture, with a custom implementation of the mapping layer using open-source tools.
