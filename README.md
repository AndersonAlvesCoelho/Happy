![Licença](https://camo.githubusercontent.com/206483f964cfac06f6b7b3141a6b898fe5449123/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d6c6963656e7365266d6573736167653d4d495426636f6c6f723d313543334436266c6162656c436f6c6f723d303030303030 "Licença")

> 💡 Tecnologias utilizadas no projeto:

<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"></code>
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"></code>
<code><img height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png"></code>
<code><img height="20" src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/insomnia-icon.png"></code>
<code><img height="20" src="https://pbs.twimg.com/profile_images/1091817101738864640/eQpWLr2c_400x400.jpg"></code>
<code><img height="20" src="https://avatars3.githubusercontent.com/u/53234021?s=400&v=4"></code>

<div align="center">
<h1>
    <img alt="Happy" title="Happy" src="https://github.com/AndersonAlvesCoelho/Happy/blob/main/NLW-03/front-end/src/images/logo-black.svg" />
</h1>
<h3><img height="20" src="https://raw.githubusercontent.com/rhoit/mode-icons/dump/icons/coffee.png"> NextLevelWeek 3.0</h3>
<img  src="https://github.com/AndersonAlvesCoelho/Happy/blob/main/NLW-03/front-end/src/images/landing.svg">
</div>



## 💡 About the project

Este projeto foi desenvolvido no evento Next Level Week # 03 pela [Rocketseat](https://rocketseat.com.br/) 🚀&nbsp;💜

Happy é um aplicativo que conecta pessoas a orfanatos para tornar o dia de muitas crianças mais feliz


##### Atividades finalizadas

- [x] Backend 
- [x] Frontend
- [ ] Mobile 

## 💻 Iniciar o projeto
#### 🔖 Layout
Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/mDEbnoojksG4w8sOxmudh3/Happy-Web). Lembrando que você precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.

### Requerimentos

- [Node.js](https://nodejs.org/en/download/) ou [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)
- [Expo](https://expo.io/learn)

```bash
    # Clone Repository
    git clone https://github.com/AndersonAlvesCoelho/Happy
    cd Happy
```

####  📦 Backend
```bash
    #Acesse um diretório do back-end
    cd NLW-03\back-end
    #Logo após, instale as dependências necessárias
    npm i ou yarn
    #Use o script para executar as migrações
    npm typeorm migration:run ou yarn typeorm migration:run
    #Por fim, iniciar a api
    npm dev ou yarn dev
```
> Pronto, seu backend já está inicializado. Você pode ver os dados da migration pela [url](http://localhost:3333/orphanages) ou pelo [insomnia](https://insomnia.rest/download/)
> http://localhost:3333/orphanages


#### 💻 Frontend
Obs .: Antes de continuar, certifique-se de ter a API rodando

```bash
    #Acesse um diretório do front-end
    cd NLW-03\front-end
    #Logo após, instale as dependências necessárias
    npm i ou yarn
    #Por fim, start o projeto
    npm dev ou yarn dev
```

#### 📱 Mobile
No desenvolvimento do aplicativo, eu tive um problema que ainda não achei solução.
O problem o corre quando eu conecto expo com o celular.

Segue o erro abaixo:
<div align="center">
    <img  src="https://cdn.discordapp.com/attachments/384754969800212480/768266130326159380/unknown.png">
</div>

---

##### 🚧 Tentativas de sulocinar:
<li>acessar o aplicativo pelo <strong>Tunnel</strong> em vez pelo <strong>LAN</strong>;</li>
<li>limpar o cache do navegador <strong>chrome</strong>;</li>
<li>deletar a pasta <strong>node_modules</strong> & o arquivo <strong>package-lock</strong> e instalartudo novamente pelo comando <strong>npm i</strong>;</li>
<li>atualizar todas as dependências do projeto;</li>
<li>deleta o projeto e recomeçar novamente;</li>
<li>reiniciar o notebook.</li>

> soluções sugeridas e outras pessoas que tiveram o mesmo problema: 
> [https://github.com/facebook/react-native/issues/28844](https://github.com/facebook/react-native/issues/28844)

obs.: se alguém tiver algum solução, pode me chamar pelo <a>discord - ZOI#0704</a> ou pelo <a>a0a0coelho0@gmail.com</a>

<h1 name="nlw">📣 O que é Next Level Week?</h1>

<p> 
 O NLW (antiga onmistack) é uma semana onde a <strong>Rocketseat</strong> mostram como montar uma aplicação do zero com as melhores tecnologias do mercado.
<br>
A Rocketseat tem a consciência que a prática é a melhor aula, então sempre nos inspiram e lançam desafios para a gente se virar sozinho!
</p>
<strong>Pilhares do metódo de ensino Rocketseat</strong><br>
<li><strong>Foco: </strong> Dominar todas as linguagens e tecnologias é impossível, por isso é importante focar para ir direto ao ponto sem perder tempo.</li>
<li><strong>Grupo: </strong> A comunidade de devs é uma das melhores comunidades que existem! Trabalhar em grupo é essencial, já perdi a conta de quantas vezes ajudei e fui ajudado com erros de programação.</li>
<li><strong>Prática: </strong> E claro, não podia faltar! Quando vemos uma aula, nós podemos entender os conceitos, mas só na prática que aprendemos realmente como faze-los! </li>

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE.md](https://github.com/AndersonAlvesCoelho/Happy/blob/main/LICENSE.md) para mais detalhes.

---
Feito por 💜&nbsp; Anderson Alves 👋 &nbsp;[linkedin](https://www.linkedin.com/in/anderson-alves-7b5587133/)