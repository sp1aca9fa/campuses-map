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
- CSS3 (Flexbox, positioning, layout structuring)
- Leaflet.js (map rendering)
- OpenStreetMap

## How It Works

The page is divided into two main sections:

- A grid of cards displaying content (e.g., city results)
- A map positioned on the side that remains visible using `position: sticky`

The layout is implemented using:
- Flexbox for horizontal structure
- CSS Grid/Flex patterns for the card layout
- Sticky positioning to keep the map in view while scrolling

The map is dynamically rendered using Leaflet and centered on predefined coordinates.

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
serve
```

Then open:
http://localhost:3000

## Learnings

- Building layouts from scratch using Flexbox
- Using position: sticky for UI behavior
- Structuring CSS into components vs page-level styles
- Designing responsive layouts without frameworks
- Integrating a mapping library into a static page


## Notes

This project is a solution to a bootcamp coding challenge, focused on layout and CSS architecture, with a custom implementation of the mapping layer using open-source tools.
