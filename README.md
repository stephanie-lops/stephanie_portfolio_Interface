# Photographer-Portfolio-Stephanie-Lopes
## Portfólio de fotografia analógica
## stephanie_portfolio_Interface
**Autor: Stephanie Lopes**

3º MVP PUC Rio - Portfolio pessoal para divulgação de fotografias analógicas e campo de contato para parcerias de trabalho.

Objetivo: Criação de website pessoal para divulgação de fotografias analógicas, campo de contato para parcerias de trabalho e registro de clientes, viabilizando o futuro envio de newsletter.
Problema: alto custo de sites para portifólio de fotografia e layouts limitados.
Propósito: O uso de uma website pessoal como portfólio exclui a necessidade do uso de websites genéricos de portfólio, diminuindo custos, flexibilizando o layout e design personalizados e emitindo uma mensagem de maior profissionalismo e confiança para clientes e parceiros.

O design da interface de usuário e o protótipo de interatividade entre as páginas e recursos podem ser acessados pelo link a seguir do Figma, ferramenta de design de interface.

Figma: https://www.figma.com/design/hwFy6pRp8jupjQUNIQofFF/MVP?node-id=47-2&node-type=canvas&t=0zJBq6oVOJN5ug9U-0

Para simulação das intereções no protótipo, utilizar as dimensões 1680 x 1100.

## Como Funciona

O projeto funciona utilizando 3 componentes: interface REACT, API Python Flask, e API externa Brevo (envio e recebimento de e-mails).

![image](https://github.com/user-attachments/assets/1568f8a2-1af2-4087-b283-fff42a7428cc)

O projeto faz uso de 6 rotas:
```
POST/client
GET/client
GET/clients
PUT/client
DELETE/client
POST/contact
```

As páginas do projeto:
```
About.js - Página com informações sobre a autora do portfólio
AlbumDetails.js - Página para exibição de todas as fotografias dos álbuns
ContactPage.js - Página com formulário para contato com a autora
InicialPage.js - Página inicial do website
PortfolioPage.js - Página com a lista de todos os álbuns
SubscribePage.js - Página para cadastro de clientes que gostariam de receber newsletter
```
E também, nove componentes:
```
Banner.jsx - Utilizado em 2 páginas e serve para chamada de marketing para cliente e parceiros.
ContactForm.jsx - Utilizado em 1 página, para formulário de contato.
FooterMenu.jsx - Utilizado em todas as 5 páginas.
Header.jsx - Utilizado em todas as 5 páginas.
HeroSection.jsx - Utilizado em 1 página, para apresentação do website.
Item.jsx - Utilizado em 2 páginas, para crianção do card os álbuns e da interatividade de clicar no álbum e visualizar o álbum expandido.
MenuOverlay.jsx - Utilizado em todas as 5 páginas
Portfolio.jsx - Utilizado em 2 páginas, para mostragem dos álbuns.
SubscribeForm.jsx - Utilizado em 1 página, para registro de clientes.
```


Os dados que alimentam o portfólio, as fotografias usadas, estão no arquivo albunsCollection.json. A estrutura dos álbuns está definida na estrutura:
```
"albuns": [
        {
            "id": 1,
            "title": "LIFE IN Japan",
            "image": "/assets/images/japan_life/007.jpg",
            "photos": [
                {
                    "src": "/assets/images/japan_life/001.jpg",
                    "name": "Imagem 1"
                },
                {
                    "src": "/assets/images/japan_life/002.JPG",
                    "name": "Imagem 2"
                },
                            .
                            .
                            .
                {
                    "src": "/assets/images/ALBUM_X/FOTO_XXX.JPG",
                    "name": "Imagem XXX"
                }
```
Seguindo o padrão de númeração sequencial, onde coloquei os Xs nas últimas linhas.

**Os dados são chamados pela página InicialPage.js, componentizados pelos arquivos Item.jsx e Portfolio,jsx e exibidos pela página PortfolioPage.js.**

## Como executar

Para executar o projeto, primeiramente, deve conter as pastas listadas abaixo.
```
public
src
```
E as sub pastas:
```
public
    - assets
        - images
            - birthday
            - brasil_life
            - cultural_events
            - japan_life
src
    - assets
        - fonts
        - icons
        - images
    - components
    - pages
```

Antes de executar, é necessário instalar o gerenciador de pacotes npm, o framework react-bootstrap e o pacote de estilos sass.

Instalar dependencias:
```
npm install
```
Executar a aplicação:
```
npm start
```

## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
docker build -t stephanie-portfolio-interface .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando: 

```
docker run -p 3000:3000 stephanie-portfolio-interface
```

Uma vez executando, para acessar a API, basta abrir o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.


### Alguns comandos úteis do Docker

**Para verificar se a imagem foi criada** você pode executar o seguinte comando:

```
$ docker images
```

 Caso queira **remover uma imagem**, basta executar o comando:
```
$ docker rmi <IMAGE ID>
```
Subistituindo o `IMAGE ID` pelo código da imagem

**Para verificar se o container está em exceução** você pode executar o seguinte comando:

```
$ docker container ls --all
```

 Caso queira **parar um container**, basta executar o comando:
```
$ docker stop <CONTAINER ID>
```
Subistituindo o `CONTAINER ID` pelo ID do conatiner


 Caso queira **destruir um conatiner**, basta executar o comando:
```
$ docker rm <CONTAINER ID>
```
Para mais comandos, veja a [documentação do docker](https://docs.docker.com/engine/reference/run/).


## Instruções de uso

Após a execução com sucesso do projeto, será possível explorar as páginas do website. As páginas são:

```
1. Home
2. Portfolio
    2.1 Album 1: "Life in Japan"
    2.2 Album 2: "Cultural Events"
    2.3 Album 3: "Birthday"
    2.4 Album 4: "Life in Brazil"
3. About
4. Contact
5. Subcribe
6. Menu sobreposto (Acesso às demais páginas)
```

Os principal caminho para alcançar as fotos é:
```
Home > Album do Portfolio > Clique em um álbum > Fotos
```
O caminho para contato é:
```
Home > Três linhas à direita superior > Contact > Prencher Formulário > Submit
```
O caminho para contato é:
```
Home > Três linhas à direita superior > Subscribe > Prencher Formulário > Submit
```
Todas as páginas podem ser facilmente acessadas pelo menu sopreposto, que está disponível no canto direito superior em todas as páginas, ou pelo Footer, presente no final de todas as páginas.
