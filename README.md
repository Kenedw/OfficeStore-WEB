# OfficeStore - WEB

Pagina responsável por consumir os serviços da OfficeStore-API, e gerir essas informações. Criado com ReactJs, Redux-Saga, Styled-Components e Axios como cliente HTTP baseado em Promises.

# Estrutura de arquivos
```
└───src
    │   App.js
    │   index.js
    │
    ├───assets
    │   └───imgs
    │           item.png
    │           logo.png
    │
    ├───components
    │   ├───CreateItemModal
    │   │       index.js
    │   │       styles.js
    │   │
    │   ├───Header
    │   │       index.js
    │   │       styles.js
    │   │
    │   ├───Loading
    │   │       index.js
    │   │       styles.js
    │   │
    │   ├───SearchBar
    │   │       index.js
    │   │       styles.js
    │   │
    │   └───UpdateItemModal
    │           index.js
    │           styles.js
    │
    ├───pages
    │   ├───Login
    │   │       index.js
    │   │       styles.js
    │   │
    │   ├───Mycatalog
    │   │       index.js
    │   │       styles.js
    │   │
    │   └───Signup
    │           index.js
    │           styles.js
    │
    ├───routes
    │       index.js
    │       route.js
    │
    ├───services
    │       api.js
    │       history.js
    │
    ├───store
    │   │   createStore.js
    │   │   index.js
    │   │   persistReducers.js
    │   │
    │   └───modules
    │       │   rootReducer.js
    │       │   rootSaga.js
    │       │
    │       └───auth
    │               actions.js
    │               reducer.js
    │               sagas.js
    │
    └───styles
            global.js
```
# Inicializando a aplicação

Para executar a aplicação, alguns simples passos devem ser seguidos.

## Instalando pacotes
Após baixar uma copia deste repositório, com o terminal em tua pasta raiz, deve-se instalar todos os seus pacotes com o seu gerenciador preferido.

`$ yarn install` ou `$ npm i`

## Parâmetros de ambiente (dotenv)
Os parâmetros de ambiente devem ser criados, em um arquivo `.env`, seque no repositório um arquivo de exemplo como base.

## Executando
Por fim, para rodar a aplicação você deve rodar o seguinte comando:
 ``$ yarn dev`` ou ``$ npm run dev``

*Você pode fazer login com os dados email: `first@email.com` ou cnpj: `12345678912345` e senha: `123456`.*
