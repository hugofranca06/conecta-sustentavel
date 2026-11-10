/* Para adicionar um vídeo, inclua um objeto na lista abaixo (veja o README). */
var CATEGORIAS=["Consumo consciente","Planejamento financeiro","Economia doméstica","Redução de desperdícios","Sustentabilidade no cotidiano"];
var VIDEOS=[
  /* { titulo:"Título do vídeo", descricao:"Resumo breve.", categoria:"Consumo consciente", url:"https://www.youtube.com/watch?v=XXXXXXXXXXX" } */
];
(function(){
  var lista=document.getElementById("lista"),vazio=document.getElementById("vazio"),filtros=document.getElementById("filtros"),cont=document.getElementById("contagem"),ativa="Todas";
  function idDe(u){var m=String(u||"").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);return m?m[1]:null;}
  var itens=VIDEOS.filter(function(v){return idDe(v.url);});
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e;}
  function card(v){
    var id=idDe(v.url),c=el("article","card"),th=el("div","thumb");
    var img=el("img");img.src="https://i.ytimg.com/vi/"+id+"/hqdefault.jpg";img.alt="Miniatura do vídeo: "+v.titulo;img.loading="lazy";th.appendChild(img);
    var b=el("button","btn","Assistir");b.type="button";b.setAttribute("aria-label","Assistir: "+v.titulo);
    b.addEventListener("click",function(){var f=el("iframe");f.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1";f.title=v.titulo;f.allow="accelerometer; autoplay; encrypted-media; picture-in-picture";f.allowFullscreen=true;th.replaceChildren(f);b.remove();});
    c.append(th,el("span","tag",v.categoria),el("h3",null,v.titulo),el("p",null,v.descricao),b);return c;}
  function render(){
    var l=itens.filter(function(v){return ativa==="Todas"||v.categoria===ativa;});
    lista.replaceChildren.apply(lista,l.map(card));
    vazio.hidden=l.length>0;cont.textContent=itens.length?l.length+" vídeo(s) encontrado(s)":"";
    if(!l.length){vazio.replaceChildren();vazio.append(el("strong",null,itens.length?"Nenhum vídeo nesta categoria":"Estamos organizando os conteúdos"),el("p",null,itens.length?"Escolha outra categoria para ver mais vídeos.":"Os vídeos educativos serão publicados aqui em breve. Enquanto isso, explore o glossário e os materiais."));}
  }
  ["Todas"].concat(CATEGORIAS).forEach(function(n){var b=el("button","chip",n);b.type="button";b.setAttribute("aria-pressed",n===ativa);
    b.addEventListener("click",function(){ativa=n;filtros.querySelectorAll(".chip").forEach(function(x){x.setAttribute("aria-pressed",x===b);});render();});filtros.appendChild(b);});
  render();
})();
