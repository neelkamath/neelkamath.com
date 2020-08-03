# Contributing

## Installation

1. Install the latest [node.js LTS](https://nodejs.org/en/download/).
1. Clone the repository using one of the following methods.
    - SSH: `git clone git@github.com:neelkamath/neelkamath.com.git`
    - HTTPS: `git clone https://github.com/neelkamath/neelkamath.com.git`
1. `cd neelkamath.com`
1. `npm i`

## Developing

### Development

```
npm run dev
```

Starts the development server on http://localhost:1234 with hot module replacement enabled.

### Production

```
npm run build
```

Saves the production build to the `dist` directory.

### Styles

- Accent color: `#00e9ff`
- Background color: `#02121B`

### Releases

Commits to the `master` branch automatically deploy the site via Netlify. If you want to mark a particular point in history of the site, create a GitHub release.