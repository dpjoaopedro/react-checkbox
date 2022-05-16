export interface Categoria {
  nome: string;
  selecionado: boolean;
}

export interface Produto {
  nome: string;
  categoria: string;
}

export const categoriasCarregadasDoBackend: Categoria[] = [
  { nome: "comida", selecionado: true },
  { nome: "bebida", selecionado: false },
  { nome: "limpeza", selecionado: false },
];

export const produtosCarregadosDoBackend: Produto[] = [
  { nome: "queijo", categoria: "comida" },
  { nome: "presunto", categoria: "comida" },
  { nome: "vinho", categoria: "bebida" },
  { nome: "cerveja", categoria: "bebida" },
  { nome: "sabão", categoria: "limpeza" },
  { nome: "detergente", categoria: "limpeza" },
];
