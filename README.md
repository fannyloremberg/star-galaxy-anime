# Star Galaxy Anime

Vitrine acadêmica de Stefani Cezar Vilela (Fanny), RGM 50015818.

Loja fictícia de cultura anime: cosplay, bonequinhos de vinil, action figures, estátuas, roupas e acessórios. Preços, estoque e prazos são exemplos. Não é uma loja real e não vende produto oficial.

O programa em C foi entregue separadamente. Este site não substitui esse programa e não está integrado a ele.

## Abrir

1. Instale a extensão **Live Server** no VS Code.
2. Abra esta pasta.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Não precisa de build nem de internet para a página funcionar. As fotos e as fontes já estão na pasta `assets`.

Também dá para servir assim:

```bash
python3 -m http.server 8741
```

Abra `http://127.0.0.1:8741` neste computador. Não publique isso como site.

## Arquivos

| Arquivo | Função |
| --- | --- |
| `index.html` | Estrutura da loja |
| `styles.css` | Visual |
| `app.js` | Catálogo, busca, filtros, encomenda, carrinho e TXT |
| `assets/estudio` | Ilustrações de produto em fundo limpo |
| `assets/fontes` | Fraunces e Outfit, licença SIL Open Font License |

No console, `StarGalaxyAnime.produtos` lista o catálogo. O carrinho fica na chave `star-galaxy-anime-carrinho-v2` do `localStorage`.

## O que dá para fazer

- Buscar por nome, categoria ou anime, sem diferenciar maiúsculas nem acentos.
- Filtrar por categoria, universo e disponibilidade (estoque ou encomenda).
- Ordenar por nome (A–Z e Z–A) e por preço (menor e maior).
- Montar o carrinho, mudar quantidade, remover e baixar um TXT sem dados pessoais.
- Descrever uma encomenda de cosplay, figure, estátua, bonequinho, roupa ou acessório, com medidas quando a peça é de vestir.

A confirmação fica só neste navegador. Nada é enviado e não há orçamento real.

## Limites

- Simulação local. Sem pagamento, login, frete ou cadastro.
- Preços e estoque são exemplos.
- A sala Funko Pop usa esse nome como categoria. Os bonequinhos são ilustrações da Star Galaxy Anime, não peças genuínas da fabricante.
- As imagens de produto em `assets/estudio` são ilustrações originais desta demonstração, com fundo limpo. Não são fotografias de fabricante, de lojista nem de pessoas em evento. Não há licença livre de uma foto oficial correspondente: o crédito não concede direito sobre personagem ou marca.
- O programa em C continua separado.

## Créditos das imagens

Origem: ilustrações criadas para a vitrine Star Galaxy Anime e guardadas em `assets/estudio`. Autor: produção desta demonstração acadêmica. Direitos: uso ilustrativo neste trabalho. Não são fotografias reais de produto e não estão em domínio público nem em Creative Commons.

Não foi encontrada, com reuso permitido, a fotografia oficial exata de cada item já cadastrado. Por isso nenhum personagem foi trocado para caber uma foto de terceiro.

Fraunces e Outfit: [SIL Open Font License](https://scripts.sil.org/OFL), arquivos em `assets/fontes`.
