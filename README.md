# Template Next.js com TailwindCSS v4

Este é um template simples para iniciar projetos com **Next.js 15** e **TailwindCSS v4**. Ele já está configurado com **PostCSS 8** e **JIT mode**, oferecendo uma base rápida e eficiente para começar o desenvolvimento de aplicações.

## Requisitos

- Node.js 16 ou superior
- **pnpm** (gerenciador de pacotes recomendado)

## Como Usar

### 1. Clone este repositório

Para clonar o projeto, use o seguinte comando:

'''bash
git clone 'https://github.com/leandrordg/next-app-tailwindcss-v4' <diretório>
'''

### 2. Crie um novo projeto com o template

Ou crie um novo projeto com o template utilizando o comando:

'''bash
pnpm create next-app@latest <diretório>
'''

### 3. Instale as dependências

Para instalar as dependências do TailwindCSS v4, execute:

'''bash
pnpm add tailwindcss @tailwindcss/postcss postcss
'''

### 4. Configure o PostCSS

Crie o arquivo `postcss.config.mjs` com o seguinte conteúdo:

'''js
const config = { plugins: { "@tailwindcss/postcss": {} } };

export default config;
'''

### 5. Execute o projeto

Para rodar o projeto localmente, use o comando:

'''bash
pnpm dev
'''

Isso vai iniciar o servidor de desenvolvimento na sua máquina.

## Recursos

- **Next.js 15** com suporte a server-side rendering (SSR) e static site generation (SSG).
- **TailwindCSS v4** com configuração pronta para uso.
- Suporte para **Dark Mode**.
- **PostCSS 8** com o plugin `@tailwindcss/postcss`.

## Contato

Leandro Rodrigues - [GitHub](https://github.com/leandrordg)

&copy; {new Date().getFullYear()} Leandro Rodrigues

> Este template está disponível para uso livre por qualquer pessoa.
