import React from "react";
import AcessibilidadeButton from "./components/AcessibilidadeButton";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Botão de acessibilidade clicado!");
  };

  return (
    <div className="container">
      <header>
        <h1 tabIndex={0}>Projeto de Acessibilidade</h1>
        <nav aria-label="Menu Principal">
          <ul>
            <li>
              <a href="#conteudo">Ir para o conteúdo</a>
            </li>
            <li>
              <a href="#rodape">Ir para o rodapé</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="conteudo">
        <h2>Recursos de Acessibilidade</h2>
        <p>
          Este projeto demonstra boas práticas de acessibilidade em aplicações
          web, utilizando React com Vite.
        </p>
        <img
          src="https://via.placeholder.com/300x150"
          alt="Imagem ilustrativa de acessibilidade digital"
        />
        <AcessibilidadeButton label="Clique aqui" onClick={handleClick} />
      </main>

      <footer id="rodape" role="contentinfo">
        <p>© 2025 Projeto de Acessibilidade.</p>
      </footer>
    </div>
  );
}

export default App;
