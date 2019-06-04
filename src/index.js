customElements.define('project-data', class extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        let styleLink = document.createElement('link');
        styleLink.href = 'src/styles/project_data.css';
        styleLink.rel = 'stylesheet';
        shadow.appendChild(styleLink);

        let iconLink = document.createElement('link');
        iconLink.href = 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css';
        iconLink.rel = 'stylesheet';
        shadow.appendChild(iconLink);

        let div = document.createElement('div');
        div.className = 'project';
        let a = document.createElement('a');
        a.href = this.getAttribute('link');
        a.innerText = this.getAttribute('name');
        div.appendChild(a);
        if (this.hasAttribute('icons')) {
            let span = document.createElement('span');
            span.innerHTML = this.getAttribute('icons');
            div.appendChild(span);
        }
        shadow.appendChild(div);

        let p = document.createElement('p');
        p.innerHTML = this.getAttribute('description');
        shadow.appendChild(p);

        if (this.hasAttribute('img')) {
            let img = document.createElement('img');
            img.alt = 'screenshot';
            img.src = this.getAttribute('img');
            shadow.appendChild(img);
        }
    }
});