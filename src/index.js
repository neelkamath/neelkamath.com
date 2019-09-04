customElements.define('project-data', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.append(this._getStyleLink(), this._getIconLink(), this._getProjectDiv(), this._getParagraph());
        if (this.hasAttribute('img')) shadow.append(this._getImage());
    }

    _getStyleLink() {
        const styleLink = document.createElement('link');
        styleLink.href = 'src/styles/project_data.css';
        styleLink.rel = 'stylesheet';
        return styleLink;
    }

    _getIconLink() {
        const iconLink = document.createElement('link');
        iconLink.href = 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css';
        iconLink.rel = 'stylesheet';
        return iconLink;
    }

    _getProjectDiv() {
        const div = document.createElement('div');
        div.className = 'project';
        const a = document.createElement('a');
        a.href = this.getAttribute('link');
        a.innerText = this.getAttribute('name');
        div.appendChild(a);
        if (this.hasAttribute('icons')) {
            const span = document.createElement('span');
            span.innerHTML = this.getAttribute('icons');
            div.appendChild(span);
        }
        return div;
    }

    _getParagraph() {
        const p = document.createElement('p');
        p.innerHTML = this.getAttribute('description');
        return p;
    }

    _getImage() {
        const img = document.createElement('img');
        img.alt = 'screenshot';
        img.src = this.getAttribute('img');
        return img;
    }
});