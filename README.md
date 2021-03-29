Animações do texto no "sobre mim": https://www.npmjs.com/package/react-text-transition

clsx: (dev) adiciona lógica a chamada de classes e outras funcionalidades relacionadas a texto

immer: biblioteca que lida com a imutablidade do js

polished: biblioteca que adiciona funções de manipulação gráficas do CSS

@react-icons/all-files: (dev) adiciona icones

styled-components: permite criar css no js

- 29/03/2021:
  - gatsby-node.js: configuranção do ambiente local reduzindo os `relatives path` usando `alias` do gatsby;
  - package.json/package-lock.json: adicionado `immer` para lidar com imutablidade do javascript;
  - @components/form.js: implementado e criado formulário simples;
  - @components/menu.js: Desabilitado os caminhos `/curriculum` e `/service` dentro do menu principal;
  - @components/sociais.js: Removido `console.log` adicionais e desabilitado icones em excesso;
  - @components/hidden/: as páginas `curriculum.js` e `service.js` foram movidas para essa pasta que está escondida;
  - @components/headers.js: ajustes para remover o `relative path` e usar `alias` do gatsby;
  - @components/layout.js: ajustes para remover o `relative path` e usar `alias` do gatsby e ajustes nas fontes quando `max-width < 414px`
  - @pages/404.js: removido `console.log` adicionais;
  - @pages/about.js: 
    - ajustes para remover o `relative path` e usar `alias` do gatsby;
    - removido imagem não utilizada;
    - alterado mudança da citação de `event click` para `event mouse enter` & `event mouse leave`;
  - @pages/about.js: removido `console.log` adicionais;
  - @pages/contact.js: 
    - ajustes para remover o `relative path` e usar `alias` do gatsby;
    - adicionado espaçamento;
    - adicionado formulário de mensagem;
  - @pages/index:
    - ajustes para remover o `relative path` e usar `alias` do gatsby;
  - @pages/portfolio:
    - ajustes para remover o `relative path` e usar `alias` do gatsby;
    - remoção de `console.log` adicionais;
  - @pages/curriculum.js / services.js foram desativas.
  - @utils/validateEmail: verifica se um email é vaálido ou não;
