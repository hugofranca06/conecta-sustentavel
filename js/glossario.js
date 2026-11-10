/* Para adicionar um termo, inclua um objeto na lista abaixo (veja o README). */
var TERMOS=[
{nome:"Consumo consciente",categoria:"Consumo",definicao:"Escolher o que comprar pensando em necessidade, preço, qualidade e impactos.",explicacao:"É comprar sabendo por que está comprando. Em vez de agir no automático, você avalia o que realmente precisa e o que sua escolha causa nas pessoas e no ambiente.",exemplo:"Antes de trocar de celular, avaliar se o atual ainda atende e se uma bateria nova resolve."},
{nome:"Consumo sustentável",categoria:"Meio ambiente",definicao:"Consumir de modo que as necessidades de hoje sejam atendidas sem esgotar recursos para o futuro.",explicacao:"Dá preferência a produtos duráveis, de baixo impacto e a práticas como reutilizar, consertar e compartilhar.",exemplo:"Levar a própria sacola e preferir produtos com menos embalagem."},
{nome:"Economia doméstica",categoria:"Finanças",definicao:"Administração dos gastos e recursos de uma casa.",explicacao:"Envolve organizar contas, compras, alimentação, água e energia para que o dinheiro dure o mês todo.",exemplo:"Dividir com colegas de moradia a compra de itens básicos em maior quantidade."},
{nome:"Planejamento financeiro",categoria:"Finanças",definicao:"Organizar a vida financeira para alcançar objetivos com segurança.",explicacao:"Você define metas, estima ganhos e gastos e decide quanto guardar. Ajuda a evitar dívidas e imprevistos.",exemplo:"Separar um valor mensal para uma reserva de emergência."},
{nome:"Orçamento pessoal",categoria:"Finanças",definicao:"Registro de quanto entra e quanto sai de dinheiro em um período.",explicacao:"É a base do planejamento: lista de receitas e despesas, fixas e variáveis, que mostra para onde o dinheiro vai.",exemplo:"Anotar em uma planilha ou caderno todos os gastos do mês e comparar com a renda."},
{nome:"Consumo por impulso",categoria:"Consumo",definicao:"Compra feita sem planejamento, movida pela emoção do momento.",explicacao:"Promoções, anúncios e redes sociais estimulam a vontade imediata. Muitas dessas compras acabam sem uso.",exemplo:"Comprar algo só porque estava em oferta, sem estar na lista."},
{nome:"Reutilização",categoria:"Meio ambiente",definicao:"Dar novo uso a um objeto sem transformá-lo industrialmente.",explicacao:"Estende a vida útil das coisas e evita descarte. Também economiza dinheiro.",exemplo:"Usar potes de vidro como porta-mantimentos."},
{nome:"Reciclagem",categoria:"Meio ambiente",definicao:"Transformar materiais descartados em novos produtos.",explicacao:"Os resíduos são separados, coletados e processados pela indústria. É importante, mas vem depois de reduzir e reutilizar.",exemplo:"Separar papel, plástico, vidro e metal para a coleta seletiva."},
{nome:"Economia circular",categoria:"Meio ambiente",definicao:"Modelo que busca manter produtos e materiais em uso pelo maior tempo possível.",explicacao:"Substitui a lógica de extrair, produzir e descartar por ciclos de reparo, reuso e reaproveitamento.",exemplo:"Uma loja que conserta e revende eletrônicos usados."},
{nome:"Desperdício",categoria:"Consumo",definicao:"Perda de alimentos, água, energia ou materiais que poderiam ser aproveitados.",explicacao:"Acontece em casa, no comércio e na produção. Reduzi-lo diminui gastos e impactos ambientais.",exemplo:"Comprar comida demais e deixar estragar na geladeira."},
{nome:"Pegada ecológica",categoria:"Meio ambiente",definicao:"Medida da pressão que o estilo de vida de uma pessoa ou grupo exerce sobre a natureza.",explicacao:"Estima a área necessária para produzir o que se consome e absorver os resíduos gerados.",exemplo:"Trocar parte dos deslocamentos de carro por transporte coletivo ou bicicleta."},
{nome:"Durabilidade",categoria:"Consumo",definicao:"Capacidade de um produto manter o bom funcionamento por muito tempo.",explicacao:"Produtos duráveis podem custar mais no início, mas costumam compensar no longo prazo.",exemplo:"Escolher uma mochila resistente em vez de trocar uma barata todo semestre."},
{nome:"Obsolescência programada",categoria:"Consumo",definicao:"Estratégia de projetar produtos para durar menos ou parecerem ultrapassados.",explicacao:"Estimula novas compras com peças que falham, falta de conserto ou lançamentos constantes.",exemplo:"Eletrônico cuja bateria não pode ser trocada."},
{nome:"Desenvolvimento sustentável",categoria:"Meio ambiente",definicao:"Desenvolvimento que atende às necessidades atuais sem comprometer as futuras gerações.",explicacao:"Une crescimento econômico, justiça social e proteção ambiental. A ONU o organiza nos 17 Objetivos de Desenvolvimento Sustentável.",exemplo:"Projetos que geram renda e protegem o meio ambiente."}
];
(function(){
  var busca=document.getElementById("busca"),lista=document.getElementById("lista"),vazio=document.getElementById("vazio"),cont=document.getElementById("contagem"),catsEl=document.getElementById("cats"),letEl=document.getElementById("letras"),cat="Todas",letra="";
  function norm(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();}
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e;}
  TERMOS.sort(function(a,b){return a.nome.localeCompare(b.nome,"pt-BR");});
  var cats=["Todas"].concat(Array.from(new Set(TERMOS.map(function(t){return t.categoria;}))).sort());
  var letras=["Todas"].concat(Array.from(new Set(TERMOS.map(function(t){return t.nome[0].toUpperCase();}))).sort());
  function build(box,vals,onclick){vals.forEach(function(v){var b=el("button","chip",v);b.type="button";b.dataset.v=v;b.addEventListener("click",function(){onclick(v);sync();render();});box.appendChild(b);});}
  function sync(){catsEl.querySelectorAll(".chip").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.v===cat);});
    letEl.querySelectorAll(".chip").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.v===(letra||"Todas"));});}
  build(catsEl,cats,function(v){cat=v;});build(letEl,letras,function(v){letra=v==="Todas"?"":v;});
  function card(t){var c=el("article","card term");c.append(el("span","tag",t.categoria),el("h3",null,t.nome),el("p","def",t.definicao),el("p",null,t.explicacao));
    if(t.exemplo)c.appendChild(el("p","ex","Exemplo: "+t.exemplo));return c;}
  function render(){var q=norm(busca.value.trim());
    var r=TERMOS.filter(function(t){return (cat==="Todas"||t.categoria===cat)&&(!letra||t.nome[0].toUpperCase()===letra)&&(!q||norm(t.nome+" "+t.definicao+" "+t.explicacao).indexOf(q)>-1);});
    lista.replaceChildren.apply(lista,r.map(card));vazio.hidden=r.length>0;cont.textContent=r.length+" de "+TERMOS.length+" termos";}
  busca.addEventListener("input",render);
  document.getElementById("limpar").addEventListener("click",function(){busca.value="";cat="Todas";letra="";sync();render();});
  sync();render();
})();
