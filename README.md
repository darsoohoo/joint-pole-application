# Joint Pole Application

Power Apps code app built with React, TypeScript, Vite, and Fluent UI for browsing intent records with search, lifecycle stage filtering, pagination, and status-based highlighting.

## Tagline

Fast intent record browsing for Power Apps with searchable, filterable, paginated Fluent UI tables.

## Features

- Browse intent records in a structured Fluent UI table
- Search by intent number or description
- Filter by lifecycle stage
- Paginate large datasets for better performance
- Highlight lifecycle stages with visual status colors
- Load local JSON data for quick prototyping

## Tech Stack

- React 19
- TypeScript
- Vite
- Fluent UI React v9
- Power Apps Code Apps tooling

## Getting Started

### Prerequisites

- Node.js 22 or higher
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
  Components/
    Table.tsx
  data/
    intents.json
  App.tsx
  main.tsx
```

## Current Behavior

The app currently reads intent records from [src/data/intents.json](src/data/intents.json) and displays them in a paginated table. Users can:

- search by intent number or description
- filter by `Pre-Construction` or `Post-Construction`
- move through records page by page

## GitHub Description

React and Fluent UI Power Apps code app for browsing intent records with search, filters, pagination, and lifecycle stage highlighting.
# joint-pole-application
# joint-pole-application
# joint-pole-application
