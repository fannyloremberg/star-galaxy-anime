/* Star Galaxy Anime
   Catálogo, filtros, encomenda, carrinho e TXT.
   O programa em C é outra entrega: este arquivo não o chama. */

"use strict";

const CHAVE_CARRINHO = "star-galaxy-anime-carrinho-v2";

const PRODUTOS = [
  { id: "cosplay-asuka", nome: "Cosplay de Asuka Langley", anime: "Evangelion", categoria: "Cosplay", disponibilidade: "encomenda", preco: 1290, estoque: 0, prazo: "30 a 45 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Plugsuit vermelho e o cabelo em maria-chiquinha. Feito sob medida, com as medidas do corpo.", alt: "Ilustração de produto: plugsuit vermelho inteiro em manequim, com maria-chiquinha laranja.", imagem: "assets/estudio/cosplay-asuka.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-nezuko", nome: "Cosplay de Nezuko Kamado", anime: "Kimetsu no Yaiba", apelidos: ["demon slayer"], categoria: "Cosplay", disponibilidade: "encomenda", preco: 980, estoque: 0, prazo: "30 a 45 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Quimono rosa, haori e o cabelo com pontas laranja. Encomenda de medida.", alt: "Ilustração de produto: quimono rosa e haori inteiros em manequim, cabelo preto com pontas laranja.", imagem: "assets/estudio/cosplay-nezuko.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-zoro", nome: "Cosplay de Roronoa Zoro", anime: "One Piece", categoria: "Cosplay", disponibilidade: "estoque", preco: 1120, estoque: 2, prazo: "8 a 12 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Quimono verde, faixa e o conjunto de três espadas. Há duas peças de mostruário.", alt: "Ilustração de produto: quimono verde e três espadas, traje inteiro em manequim.", imagem: "assets/estudio/cosplay-zoro.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-goku", nome: "Cosplay de Goku", anime: "Dragon Ball", apelidos: ["dragonball"], categoria: "Cosplay", disponibilidade: "estoque", preco: 990, estoque: 1, prazo: "8 a 12 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Gi laranja, faixa azul e o cabelo espetado. Uma peça de mostruário.", alt: "Ilustração de produto: gi laranja inteiro em manequim, com cabelo espetado.", imagem: "assets/estudio/cosplay-goku.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-sailor", nome: "Cosplay de Sailor Moon", anime: "Sailor Moon", categoria: "Cosplay", disponibilidade: "encomenda", preco: 1080, estoque: 0, prazo: "28 a 40 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Laço rosa, botas e os coques loiros. Feito com as medidas de quem veste.", alt: "Ilustração de produto: uniforme inteiro com laço rosa e botas, em manequim.", imagem: "assets/estudio/cosplay-sailor.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-hinata", nome: "Cosplay de Hinata Hyuga", anime: "Naruto", categoria: "Cosplay", disponibilidade: "encomenda", preco: 890, estoque: 0, prazo: "28 a 40 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Cabelo índigo e os leões de luz ao lado do corpo.", alt: "Ilustração de produto: traje inteiro em manequim, cabelo índigo e leões ao lado.", imagem: "assets/estudio/cosplay-hinata.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-sakura", nome: "Cosplay de Sakura Haruno", anime: "Naruto", categoria: "Cosplay", disponibilidade: "estoque", preco: 840, estoque: 1, prazo: "8 a 12 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Cabelo rosa, testa protegida e o traje preto de combate.", alt: "Ilustração de produto: traje preto de combate inteiro em manequim, cabelo rosa.", imagem: "assets/estudio/cosplay-sakura.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-mikasa", nome: "Cosplay de Mikasa Ackerman", anime: "Shingeki no Kyojin", apelidos: ["attack on titan"], categoria: "Cosplay", disponibilidade: "encomenda", preco: 960, estoque: 0, prazo: "28 a 40 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Jaqueta da tropa, lenço vermelho e as lâminas. A foto também mostra outras pessoas ao lado.", alt: "Ilustração de produto: jaqueta da tropa, lenço vermelho e lâminas, traje inteiro em um manequim.", imagem: "assets/estudio/cosplay-mikasa.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-luffy", nome: "Cosplay de Monkey D. Luffy", anime: "One Piece", categoria: "Cosplay", disponibilidade: "encomenda", preco: 870, estoque: 0, prazo: "25 a 38 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Chapéu de palha, colete vermelho e o short com borda clara.", alt: "Ilustração de produto: chapéu de palha, colete vermelho e short, traje inteiro em manequim.", imagem: "assets/estudio/cosplay-luffy.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-rem", nome: "Cosplay de Rem", anime: "Re:Zero", categoria: "Cosplay", disponibilidade: "encomenda", preco: 940, estoque: 0, prazo: "25 a 38 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Cabelo azul curto, o grampo em xis e o chapéu claro.", alt: "Ilustração de produto: cabelo azul, grampo em xis e chapéu claro, traje inteiro em manequim.", imagem: "assets/estudio/cosplay-rem.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-minato", nome: "Cosplay de Minato Namikaze", anime: "Naruto", categoria: "Cosplay", disponibilidade: "encomenda", preco: 1010, estoque: 0, prazo: "28 a 40 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Capa branca, colete verde e o cabelo loiro espetado.", alt: "Ilustração de produto: capa branca e colete verde, traje inteiro em manequim.", imagem: "assets/estudio/cosplay-minato.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-eren", nome: "Cosplay de Eren Yeager", anime: "Shingeki no Kyojin", apelidos: ["attack on titan"], categoria: "Cosplay", disponibilidade: "estoque", preco: 1180, estoque: 1, prazo: "8 a 12 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Jaqueta da tropa e o equipamento tridimensional nas costas.", alt: "Ilustração de produto: jaqueta da tropa e equipamento nas costas, traje inteiro em manequim.", imagem: "assets/estudio/cosplay-eren.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-light", nome: "Cosplay de Light Yagami", anime: "Death Note", categoria: "Cosplay", disponibilidade: "encomenda", preco: 760, estoque: 0, prazo: "20 a 32 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Terno escuro, gravata e o gesto de quem olha para cima.", alt: "Ilustração de produto: terno escuro inteiro em manequim, cabeça inclinada para cima.", imagem: "assets/estudio/cosplay-light.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-jiraiya", nome: "Cosplay de Jiraiya", anime: "Naruto", categoria: "Cosplay", disponibilidade: "encomenda", preco: 1090, estoque: 0, prazo: "30 a 45 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Cabelo branco, colete vermelho e o pergaminho nas costas.", alt: "Ilustração de produto: colete vermelho, cabelo branco e pergaminho, traje inteiro em manequim.", imagem: "assets/estudio/cosplay-jiraiya.jpg", ajuste: "contain", ilustracao: true },
  { id: "cosplay-levi", nome: "Cosplay de Levi Ackerman", anime: "Shingeki no Kyojin", apelidos: ["attack on titan"], categoria: "Cosplay", disponibilidade: "estoque", preco: 1240, estoque: 2, prazo: "8 a 12 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Capa e o uniforme da tropa, em duas peças de mostruário.", alt: "Ilustração de produto: capa e uniforme da tropa, traje inteiro em manequim.", imagem: "assets/estudio/cosplay-levi.jpg", ajuste: "contain", ilustracao: true },
  { id: "estatua-luffy", nome: "Estátua de Monkey D. Luffy", anime: "One Piece", categoria: "Action figures", disponibilidade: "estoque", preco: 1890, estoque: 1, prazo: "10 a 15 dias úteis", tamanhos: ["Único"], resumo: "Estátua de corpo inteiro: chapéu de palha, casaco vermelho e short azul.", alt: "Ilustração de produto: estátua inteira de Luffy em fundo de estúdio.", imagem: "assets/estudio/estatua-luffy.jpg", ajuste: "contain", ilustracao: true },
  { id: "figure-ace", nome: "Figure de Portgas D. Ace", anime: "One Piece", categoria: "Action figures", disponibilidade: "estoque", preco: 420, estoque: 3, prazo: "5 a 9 dias úteis", tamanhos: ["Único"], resumo: "Figure ajoelhado, com chamas e o colar de contas.", alt: "Ilustração de produto: figure ajoelhado com chamas e colar, em fundo de estúdio.", imagem: "assets/estudio/figure-ace.jpg", ajuste: "contain", ilustracao: true },
  { id: "figures-rwby", nome: "Figures de Weiss e Blake", anime: "RWBY", categoria: "Action figures", disponibilidade: "estoque", preco: 260, estoque: 4, prazo: "5 a 9 dias úteis", tamanhos: ["Único"], resumo: "Caixas de figures da equipe, Weiss e Blake, como na mesa da convenção.", alt: "Ilustração de produto: duas caixas de figure, uma clara e uma escura, em fundo de estúdio.", imagem: "assets/estudio/figures-rwby.jpg", ajuste: "contain", ilustracao: true },
  { id: "nendoroid-natsumi", nome: "Nendoroid de Natsumi Koshigaya", anime: "Non Non Biyori", categoria: "Action figures", disponibilidade: "estoque", preco: 310, estoque: 5, prazo: "5 a 9 dias úteis", tamanhos: ["Único"], resumo: "Bonequinho 3D de cabeça grande, colete amarelo e saia, sobre a base transparente.", alt: "Ilustração de produto: bonequinho de cabeça grande, colete amarelo e saia, em base transparente.", imagem: "assets/estudio/nendoroid-natsumi.jpg", ajuste: "contain", ilustracao: true },
  { id: "nendoroid-kirishima", nome: "Nendoroid de Kirishima", anime: "Kantai Collection", apelidos: ["kancolle"], categoria: "Action figures", disponibilidade: "estoque", preco: 340, estoque: 2, prazo: "5 a 9 dias úteis", tamanhos: ["Único"], resumo: "Bonequinho 3D com óculos verdes e o cenário da caixa, sofá incluso na foto.", alt: "Ilustração de produto: bonequinho de óculos verdes ao lado de um sofá pequeno, em fundo de estúdio.", imagem: "assets/estudio/nendoroid-kirishima.jpg", ajuste: "contain", ilustracao: true },
  { id: "vinil-naruto", nome: "Bonequinho de vinil — Naruto", anime: "Naruto", categoria: "Funko Pop", disponibilidade: "encomenda", preco: 159, estoque: 0, prazo: "15 a 25 dias úteis", tamanhos: ["Único"], resumo: "Ilustração da loja no formato de bonequinho de vinil, paleta laranja e azul. Não é peça genuína da fabricante.", alt: "Ilustração de produto: bonequinho de vinil loiro, jaqueta laranja e calça azul, em base preta.", imagem: "assets/estudio/vinil-naruto.jpg", ajuste: "contain", ilustracao: true },
  { id: "vinil-luffy", nome: "Bonequinho de vinil — Luffy", anime: "One Piece", categoria: "Funko Pop", disponibilidade: "encomenda", preco: 159, estoque: 0, prazo: "15 a 25 dias úteis", tamanhos: ["Único"], resumo: "Ilustração da loja: chapéu, colete vermelho e short azul. Não é peça genuína da fabricante.", alt: "Ilustração de produto: bonequinho de vinil de chapéu e colete vermelho, em base preta.", imagem: "assets/estudio/vinil-luffy.jpg", ajuste: "contain", ilustracao: true },
  { id: "vinil-goku", nome: "Bonequinho de vinil — Goku", anime: "Dragon Ball", apelidos: ["dragonball"], categoria: "Funko Pop", disponibilidade: "estoque", preco: 149, estoque: 6, prazo: "5 a 9 dias úteis", tamanhos: ["Único"], resumo: "Ilustração da loja: cabelo espetado e gi laranja. Não é peça genuína da fabricante.", alt: "Ilustração de produto: bonequinho de vinil de cabelo espetado e gi laranja, em base preta.", imagem: "assets/estudio/vinil-goku.jpg", ajuste: "contain", ilustracao: true },
  { id: "vinil-sailor", nome: "Bonequinho de vinil — Sailor Moon", anime: "Sailor Moon", categoria: "Funko Pop", disponibilidade: "encomenda", preco: 169, estoque: 0, prazo: "15 a 25 dias úteis", tamanhos: ["Único"], resumo: "Ilustração da loja: coques e laço rosa. Não é peça genuína da fabricante.", alt: "Ilustração de produto: bonequinho de vinil de coques e laço rosa, em base preta.", imagem: "assets/estudio/vinil-sailor.jpg", ajuste: "contain", ilustracao: true },
  { id: "haori-xadrez", nome: "Haori xadrez", anime: "Kimetsu no Yaiba", apelidos: ["demon slayer"], categoria: "Roupas", disponibilidade: "encomenda", preco: 280, estoque: 0, prazo: "18 a 28 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Ilustração de um haori xadrez para usar por cima da roupa. Desenho da loja.", alt: "Ilustração de produto: haori xadrez inteiro, sem pessoa.", imagem: "assets/estudio/haori-xadrez.jpg", ajuste: "contain", ilustracao: true },
  { id: "capa-expedicao", nome: "Capa de expedição", anime: "Shingeki no Kyojin", apelidos: ["attack on titan"], categoria: "Roupas", disponibilidade: "estoque", preco: 320, estoque: 4, prazo: "6 a 10 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Capa longa verde, ilustração da loja, para compor um visual de tropa.", alt: "Ilustração de produto: capa longa verde inteira, sem pessoa.", imagem: "assets/estudio/capa-expedicao.jpg", ajuste: "contain", ilustracao: true },
  { id: "moletom-elenco", nome: "Moletom do elenco", anime: "Naruto", categoria: "Roupas", disponibilidade: "encomenda", preco: 349, estoque: 0, prazo: "40 a 60 dias úteis", tamanhos: ["P", "M", "G", "GG"], resumo: "Moletom para reunir vários personagens de Naruto. Descreva o elenco: a feitura pede mais tempo.", alt: "Ilustração de produto: moletom roxo com constelação, sem pessoa.", imagem: "assets/estudio/moletom-elenco.jpg", ajuste: "contain", ilustracao: true },
  { id: "bandana-viagem", nome: "Bandana de viagem", anime: "One Piece", categoria: "Acessórios", disponibilidade: "estoque", preco: 69, estoque: 14, prazo: "4 a 8 dias úteis", tamanhos: ["Único"], resumo: "Bandana vermelha com plaquinha, ilustração da loja.", alt: "Ilustração de produto: bandana vermelha com plaquinha, em fundo limpo.", imagem: "assets/estudio/bandana-viagem.jpg", ajuste: "contain", ilustracao: true },
  { id: "tiara-lua", nome: "Tiara da lua", anime: "Sailor Moon", categoria: "Acessórios", disponibilidade: "encomenda", preco: 89, estoque: 0, prazo: "12 a 20 dias úteis", tamanhos: ["Único"], resumo: "Tiara com a lua no centro. Ilustração da loja, feita sob encomenda.", alt: "Ilustração de produto: tiara dourada com lua, em fundo limpo.", imagem: "assets/estudio/tiara-lua.jpg", ajuste: "contain", ilustracao: true },
  { id: "brincos-geometricos", nome: "Brincos geométricos", anime: "Kimetsu no Yaiba", apelidos: ["demon slayer"], categoria: "Acessórios", disponibilidade: "encomenda", preco: 78, estoque: 0, prazo: "12 a 20 dias úteis", tamanhos: ["Único"], resumo: "Par de brincos, um azul e um rosa. Ilustração da loja.", alt: "Ilustração de produto: par de brincos, um azul e um rosa, em fundo limpo.", imagem: "assets/estudio/brincos-geometricos.jpg", ajuste: "contain", ilustracao: true }
];

const PRECO_ENCOMENDA = {
  Cosplay: 980,
  Roupa: 249,
  "Acessório": 89,
  "Action figure": 320,
  "Estátua": 1490,
  "Bonequinho de vinil": 169
};

const CAMPOS = ["anime", "tipo", "tamanho", "quantidade", "medidas", "descricao"];
const consulta = { texto: "", categoria: "todas", universo: "todos", disponibilidade: "todos", ordem: "preco-desc" };
const estado = { itens: [], faixaPrazo: "", memoriaOk: true, confirmandoLimpeza: false };
let contagemTimer = 0;
let contagemInicial = true;

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([chave, valor]) => {
    if (valor == null || valor === false) return;
    if (chave === "class") { node.className = valor; return; }
    if (chave === "text") { node.textContent = valor; return; }
    if (chave === "hidden" || chave === "disabled") { node[chave] = true; return; }
    if (chave === "value") { node.value = String(valor); return; }
    if (chave.startsWith("on") && typeof valor === "function") {
      node.addEventListener(chave.slice(2).toLowerCase(), valor);
      return;
    }
    node.setAttribute(chave, String(valor));
  });
  children.flat().forEach((child) => {
    if (child == null || child === false) return;
    node.append(child.nodeType ? child : document.createTextNode(String(child)));
  });
  return node;
}

function normalizar(texto) {
  return String(texto || "").trim().toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function centavos(valor) { return Math.round((Number(valor) + Number.EPSILON) * 100); }

function formatarPreco(valor) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor).replace(/\u00a0/g, " ");
}

function formatarData(data) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(data);
}

function novoId() {
  if (globalThis.crypto && crypto.randomUUID) return crypto.randomUUID();
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function protegerImagem(img) {
  img.addEventListener("error", () => {
    if (img.dataset.reserva === "1") return;
    img.dataset.reserva = "1";
    img.src = "assets/marca.svg";
    img.alt = "Marca da loja, no lugar da imagem que não abriu.";
  });
}

function textoBusca(produto) {
  return normalizar([produto.nome, produto.categoria, produto.anime, ...(produto.apelidos || [])].join(" "));
}

function ordenar(lista) {
  const copia = [...lista];
  const nome = (a, b) => a.nome.localeCompare(b.nome, "pt-BR");
  copia.sort((a, b) => {
    if (consulta.ordem === "nome-az") return nome(a, b);
    if (consulta.ordem === "nome-za") return nome(b, a);
    if (consulta.ordem === "preco-asc") return a.preco - b.preco || nome(a, b);
    if (consulta.ordem === "preco-desc") return b.preco - a.preco || nome(a, b);
    return 0;
  });
  return copia;
}

function filtrar() {
  const termos = normalizar(consulta.texto).split(/\s+/).filter(Boolean);
  return PRODUTOS.filter((produto) => {
    if (consulta.categoria !== "todas" && produto.categoria !== consulta.categoria) return false;
    if (consulta.universo !== "todos" && produto.anime !== consulta.universo) return false;
    if (consulta.disponibilidade !== "todos" && produto.disponibilidade !== consulta.disponibilidade) return false;
    const base = textoBusca(produto);
    return termos.every((termo) => base.includes(termo));
  });
}

function fraseContagem(qtd) {
  const peca = qtd === 1 ? "peça" : "peças";
  let frase = `${qtd} ${peca}`;
  if (consulta.categoria !== "todas") frase += ` em ${consulta.categoria}`;
  if (consulta.universo !== "todos") frase += ` de ${consulta.universo}`;
  if (consulta.disponibilidade === "estoque") frase += " em estoque";
  if (consulta.disponibilidade === "encomenda") frase += " sob encomenda";
  if (consulta.texto.trim()) frase += ` para “${consulta.texto.trim()}”`;
  return `${frase}.`;
}

function publicarContagem(texto) {
  document.getElementById("contagem-visual").textContent = texto;
  const aplicar = () => { document.getElementById("contagem-ao-vivo").textContent = texto; };
  window.clearTimeout(contagemTimer);
  if (contagemInicial) { contagemInicial = false; aplicar(); return; }
  contagemTimer = window.setTimeout(aplicar, 300);
}

function unidadesNoCarrinho(produtoId, ignorarId) {
  return estado.itens
    .filter((item) => item.origem === "catalogo" && item.produtoId === produtoId && item.id !== ignorarId)
    .reduce((soma, item) => soma + item.quantidade, 0);
}

function avaliarQuantidade(item, desejada) {
  if (!Number.isInteger(desejada) || desejada < 1 || desejada > 20) {
    return { ok: false, mensagem: "Use uma quantidade inteira de 1 a 20." };
  }
  if (item.origem === "catalogo" && item.disponibilidade === "estoque") {
    const produto = PRODUTOS.find((atual) => atual.id === item.produtoId);
    if (produto) {
      const outras = unidadesNoCarrinho(produto.id, item.id);
      if (outras + desejada > produto.estoque) {
        const maximo = produto.estoque - outras;
        return {
          ok: false,
          mensagem: maximo > 0
            ? `Há ${produto.estoque} unidades desta peça. Nesta linha, o máximo agora é ${maximo}.`
            : `Há ${produto.estoque} unidades e o carrinho já chegou nesse limite.`
        };
      }
    }
  }
  return { ok: true, quantidade: desejada };
}

function lerCarrinho() {
  try {
    const bruto = localStorage.getItem(CHAVE_CARRINHO);
    if (!bruto) return [];
    const dados = JSON.parse(bruto);
    if (!dados || dados.versao !== 2 || !Array.isArray(dados.itens)) return [];
    return dados.itens.filter((item) => item && typeof item.nome === "string" && Number.isFinite(item.preco) && Number.isInteger(item.quantidade) && item.quantidade >= 1 && item.quantidade <= 20);
  } catch (erro) {
    estado.memoriaOk = false;
    document.getElementById("aviso-armazenamento").hidden = false;
    return [];
  }
}

function salvarCarrinho() {
  if (!estado.memoriaOk) return;
  try {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify({ versao: 2, itens: estado.itens }));
  } catch (erro) {
    estado.memoriaOk = false;
    document.getElementById("aviso-armazenamento").hidden = false;
  }
}

function atualizarResumo() {
  const quantidade = estado.itens.reduce((s, item) => s + item.quantidade, 0);
  const total = estado.itens.reduce((s, item) => s + centavos(item.preco) * item.quantidade, 0) / 100;
  document.getElementById("contador-carrinho").textContent = String(quantidade);
  const pecas = quantidade === 1 ? "1 peça" : `${quantidade} peças`;
  document.getElementById("resumo-pecas").textContent = pecas;
  document.getElementById("resumo-total").textContent = formatarPreco(total);
  document.getElementById("atalho-carrinho").setAttribute("aria-label", quantidade === 0 ? "Carrinho, vazio" : `Carrinho, ${pecas}, total ${formatarPreco(total)}`);
  document.getElementById("carrinho-vazio").hidden = quantidade > 0;
}

function definirMensagem(texto) { document.getElementById("mensagem-carrinho").textContent = texto; }

function reiniciarLimpeza() {
  estado.confirmandoLimpeza = false;
  document.getElementById("limpar-carrinho").textContent = "Esvaziar carrinho";
  document.getElementById("cancelar-limpeza").hidden = true;
}

function criarLinha(item) {
  const img = el("img", { src: item.imagem || "assets/marca.svg", alt: item.alt || item.nome, width: "92", height: "112" });
  if (item.ajuste === "contain") img.classList.add("contem");
  protegerImagem(img);
  const info = el("div", {},
    el("h3", { text: item.nome }),
    el("p", { class: "meta", text: `${item.anime} · ${item.categoria} · ${item.tamanho}` }),
    el("p", { class: "meta", text: `${item.disponibilidade === "estoque" ? "Em estoque" : "Sob encomenda"} · prazo: ${item.prazo}` })
  );
  const campo = el("input", { id: `qtd-${item.id}`, type: "number", min: "1", max: "20", step: "1", value: String(item.quantidade), "aria-label": `Quantidade de ${item.nome}` });
  const menos = el("button", { type: "button", class: "botao botao-secundario", id: `menos-${item.id}`, text: "−", "aria-label": `Diminuir quantidade de ${item.nome}`, disabled: item.quantidade <= 1 });
  const mais = el("button", { type: "button", class: "botao botao-secundario", id: `mais-${item.id}`, text: "+", "aria-label": `Aumentar quantidade de ${item.nome}`, disabled: !avaliarQuantidade(item, item.quantidade + 1).ok });
  const subtotal = el("p", { class: "subtotal", id: `subtotal-${item.id}`, text: formatarPreco((centavos(item.preco) * item.quantidade) / 100) });
  const remover = el("button", { type: "button", class: "botao botao-secundario botao-perigo", text: "Remover", "aria-label": `Remover ${item.nome} do carrinho` });
  const erro = el("p", { class: "mensagem-erro", id: `erro-linha-${item.id}`, hidden: true });
  function aplicar(desejada) {
    const resultado = avaliarQuantidade(item, desejada);
    if (!resultado.ok) {
      erro.hidden = false;
      erro.textContent = resultado.mensagem;
      campo.setAttribute("aria-invalid", "true");
      return;
    }
    erro.hidden = true;
    erro.textContent = "";
    campo.removeAttribute("aria-invalid");
    item.quantidade = resultado.quantidade;
    campo.value = String(item.quantidade);
    subtotal.textContent = formatarPreco((centavos(item.preco) * item.quantidade) / 100);
    menos.disabled = item.quantidade <= 1;
    mais.disabled = !avaliarQuantidade(item, item.quantidade + 1).ok;
    salvarCarrinho();
    atualizarResumo();
  }
  menos.addEventListener("click", () => aplicar(item.quantidade - 1));
  mais.addEventListener("click", () => aplicar(item.quantidade + 1));
  campo.addEventListener("input", () => aplicar(Number(campo.value)));
  campo.addEventListener("blur", () => {
    campo.value = String(item.quantidade);
    erro.hidden = true;
    campo.removeAttribute("aria-invalid");
  });
  remover.addEventListener("click", () => removerItem(item.id));
  const linha = el("li", { class: "linha" }, img, info, el("div", { class: "qtd-controle" }, menos, campo, mais), subtotal, remover, erro);
  if (item.origem === "encomenda" && item.descricao) {
    linha.append(el("details", {}, el("summary", { text: "Descrição informada" }), el("p", { text: item.descricao })));
  }
  return linha;
}

function renderizarCarrinho() {
  document.getElementById("lista-carrinho").replaceChildren(...estado.itens.map(criarLinha));
  atualizarResumo();
}

function removerItem(id) {
  const indice = estado.itens.findIndex((item) => item.id === id);
  if (indice < 0) return;
  const nome = estado.itens[indice].nome;
  estado.itens.splice(indice, 1);
  reiniciarLimpeza();
  salvarCarrinho();
  renderizarCarrinho();
  const proximo = document.querySelector(".botao-perigo");
  if (proximo) proximo.focus();
  else document.getElementById("carrinho-vazio").focus();
  definirMensagem(`${nome} saiu do carrinho.`);
}

function adicionarDoCatalogo(produto, form) {
  const erro = form.querySelector(".mensagem-erro");
  const ok = form.querySelector(".mensagem-ok");
  erro.hidden = true;
  erro.textContent = "";
  ok.textContent = "";
  const tamanho = form.elements.tamanho.value;
  const qtd = Number(form.elements.quantidade.value);
  if (!tamanho) {
    erro.hidden = false;
    erro.textContent = "Escolha um tamanho.";
    form.elements.tamanho.focus();
    return;
  }
  const existente = estado.itens.find((item) => item.origem === "catalogo" && item.produtoId === produto.id && item.tamanho === tamanho);
  const base = existente ? existente.quantidade : 0;
  const rascunho = existente || { id: "rascunho", origem: "catalogo", produtoId: produto.id, disponibilidade: produto.disponibilidade };
  const resultado = avaliarQuantidade(rascunho, base + qtd);
  if (!resultado.ok || base + qtd > 20) {
    erro.hidden = false;
    erro.textContent = base + qtd > 20 && resultado.ok ? "Cada linha aceita no máximo 20 unidades." : resultado.mensagem;
    return;
  }
  if (existente) existente.quantidade = base + qtd;
  else {
    estado.itens.push({
      id: novoId(), origem: "catalogo", produtoId: produto.id, nome: produto.nome, anime: produto.anime,
      categoria: produto.categoria, tamanho, quantidade: qtd, preco: produto.preco, disponibilidade: produto.disponibilidade,
      prazo: produto.prazo, descricao: produto.resumo, imagem: produto.imagem, alt: produto.alt, ajuste: produto.ajuste || ""
    });
  }
  reiniciarLimpeza();
  salvarCarrinho();
  renderizarCarrinho();
  ok.textContent = existente ? `${produto.nome} agora está com ${base + qtd} no carrinho.` : `${produto.nome} entrou no carrinho.`;
}

function criarCartao(produto) {
  const img = el("img", { src: produto.imagem, alt: produto.alt, width: "640", height: "800" });
  if (produto.ajuste === "contain") img.classList.add("contem");
  if (produto.foco) img.style.objectPosition = produto.foco;
  protegerImagem(img);
  const figura = el("div", { class: "cartao-imagem" }, img,
    el("p", { class: produto.disponibilidade === "estoque" ? "etiqueta etiqueta-estoque" : "etiqueta etiqueta-encomenda", text: produto.disponibilidade === "estoque" ? "Em estoque" : "Sob encomenda" })
  );
  if (produto.ilustracao) figura.append(el("p", { class: "etiqueta etiqueta-desenho", text: "Ilustração" }));
  const select = el("select", { id: `tamanho-${produto.id}`, name: "tamanho" });
  if (produto.tamanhos.length > 1) select.add(new Option("Selecione", ""));
  produto.tamanhos.forEach((tamanho) => select.add(new Option(tamanho, tamanho)));
  const qtd = el("input", { id: `quantidade-${produto.id}`, name: "quantidade", type: "number", min: "1", max: "20", step: "1", value: "1" });
  const form = el("form", { class: "cartao-form" },
    el("label", {}, el("span", { text: "Tamanho" }), select),
    el("label", {}, el("span", { text: "Quantidade" }), qtd),
    el("button", { class: "botao largo", type: "submit", text: "Adicionar ao carrinho" }),
    el("p", { class: "mensagem-erro largo", role: "alert", hidden: true }),
    el("p", { class: "mensagem-ok largo", role: "status" })
  );
  form.addEventListener("submit", (evento) => { evento.preventDefault(); adicionarDoCatalogo(produto, form); });
  const cartao = el("li", {
    class: "cartao",
    "data-nome": produto.nome,
    "data-preco": String(produto.preco),
    "data-disponibilidade": produto.disponibilidade,
    "data-categoria": produto.categoria,
    "data-anime": produto.anime
  },
    figura,
    el("p", { class: "ficha", text: `${produto.anime} · ${produto.categoria}` }),
    el("h3", { text: produto.nome }),
    el("p", { text: produto.resumo }),
    el("p", { class: "preco", text: formatarPreco(produto.preco) }),
    el("p", { class: "meta", text: produto.disponibilidade === "estoque" ? `${produto.estoque} em estoque` : "Feita sob encomenda" }),
    el("p", { class: "meta", text: `Prazo: ${produto.prazo}` }),
    el("p", { class: "credito-mini", text: produto.ilustracao ? "Ilustração da loja · não é foto de fabricante" : `Foto: ${produto.autor} · ${produto.licenca}` }),
    form
  );
  return cartao;
}

function renderizarCatalogo() {
  const lista = ordenar(filtrar());
  const ul = document.getElementById("lista-produtos");
  if (!lista.length) {
    ul.replaceChildren(el("li", { class: "painel vazio-lista" },
      el("p", { text: "Nenhuma peça encontrada com essa busca ou filtro." }),
      el("button", { type: "button", class: "botao botao-secundario", text: "Mostrar todas as peças", onClick: redefinirConsulta })
    ));
  } else ul.replaceChildren(...lista.map(criarCartao));
  publicarContagem(fraseContagem(lista.length));
}

function redefinirConsulta() {
  consulta.texto = "";
  consulta.categoria = "todas";
  consulta.universo = "todos";
  consulta.disponibilidade = "todos";
  consulta.ordem = "preco-desc";
  document.getElementById("busca").value = "";
  document.getElementById("categoria").value = "todas";
  document.getElementById("universo").value = "todos";
  document.querySelector('input[name="disponibilidade"][value="todos"]').checked = true;
  document.getElementById("ordem").value = "preco-desc";
  renderizarCatalogo();
}

function tamanhosDoTipo(tipo) {
  if (tipo === "Cosplay" || tipo === "Roupa") return ["P", "M", "G", "GG"];
  if (tipo === "Acessório") return ["Único"];
  if (tipo === "Action figure" || tipo === "Bonequinho de vinil") return ["10 cm", "15 cm", "Único"];
  if (tipo === "Estátua") return ["40 cm", "70 cm", "150 cm"];
  return [];
}

function atualizarOpcoesTamanho() {
  const tipo = document.getElementById("tipo").value;
  const select = document.getElementById("tamanho");
  const atual = select.value;
  const tamanhos = tamanhosDoTipo(tipo);
  select.replaceChildren();
  if (!tamanhos.length) { select.add(new Option("Escolha o tipo de peça primeiro", "")); return; }
  if (tamanhos.length > 1) select.add(new Option("Selecione", ""));
  tamanhos.forEach((tamanho) => select.add(new Option(tamanho, tamanho)));
  if (tamanhos.includes(atual)) select.value = atual;
  document.getElementById("bloco-medidas").hidden = !(tipo === "Cosplay" || tipo === "Roupa" || tipo === "");
}

function estimar(descricao, tipo) {
  const faixas = {
    Cosplay: [28, 40],
    Roupa: [12, 22],
    "Acessório": [8, 16],
    "Action figure": [15, 25],
    "Estátua": [30, 45],
    "Bonequinho de vinil": [12, 20]
  };
  const base = faixas[tipo] || [15, 25];
  const texto = normalizar(descricao);
  const muitos = texto.includes("todos os personagens") || texto.includes("personagens principais") || texto.includes("elenco principal") || texto.includes("elenco central") || (texto.split("personagem").length - 1) >= 2;
  if (muitos) {
    const min = tipo === "Cosplay" || tipo === "Estátua" ? 45 : 40;
    const max = tipo === "Cosplay" || tipo === "Estátua" ? 70 : 60;
    return { min, max, motivo: "varios", texto: `Prazo estimado: ${min} a ${max} dias úteis. Vários personagens, como o elenco de Naruto, pedem mais tempo de feitura.` };
  }
  if (String(descricao || "").trim().length >= 180) {
    const min = base[0] + 8;
    const max = base[1] + 12;
    return { min, max, motivo: "detalhes", texto: `Prazo estimado: ${min} a ${max} dias úteis. A descrição longa aumenta o prazo.` };
  }
  return { min: base[0], max: base[1], motivo: "simples", texto: `Prazo estimado: ${base[0]} a ${base[1]} dias úteis para este tipo de peça.` };
}

function atualizarEstimativa() {
  const tipo = document.getElementById("tipo").value;
  const descricao = document.getElementById("descricao").value;
  const prazoEl = document.getElementById("prazo-visual");
  const precoEl = document.getElementById("preco-visual");
  if (!tipo) {
    prazoEl.textContent = "Escolha o tipo de peça para ver o prazo.";
    precoEl.textContent = "O valor por peça aparece ao escolher o tipo.";
    estado.faixaPrazo = "";
    return;
  }
  const estimativa = estimar(descricao, tipo);
  const precoTexto = `${formatarPreco(PRECO_ENCOMENDA[tipo])} por peça.`;
  prazoEl.textContent = estimativa.texto;
  precoEl.textContent = precoTexto;
  const chave = `${tipo}-${estimativa.motivo}-${estimativa.min}`;
  if (chave !== estado.faixaPrazo) {
    estado.faixaPrazo = chave;
    document.getElementById("prazo-ao-vivo").textContent = `${estimativa.texto} ${precoTexto}`;
  }
}

function limparErros() {
  document.getElementById("resumo-erros").hidden = true;
  document.getElementById("lista-erros").replaceChildren();
  CAMPOS.forEach((nome) => {
    const campo = document.getElementById(nome);
    const erro = document.getElementById(`erro-${nome}`);
    if (!campo || !erro) return;
    campo.removeAttribute("aria-invalid");
    erro.hidden = true;
    erro.textContent = "";
  });
}

function mostrarErros(erros) {
  limparErros();
  const nomes = CAMPOS.filter((nome) => erros[nome]);
  if (!nomes.length) return;
  const lista = document.getElementById("lista-erros");
  nomes.forEach((nome) => {
    const campo = document.getElementById(nome);
    const erro = document.getElementById(`erro-${nome}`);
    erro.hidden = false;
    erro.textContent = erros[nome];
    campo.setAttribute("aria-invalid", "true");
    const dica = document.getElementById(`dica-${nome}`);
    campo.setAttribute("aria-describedby", dica ? `${dica.id} erro-${nome}` : `erro-${nome}`);
    lista.append(el("li", {}, el("a", { href: `#${nome}`, text: erros[nome] })));
  });
  document.getElementById("resumo-erros").hidden = false;
}

function validarEncomenda() {
  const tipo = document.getElementById("tipo").value;
  const dados = {
    anime: document.getElementById("anime").value.trim().replace(/\s+/g, " "),
    tipo,
    tamanho: document.getElementById("tamanho").value,
    quantidade: Number(document.getElementById("quantidade").value),
    medidas: document.getElementById("medidas").value.trim(),
    descricao: document.getElementById("descricao").value.trim()
  };
  const erros = {};
  if (dados.anime.length < 2) erros.anime = "Informe o anime com pelo menos 2 caracteres.";
  if (!PRECO_ENCOMENDA[dados.tipo]) erros.tipo = "Escolha o tipo de peça.";
  if (!tamanhosDoTipo(dados.tipo).includes(dados.tamanho)) erros.tamanho = "Escolha o tamanho ou a escala.";
  if (!Number.isInteger(dados.quantidade) || dados.quantidade < 1 || dados.quantidade > 20) erros.quantidade = "Informe uma quantidade inteira de 1 a 20.";
  if ((tipo === "Cosplay" || tipo === "Roupa") && dados.medidas.length > 0 && dados.medidas.length < 4) erros.medidas = "Se for anotar medidas, use pelo menos altura ou uma circunferência.";
  if (dados.descricao.length < 20) erros.descricao = "Descreva os personagens e os detalhes com pelo menos 20 caracteres.";
  return { dados, erros };
}

function registrarEncomenda(evento) {
  evento.preventDefault();
  const { dados, erros } = validarEncomenda();
  if (Object.keys(erros).length) {
    mostrarErros(erros);
    document.getElementById("confirmacao").hidden = true;
    document.getElementById("resumo-erros").focus();
    return;
  }
  limparErros();
  const estimativa = estimar(dados.descricao, dados.tipo);
  const detalheMedidas = dados.medidas ? ` Medidas: ${dados.medidas}.` : "";
  const item = {
    id: novoId(),
    origem: "encomenda",
    produtoId: null,
    nome: `Encomenda de ${dados.tipo.toLocaleLowerCase("pt-BR")} — ${dados.anime}`,
    anime: dados.anime,
    categoria: "Encomenda personalizada",
    tamanho: dados.tamanho,
    quantidade: dados.quantidade,
    preco: PRECO_ENCOMENDA[dados.tipo],
    disponibilidade: "encomenda",
    prazo: `${estimativa.min} a ${estimativa.max} dias úteis`,
    descricao: `${dados.descricao}${detalheMedidas}`,
    imagem: "assets/marca.svg",
    alt: "Encomenda personalizada, sem foto de produto.",
    ajuste: "contain"
  };
  estado.itens.push(item);
  reiniciarLimpeza();
  salvarCarrinho();
  renderizarCarrinho();
  document.getElementById("confirmacao-nome").textContent = item.nome;
  document.getElementById("confirmacao-prazo").textContent = `${estimativa.min} a ${estimativa.max} dias úteis`;
  const confirmacao = document.getElementById("confirmacao");
  confirmacao.hidden = false;
  confirmacao.focus();
}

function usarExemplo() {
  document.getElementById("anime").value = "Naruto";
  document.getElementById("tipo").value = "Cosplay";
  atualizarOpcoesTamanho();
  document.getElementById("tamanho").value = "M";
  document.getElementById("quantidade").value = "1";
  document.getElementById("medidas").value = "1,65 m, busto 86, cintura 68, quadril 92";
  document.getElementById("descricao").value = "Quero um cosplay de Naruto com todos os personagens principais: o elenco central, cada traje descrito à parte, fundo de convenção e detalhes em laranja, azul e amarelo.";
  limparErros();
  document.getElementById("confirmacao").hidden = true;
  estado.faixaPrazo = "";
  atualizarEstimativa();
  document.getElementById("descricao").focus();
}

function limparFormulario() {
  document.getElementById("form-encomenda").reset();
  atualizarOpcoesTamanho();
  limparErros();
  document.getElementById("confirmacao").hidden = true;
  estado.faixaPrazo = "";
  atualizarEstimativa();
  document.getElementById("anime").focus();
}

function montarTextoPedido(data = new Date()) {
  const quebra = "\r\n";
  const linhas = [
    "STAR GALAXY ANIME",
    "Pedido demonstrativo — simulação local",
    "Este arquivo não é uma compra, não reserva produção e não foi enviado a ninguém.",
    "Não contém dados pessoais nem dados de pagamento.",
    "",
    `Gerado em: ${formatarData(data)} (horário deste computador)`,
    "Moeda: BRL (real). Valores de exemplo.",
    "",
    "Itens"
  ];
  estado.itens.forEach((item, indice) => {
    linhas.push(`${indice + 1}. ${item.nome}`);
    linhas.push(`   Anime: ${item.anime}`);
    linhas.push(`   Categoria: ${item.categoria}`);
    linhas.push(`   Tamanho: ${item.tamanho}`);
    linhas.push(`   Quantidade: ${item.quantidade}`);
    linhas.push(`   Preço unitário: ${formatarPreco(item.preco)}`);
    linhas.push(`   Subtotal: ${formatarPreco((centavos(item.preco) * item.quantidade) / 100)}`);
    linhas.push(`   Prazo: ${item.prazo}`);
    if (item.descricao) linhas.push(`   Descrição: ${item.descricao}`);
    linhas.push("");
  });
  const pecas = estado.itens.reduce((s, item) => s + item.quantidade, 0);
  const total = estado.itens.reduce((s, item) => s + centavos(item.preco) * item.quantidade, 0) / 100;
  linhas.push(`Quantidade de peças: ${pecas}`);
  linhas.push(`Total: ${formatarPreco(total)}`);
  linhas.push("");
  linhas.push("Não há pagamento, frete nem fabricação.");
  linhas.push("O programa em C foi entregue separadamente e não está integrado a este site.");
  return `${linhas.join(quebra)}${quebra}`;
}

function exportarPedido() {
  if (!estado.itens.length) { definirMensagem("O carrinho está vazio. Não há pedido para exportar."); return; }
  const blob = new Blob([`\uFEFF${montarTextoPedido()}`], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = el("a", { href: url, download: "pedido-demonstrativo-star-galaxy-anime.txt" });
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2500);
  definirMensagem("Arquivo gerado neste computador. Nada foi enviado.");
}

function esvaziarCarrinho() {
  if (!estado.itens.length) { definirMensagem("O carrinho já está vazio."); return; }
  if (!estado.confirmandoLimpeza) {
    estado.confirmandoLimpeza = true;
    document.getElementById("limpar-carrinho").textContent = "Confirmar esvaziamento";
    document.getElementById("cancelar-limpeza").hidden = false;
    definirMensagem("Isso apaga o carrinho só neste navegador. Confirme ou cancele.");
    return;
  }
  estado.itens = [];
  reiniciarLimpeza();
  salvarCarrinho();
  renderizarCarrinho();
  definirMensagem("Carrinho esvaziado neste navegador.");
}

function preencherFiltros() {
  const universo = document.getElementById("universo");
  const nomes = [...new Set(PRODUTOS.map((produto) => produto.anime))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  nomes.forEach((nome) => universo.append(new Option(nome, nome)));
  const lista = document.getElementById("lista-animes");
  nomes.forEach((nome) => lista.append(el("option", { value: nome })));
}

function configurarMenu() {
  const botao = document.getElementById("abrir-menu");
  const menu = document.getElementById("menu-principal");
  const definir = (aberto) => {
    menu.classList.toggle("aberto", aberto);
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
  };
  botao.addEventListener("click", () => definir(botao.getAttribute("aria-expanded") !== "true"));
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => definir(false)));
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && menu.classList.contains("aberto")) { definir(false); botao.focus(); }
  });
}

function configurarSecaoAtual() {
  const links = new Map([...document.querySelectorAll("#menu-principal a")].map((link) => [link.getAttribute("href").slice(1), link]));
  const observer = new IntersectionObserver((entradas) => {
    const visivel = entradas.filter((entrada) => entrada.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visivel) return;
    links.forEach((link, chave) => {
      if (chave === visivel.target.id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.4] });
  document.querySelectorAll("main section").forEach((secao) => observer.observe(secao));
}

function iniciar() {
  estado.itens = lerCarrinho();
  preencherFiltros();
  configurarMenu();
  configurarSecaoAtual();
  document.getElementById("form-busca").addEventListener("submit", (evento) => evento.preventDefault());
  document.getElementById("busca").addEventListener("input", (evento) => { consulta.texto = evento.target.value; renderizarCatalogo(); });
  document.getElementById("categoria").addEventListener("change", (evento) => { consulta.categoria = evento.target.value; renderizarCatalogo(); });
  document.getElementById("universo").addEventListener("change", (evento) => { consulta.universo = evento.target.value; renderizarCatalogo(); });
  document.querySelectorAll('input[name="disponibilidade"]').forEach((radio) => {
    radio.addEventListener("change", () => { if (radio.checked) { consulta.disponibilidade = radio.value; renderizarCatalogo(); } });
  });
  document.getElementById("ordem").addEventListener("change", (evento) => { consulta.ordem = evento.target.value; renderizarCatalogo(); });
  document.getElementById("redefinir").addEventListener("click", redefinirConsulta);
  document.querySelectorAll("[data-categoria]").forEach((botao) => {
    botao.addEventListener("click", () => {
      consulta.categoria = botao.dataset.categoria;
      document.getElementById("categoria").value = botao.dataset.categoria;
      renderizarCatalogo();
      document.getElementById("catalogo").scrollIntoView();
    });
  });
  document.getElementById("form-encomenda").addEventListener("submit", registrarEncomenda);
  document.getElementById("tipo").addEventListener("change", () => { atualizarOpcoesTamanho(); atualizarEstimativa(); });
  CAMPOS.forEach((nome) => {
    const campo = document.getElementById(nome);
    if (!campo) return;
    campo.addEventListener("input", () => {
      const erro = document.getElementById(`erro-${nome}`);
      if (erro) { erro.hidden = true; erro.textContent = ""; }
      campo.removeAttribute("aria-invalid");
      document.getElementById("confirmacao").hidden = true;
      atualizarEstimativa();
    });
  });
  document.getElementById("usar-exemplo").addEventListener("click", usarExemplo);
  document.getElementById("limpar-formulario").addEventListener("click", limparFormulario);
  document.getElementById("exportar-pedido").addEventListener("click", exportarPedido);
  document.getElementById("limpar-carrinho").addEventListener("click", esvaziarCarrinho);
  document.getElementById("cancelar-limpeza").addEventListener("click", () => { reiniciarLimpeza(); definirMensagem("Esvaziamento cancelado."); });
  atualizarOpcoesTamanho();
  atualizarEstimativa();
  renderizarCatalogo();
  renderizarCarrinho();
}

iniciar();
window.StarGalaxyAnime = { produtos: PRODUTOS, lerItens() { return estado.itens.map((item) => ({ ...item })); } };
