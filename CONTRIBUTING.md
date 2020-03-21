# Contributing

## Forking the Repository

If you're forking the repository to develop the project as your own instead of to just send back a PR, deploy the site to [Netlify](http://netlify.com/). The configuration will automatically be picked up from the [`netlify.toml`](netlify.toml) file.

## Installation

1. Install [node.js v12](https://nodejs.org/en/download/).
1. Clone the repository using one of the following methods.
    - SSH: `git clone git@github.com:neelkamath/neelkamath.github.io.git`
    - HTTPS: `git clone https://github.com/neelkamath/neelkamath.github.io.git`
1. `cd neelkamath.github.io`
1. `npm i`

## Developing

- Use the [`ExternalLink`](src/ExternalLink.tsx) component instead `<a target="_blank"></a>`.
- The skills section should list the [technologies I know](https://gist.github.com/neelkamath/2333e0502c0d16f7db3abde1b1830ef4). Each skill should link to the tech's homepage (e.g., official page, Wikipedia page, homepage of a tool which implements the concept).

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