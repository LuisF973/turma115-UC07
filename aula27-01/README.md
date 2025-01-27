
# **Aula 01 - Introdução ao HTML**

## **Objetivo da Aula:**
Nesta aula, vamos aprender sobre a estrutura básica de um documento HTML, como funcionam as tags e seus atributos, além de entender como estruturar uma página web de forma simples. A ideia é criar um primeiro arquivo HTML, explicando cada tag com comentários e apresentando as principais tags essenciais para começar a trabalhar com HTML.

---

## **Conteúdo da Aula:**

### **1. O que é HTML?**
HTML (HyperText Markup Language) é a linguagem de marcação utilizada para estruturar e exibir conteúdo na web. Ele define a estrutura de uma página web, utilizando elementos chamados "tags". O HTML não é uma linguagem de programação, mas sim uma linguagem de marcação que descreve a estrutura de um site.

### **2. Estrutura Básica de um Documento HTML:**

A estrutura básica de um documento HTML é composta pelas seguintes partes:

- `<!DOCTYPE html>`: Declaração de tipo de documento, que informa ao navegador que a página é escrita em HTML5.
- `<html>`: Tag que define o início do documento HTML.
- `<head>`: Contém metadados, como o título da página, links para CSS, etc.
- `<body>`: Contém o conteúdo visível da página, como textos, imagens e outros elementos.

### **3. Tags Básicas do HTML:**
- `<h1>`, `<h2>`, `<h3>`, etc.: Definem cabeçalhos de diferentes níveis.
- `<p>`: Define um parágrafo.
- `<a>`: Define um link.
- `<ul>`, `<ol>`, `<li>`: Definem listas não ordenadas e ordenadas.
- `<img>`: Insere imagens.
- `<form>`, `<input>`, `<button>`: Criam formulários interativos.

---

## **Código de Exemplo:**

Aqui está um exemplo básico de um arquivo HTML com explicações dentro dos comentários. Copie o código abaixo e cole em um arquivo chamado `index.html`.

```html
<!DOCTYPE html> <!-- Declaração de tipo de documento (HTML5) -->
<html lang="pt-br"> <!-- A tag html define o início do documento HTML -->
<head>
    <meta charset="UTF-8"> <!-- Define a codificação de caracteres da página -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Define a responsividade da página -->
    <title>Primeira Página HTML</title> <!-- O título da página que aparece na aba do navegador -->
</head>
<body> <!-- Início do conteúdo visível da página -->

    <!-- Cabeçalho principal -->
    <h1>Bem-vindo à Aula 01 de HTML!</h1>

    <!-- Parágrafo de introdução -->
    <p>Este é o nosso primeiro documento HTML. Vamos aprender as tags básicas de formatação!</p>

    <!-- Link para outra página -->
    <p>Para aprender mais sobre HTML, clique <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">aqui</a>.</p>

    <!-- Lista não ordenada -->
    <h2>Minhas Linguagens de Programação Favoritas:</h2>
    <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Ruby</li>
    </ul>

    <!-- Lista ordenada -->
    <h2>Passos para criar um projeto web:</h2>
    <ol>
        <li>Planejar o projeto</li>
        <li>Desenvolver o layout</li>
        <li>Implementar a funcionalidade</li>
        <li>Testar a aplicação</li>
        <li>Publicar</li>
    </ol>

    <!-- Imagem -->
    <h2>Exemplo de Imagem:</h2>
    <img src="https://www.example.com/imagem.jpg" alt="Exemplo de Imagem" width="300">

    <!-- Formulário básico -->
    <h2>Formulário de Contato:</h2>
    <form action="#">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome"><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>

        <button type="submit">Enviar</button>
    </form>

</body> <!-- Fim do conteúdo visível da página -->
</html> <!-- Fim do documento HTML -->
```

---

## **Atividade da Aula:**

### **Objetivo da Atividade:**
Criar uma página web simples, utilizando as tags e conceitos apresentados, e adicionar comentários explicativos sobre cada tag utilizada.

### **Passos para a Atividade:**

1. Crie um arquivo `index.html` em seu editor de código preferido.
2. Implemente a estrutura básica do HTML, conforme o exemplo dado.
3. Adicione ao seu documento:
   - Um título que descreva o tema da sua página.
   - Pelo menos dois parágrafos explicando o que você aprendeu até agora.
   - **Lista não ordenada** com os seus hobbies ou interesses.
   - **Lista ordenada** com os passos que você seguiria para criar um projeto web.
   - Uma imagem (pode ser qualquer imagem da internet).
   - Um formulário simples com campos de nome e email, assim como um botão de envio.
4. Comente o código, explicando para que serve cada tag que você usou. Exemplo: `<!-- Esta tag define um parágrafo -->`.

### **Entrega:**
Após concluir, salve o arquivo `index.html` e envie para o repositório no GitHub ou conforme a orientação do professor.

---

## **Dicas:**

- Lembre-se de sempre utilizar comentários em seu código para explicar o que está fazendo.
- Experimente diferentes tags HTML, como cabeçalhos (`<h1>` até `<h6>`), links (`<a>`), imagens (`<img>`) e listas (`<ul>`, `<ol>`, `<li>`).
- A prática com HTML é essencial para entender como as páginas são estruturadas.

---

**Próxima Aula:** Na próxima aula, vamos começar a estilizar nossa página com CSS para melhorar a aparência e o layout.

