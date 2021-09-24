export enum Variants {
  SERVICOS,
  EVENTOS,
  TRANSCRICAOEMDIA,
  EDITAIS,
  NOTICIAS,
  REDESSOCIAIS,
  PPGBIOINFO,
  SOBRE,
  PUBLICACOES,
  SOBREBIOME,
}

export const values = {
  [Variants.SERVICOS]: {
    title: "Serviços",
    path: "/servicos",
    color: "#D79B00",
    cardType: "card-noticia",
  },
  [Variants.EVENTOS]: {
    title: "Eventos",
    path: "/eventos",
    color: "#DC0000",
    cardType: "card-noticia",
  },
  [Variants.TRANSCRICAOEMDIA]: {
    title: "Transcrição em dia",
    path: "https://bioinfo.imd.ufrn.br/transcricaoemdia/",
    color: "#4D4D4D",
    cardType: "card-noticia",
  },
  [Variants.EDITAIS]: {
    title: "Editais",
    path: "/editais",
    color: "#3A68A1",
    cardType: "card-noticia",
  },
  [Variants.NOTICIAS]: {
    title: "Notícias",
    path: "/noticias",
    color: "#5B9C3A",
    cardType: "card-noticia",
  },
  [Variants.REDESSOCIAIS]: {
    title: "Redes sociais",
    color: "#D79B00",
    cardType: "card-imagem nucleos",
  },
  [Variants.PPGBIOINFO]: {
    title: "PPG Bioinfo",
    path: "/posgraduacao",
    color: "#3A68A1",
    cardType: "card-imagem projetos",
  },
  [Variants.SOBRE]: {
    title: "Sobre o programa",
    path: "/graduate",
    color: "#3A68A1",
    cardType: "card-noticia",
  },
  [Variants.PUBLICACOES]: {
    title: "Publicações",
    path: "/publicacoes",
    color: "#3A68A1",
    cardType: "card-noticia",
  },
  [Variants.SOBREBIOME]: {
    title: "Sobre o BioME",
    path: "/graduate",
    color: "#3A68A1",
    cardType: "card-noticia",
  },
};
