# Desafio Aulão Cypress com Samuel Lucas - Mentoria Julia de Lima

## Sobre
Este repositório contém uma série de testes automatizados desenvolvidos para resolver o desafio proposto no aulão do Cypress, liderado por Samuel Lucas.

## Pré-requisitos para Execução

Antes de começar, certifique-se de ter o Node.js e o Cypress instalados em seu ambiente de desenvolvimento. 

### Clonando o Repositório
Para obter uma cópia local do projeto, execute o seguinte comando:

```bash
git clone https://github.com/erick-ribeiro/desafio-aulao-samlucax.git
```

### Instalando Dependências
Navegue até o diretório do projeto clonado e instale as dependências necessárias:

```bash
npm install
```

## Executando os Testes

Você pode executar os testes de duas maneiras: via linha de comando ou através da interface gráfica do Cypress.

### Via Linha de Comando

- Execução normal:
  ```bash
  npm run test
  ```

- Execução em modo headless:
  ```bash
  npm run test:headless
  ```

## Resolução do Desafio

O desafio foi abordado por meio de um processo iterativo e documentado:

1. Inicialmente, foi criada uma issue do tipo *spike* para identificar falhas e possíveis soluções, documentando as descobertas em uma issue separada.

   ![Descrição da imagem: Card da issue do tipo spike](/assets/card-spike.png)

2. A partir deste spike, foram criadas 6 novas issues detalhando a causa das falhas e as possíveis soluções. Cada issue gerou uma branch para a implementação da solução, seguida de commits e merges das pull requests. As evidências foram registradas nos comentários de cada issue.

   [Link para as issues resolvidas](https://github.com/erick-ribeiro/desafio-aulao-samlucax/issues?q=is%3Aissue+is%3Aclosed)

   ![Descrição da imagem: Lista de issues resolvidas](/assets/issues-falhas.png)



3. Para assegurar a consistência e qualidade do código, foi implementado o ESLint no projeto. Esta ferramenta de análise estática é essencial para identificar e corrigir padrões problemáticos no código JavaScript, além de forçar a aderência a um guia de estilo único. Isso garante que todo o código contribuído ao repositório siga um padrão uniforme, facilitando a manutenção e a colaboração.

   - A configuração do ESLint foi realizada para alinhar com as melhores práticas de escrita de código em projetos que utilizam Cypress.
   - As regras e configurações do ESLint adotadas estão documentadas no arquivo `.eslintrc.json` do repositório, permitindo que todos os contribuidores sigam as mesmas diretrizes.

Para verificar a conformidade do código com as regras do ESLint, execute o seguinte comando:

```bash
npm run lint
```

Este comando irá analisar os arquivos de código e destacar quaisquer desvios das regras estabelecidas, ajudando a manter a qualidade e consistência do código ao longo do desenvolvimento do projeto.
