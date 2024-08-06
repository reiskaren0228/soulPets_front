# React + Vite

# SoulCode Pets - Front End

Bem-vindo ao projeto SoulCode Pets! Este é o front-end da aplicação que gerencia informações sobre pets, permitindo adicionar, atualizar, excluir e visualizar dados de pets.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Vite**: Ferramenta de build e desenvolvimento.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **React Hot Toast**: Biblioteca para exibição de notificações.

## Instalação

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/SEU_USUARIO/SoulCode-Pets-Front-End.git
   ```

 2. **Navegue para o Diretório do Projeto

```bash
cd SoulCode-Pets-Front-End
```
3. **Instale as Dependências

```bash
npm install
```

4. **Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

- O aplicativo estará disponível em http://localhost:3000.

## Estrutura do Projeto
- src/: Contém o código fonte do projeto.
  - api/: Funções para interagir com a API (requisições HTTP).
  - pets.js: Funções para gerenciar os dados de pets.

- components/: Componentes React reutilizáveis.

- pages/: Páginas principais da aplicação.
  - NovoPet.jsx: Página para adicionar e editar pets.

- App.jsx: Componente principal do aplicativo.

## Rotas da API

* As seguintes rotas são usadas para interagir com a API:

  - GET /pets: Recupera todos os pets.
  - GET /pets/:id: Recupera um pet específico pelo ID.
  - POST /pets: Adiciona um novo pet.
  - PUT /pets/:id: Atualiza um pet existente.
  - DELETE /pets/:id: Exclui um pet pelo ID.

## Contribuindo

* Faça um Fork do Repositório

- Crie uma Branch para sua Feature

```bash
git checkout -b minha-feature
```
- Faça suas Alterações e Commit

```bash
git add .
git commit -m "Adiciona nova funcionalidade"
```
- Envie para o Repositório Remoto

```bash
git push origin minha-feature
```
- Abra um Pull Request

- Vá para a página do repositório no GitHub e abra um novo pull request para sua branch.

## Licença
Este projeto está licenciado sob a MIT License.
