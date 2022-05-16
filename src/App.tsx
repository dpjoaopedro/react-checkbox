import "./App.css";
import React, { useState } from "react";

function App() {
  const [categorias, setCategorias] = useState([
    { nome: "comida", selecionado: false },
    { nome: "bebida", selecionado: false },
    { nome: "limpeza", selecionado: false },
  ]);

  const [produtos] = useState([
    { nome: "queijo", categoria: "comida" },
    { nome: "preseunto", categoria: "comida" },
    { nome: "vinho", categoria: "bebida" },
    { nome: "cerveja", categoria: "bebida" },
    { nome: "sabão", categoria: "limpeza" },
    { nome: "detergente", categoria: "limpeza" },
  ]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCategorias = categorias.map((categoria) => ({
      ...categoria,
      selecionado:
        categoria.nome === e.target.id
          ? !categoria.selecionado
          : categoria.selecionado,
    }));
    setCategorias(newCategorias);
  };

  const categoriasCheckbox = categorias.map((categoria, index) => (
    <div key={index}>
      <input type="checkbox" id={categoria.nome} onChange={changeHandler} />
      <label htmlFor={categoria.nome}> {categoria.nome} </label>
    </div>
  ));

  const nomeDasCategoriasSelecionadas = categorias
    .filter((categoria) => categoria.selecionado)
    .map((categoria) => categoria.nome);

  const produtosSelecionados = produtos.filter((produto) =>
    nomeDasCategoriasSelecionadas.includes(produto.categoria)
  );

  const produtosCard = produtosSelecionados.map((produto, index) => (
    <div className="card" key={index}>
      <p>{produto.nome}</p>
    </div>
  ));

  return (
    <div className="App">
      {categoriasCheckbox} <div className="container">{produtosCard}</div>
    </div>
  );
}

export default App;
