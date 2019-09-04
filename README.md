# neelkamath.com

This is my [personal website](https://neelkamath.com).

## Installation

Clone the repository using one of the following methods.
- SSH: `git clone git@github.com:neelkamath/neelkamath.github.io.git`
- HTTPS: `git clone https://github.com/neelkamath/neelkamath.github.io.git`

## Usage

Open `neelkamath.github.io/index.html` in your browser.

## Documentation

- Use `snake_case` to name files and directories.
- Limit lines to 120 characters except where impractical.

Browsers seem to implement the shadow DOM differently. In Safari, stylesheets located on other websites work fine when loaded only in the shadow DOM. However, in Chrome, the stylesheet must be in the HTML's head tag as well as the Shadow DOM. Hence, stylesheets used only in a shadow DOM are present globally as well.

There is a single web component, `project-data`, meant for showcasing projects. Place its HTML description (mandatory) (e.g., `<a href='https://play.google.com/store/apps/details?id=io.github.neelkamath.timebend'>Play Store</a> productivity app`) in between this custom element's HTML tags. `project-data`'s attributes are given in the table below.

|Attribute|Explanation|Example|Optional|
|:-------:|-----------|-------|:------:|
|`link`|GitHub Repository URL|`https://github.com/neelkamath/time-bend-android`|No|
|`name`|Name|`Time Bend`|No|
|`icons`|[DEVICON](https://konpa.github.io/devicon/) icons' CSS class names of the technologies used (listed in reverse order of appearance)|`devicon-java-plain devicon-android-plain`|Yes|
|`img`|Screenshot source|`src/media/projects/time_bend.png`|Yes|

## Credits

The background image is an edited wallpaper from [WLPPR](http://wlppr.co/).

## License

This project is under the [MIT license](LICENSE).
