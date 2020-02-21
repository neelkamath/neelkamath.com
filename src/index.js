customElements.define('project-data', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.append(this._getStyleLink(), this._getIconLink(), this._getHeading(), this._getDescription());
        if (this.hasAttribute('img')) shadow.append(this._getImage());
    }

    _getDescription() {
        const p = document.createElement('p');
        p.append(...this.childNodes);
        return p;
    }

    _getStyleLink() {
        const link = document.createElement('link');
        link.href = 'src/styles/project_data.css';
        link.rel = 'stylesheet';
        return link;
    }

    _getIconLink() {
        const link = document.createElement('link');
        link.href = 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css';
        link.rel = 'stylesheet';
        return link;
    }

    _getHeading() {
        const div = document.createElement('div');
        div.className = 'project';
        const a = document.createElement('a');
        a.href = this.getAttribute('link');
        a.innerText = this.getAttribute('name');
        div.appendChild(a);
        if (this.hasAttribute('icons')) {
            const span = document.createElement('span');
            for (const className of this.getAttribute('icons').split(' ')) {
                span.innerHTML += `<i class="${className}"></i>`;
            }
            div.appendChild(span);
        }
        return div;
    }

    _getImage() {
        const img = document.createElement('img');
        img.src = this.getAttribute('img');
        return img;
    }
});