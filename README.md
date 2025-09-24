# Relatório de Acessibilidade e Uso de ARIA (Resumo)

Este projeto aplica práticas de acessibilidade em React, focando no uso de HTML semântico e ARIA (Accessible Rich Internet Applications) para garantir a usabilidade por tecnologias assistivas, como leitores de tela.

### O que é ARIA?

ARIA é um conjunto de atributos HTML que adiciona contexto a elementos não semânticos (como `<div>`), descrevendo sua **função**, **propriedades** e **estado**. Foi usado para dar clareza a componentes dinâmicos.

### Aplicações de ARIA no Projeto

-   **`aria-label="Menu Principal"`**: Identifica a seção de navegação principal para leitores de tela.
-   **`role="contentinfo"`**: Define o `<footer>` como a área de informações do site, como direitos autorais.

### Onde ARIA Não Foi Necessário

Acessibilidade foi garantida primariamente com **HTML semântico**, que é a melhor prática:
-   **`<button>`, `<h1>`, `<a>`, `<p>`**: Elementos nativos que já são acessíveis por padrão.
-   **`<footer>`**: A tag já possui a `role` implícita de `contentinfo`, tornando o atributo ARIA redundante, mas não prejudicial.

### Nova Implementação com ARIA: Componente `Switch`

Para exemplificar um cenário onde ARIA é essencial, foi criado um componente de `Switch` (interruptor), que não existe nativamente em HTML.

-   **`role="switch"`**: Informa que o elemento funciona como um interruptor.
-   **`aria-checked`**: Comunica o estado do interruptor ("ligado" ou "desligado").

Este componente demonstra como criar um elemento de interface complexo e totalmente acessível.
