# Conecta Sustentável

Site institucional e educativo do projeto de extensão universitária **Conecta Sustentável** (Engenharia de Software – Cruzeiro do Sul Virtual), sobre consumo consciente e economia sustentável. Público: estudantes da UNICAP, Recife/PE. ODS 4 e ODS 12. Autor: Hugo Borba de Andrade França.

## Objetivo
Reunir vídeos, glossário e materiais que ajudem estudantes a planejar compras, economizar e reduzir desperdícios.

## Tecnologias
HTML5, CSS3 e JavaScript puro. Sem backend, banco de dados, login ou dependências. A única chamada externa é a fonte DM Sans (Google Fonts), com fallback do sistema.

## Estrutura
```text
conecta-sustentavel/
├── index.html  videos.html  glossario.html  materiais.html
├── css/style.css
├── js/main.js  videos.js  glossario.js  materiais.js
├── assets/images/  assets/icons/
└── README.md
```
`main.js` monta o menu e o rodapé de todas as páginas (edite os links em um só lugar).

## Executar localmente
Abra `index.html` no navegador. Opcional: `python3 -m http.server 8000` na pasta e acesse http://localhost:8000.

## Publicar no GitHub Pages
1. Crie um repositório e envie todos os arquivos (`index.html` na raiz).
2. Em **Settings → Pages**, em *Build and deployment*, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`, e salve.
4. O site ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Adicionar vídeos
Em `js/videos.js`, adicione um objeto à lista `VIDEOS`:
```js
{ titulo:"Título", descricao:"Resumo breve.", categoria:"Consumo consciente", url:"https://www.youtube.com/watch?v=XXXXXXXXXXX" }
```
A categoria deve ser uma das listadas em `CATEGORIAS`. Aceita links `watch?v=`, `youtu.be/`, `embed/` e `shorts/`. Use apenas vídeos que você verificou.

## Adicionar termos ao glossário
Em `js/glossario.js`, adicione à lista `TERMOS`:
```js
{ nome:"Termo", categoria:"Consumo", definicao:"...", explicacao:"...", exemplo:"..." }
```
Categorias existentes: Consumo, Finanças, Meio ambiente (novas categorias criam novos filtros). A ordem alfabética é automática.

## Adicionar materiais e links
Em `js/materiais.js`: PDFs, guias e cartilhas vão em `MATERIAIS`; instituições e portais em `FONTES`.
```js
{ nome:"", instituicao:"", descricao:"", tipo:"Cartilha", url:"https://..." }
```
Confira cada URL antes de publicar. Links externos abrem em nova aba com `rel="noopener noreferrer"`.
