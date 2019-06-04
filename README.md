# neelkamath.com

This is my [personal website](https://neelkamath.com).

## Installation

Clone the repository using one of the following methods.
- SSH: `git clone git@github.com:neelkamath/neelkamath.github.io.git`
- HTTPS: `git clone https://github.com/neelkamath/neelkamath.github.io.git`

## Usage

Open `neelkamath.github.io/index.html` in your browser.

## Testing

### Setup

1. Install [Server Dart 2](https://www.dartlang.org/tools/sdk#install).
1. `pub get`

### Test

`pub run test`

## Documentation

- Use `snake_case` to name files and directories.
- Limit lines to 120 characters except where impractical.

### Web Components

Browsers seem to implement the shadow DOM differently. In Safari, stylesheets located on other websites work fine when loaded only in the shadow DOM. However, in Chrome, the stylesheet must be in the HTML's head tag as well as the Shadow DOM. Hence, stylesheets used only in a shadow DOM are present globally as well.

#### Project: `project-data`

The stylesheets used are [`src/styles/project_data.css`](src/styles/project_data.css) and [https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css](https://konpa.github.io/devicon/).

|Attribute|Explanation|Example|Optional|
|:-------:|-----------|-------|:------:|
|`link`|URL|`https://github.com/neelkamath/time-bend-android`|No|
|`name`|Name|`Time Bend`|No|
|`icons`|Icons from [DEVICON](https://konpa.github.io/devicon/) of technologies used|`<i class='devicon-java-plain'></i> <i class='devicon-android-plain'></i>`|Yes|
|`description`|HTML description|`<a href='https://play.google.com/store/apps/details?id=io.github.neelkamath.timebend'>Play Store</a> productivity app`|No|
|`img`|Screenshot source|`src/media/projects/time_bend.png`|Yes|

## License

This project is under the [MIT license](LICENSE).
