/* Adicione novos itens nas listas abaixo (veja o README). tipo: "Guia", "Cartilha", "Documento", "Publicação", "PDF"... */
var MATERIAIS=[
  /* { nome:"", instituicao:"", descricao:"", tipo:"Cartilha", url:"https://..." } */
];
var FONTES=[
{nome:"ONU – Objetivos de Desenvolvimento Sustentável",instituicao:"ONU Brasil",descricao:"Página sobre o ODS 12, Consumo e Produção Responsáveis, com metas e contexto.",tipo:"Portal institucional",url:"https://brasil.un.org/pt-br/sdgs/12"},
{nome:"Cidadania Financeira",instituicao:"Banco Central do Brasil",descricao:"Conteúdos do Banco Central para quem quer entender melhor o sistema financeiro e organizar suas finanças.",tipo:"Portal institucional",url:"https://www.bcb.gov.br/cidadaniafinanceira"},
{nome:"Educação Financeira",instituicao:"CAIXA",descricao:"Seção da CAIXA com orientações sobre educação financeira e itens essenciais para o dia a dia.",tipo:"Portal institucional",url:"https://www.caixa.gov.br/educacao-financeira/voce/itens-essenciais/Paginas/default.aspx"},
{nome:"Instituto Akatu",instituicao:"Instituto Akatu",descricao:"Organização dedicada a mobilizar pessoas e empresas para o consumo consciente.",tipo:"Organização",url:"https://akatu.org.br/"},
{nome:"Edukatu",instituicao:"Instituto Akatu",descricao:"Plataforma de educação para o consumo consciente voltada a práticas educativas.",tipo:"Plataforma educacional",url:"https://edukatu.org.br/"}
];
(function(){
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e;}
  function card(m){var c=el("article","card"),a=el("a","btn","Acessar");a.href=m.url;a.target="_blank";a.rel="noopener noreferrer";a.setAttribute("aria-label","Acessar "+m.nome+" (abre em nova aba)");
    c.append(el("span","tag",m.tipo),el("h3",null,m.nome),el("p",null,m.instituicao),el("p",null,m.descricao),a);return c;}
  function fill(id,list){var box=document.getElementById(id);box.replaceChildren.apply(box,list.map(card));}
  fill("fontes",FONTES);fill("materiais",MATERIAIS);
  document.getElementById("vazio-materiais").hidden=MATERIAIS.length>0;
})();
