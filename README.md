# Solar System WebGL

## Requisitos

- [NodeJS](https://nodejs.org/)
- [npm](https://www.npmjs.com)

## Bibliotecas utilizadas

- [dat.GUI](https://github.com/dataarts/dat.gui)

## Rodar o projeto

- Instalar as dependências: `npm install`
- Rodar o projeto: `npx live-server`.

## Estrutura do projeto

```
cg-solar-system
├─ .editorconfig
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ js
│  │  ├─ gui.js
│  │  ├─ models.js
│  │  ├─ script.js    -- script principal que adiciona e transforma os objetos
│  │  ├─ Texture.js
│  │  ├─ utils
│  │  │  ├─ colors.js
│  │  │  ├─ Movement.js   -- classe com os métodos para fazer translação e rotação
│  │  │  ├─ sizes.js
│  │  │  ├─ speeds.js
│  │  │  ├─ Transformation.js    -- classe com os métodos para translação e rotação
│  │  │  └─ utils.js
│  │  └─ webgl.js   -- códigos para vertex-shader e fragment-shader
│  ├─ lib
│  │  └─ dat.gui.min.js
│  └─ styles
│     ├─ dat.gui.css
│     └─ index.processed.css
├─ textures
│  ├─ earthmap1k.jpg
│  ├─ stars.jpg
│  └─ sun.jpg
└─ yarn.lock
```

## Informações

Informações sobre os planetas foram tiradas dos seguintes links:

- http://www.grandpapencil.net/projects/plansped.htm
- https://www.jpl.nasa.gov/edu/pdfs/scaless_reference.pdf
- https://planetfacts.org/orbital-speed-of-planets-in-order/

Código para aplicar textura no canvas foi tirado do seguinte link:

- https://stackoverflow.com/questions/39893834/background-img-for-canvas-webgl
- https://stackoverflow.com/users/6931367/arii
