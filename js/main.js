(function(){
  var page=document.body.dataset.page;
  var links=[["index.html","Início","inicio"],["videos.html","Vídeos educativos","videos"],["glossario.html","Glossário","glossario"],["materiais.html","Materiais e links","materiais"]];
  var nav=links.map(function(l){return '<li><a href="'+l[0]+'"'+(l[2]===page?' aria-current="page"':'')+'>'+l[1]+'</a></li>';}).join("");
  var h=document.getElementById("site-header");
  if(h){h.className="site-header";h.innerHTML='<div class="wrap bar"><a class="brand" href="index.html"><i aria-hidden="true"></i>Conecta Sustentável</a><button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button><nav class="nav" id="menu" aria-label="Navegação principal"><ul>'+nav+'</ul></nav></div>';
    var b=h.querySelector(".menu-btn"),m=h.querySelector(".nav");
    b.addEventListener("click",function(){var o=m.classList.toggle("open");b.setAttribute("aria-expanded",o);});
    m.addEventListener("click",function(e){if(e.target.tagName==="A"){m.classList.remove("open");b.setAttribute("aria-expanded","false");}});}
  var f=document.getElementById("site-footer");
  if(f){f.className="site-footer";f.innerHTML='<div class="wrap"><div class="fgrid"><div><a class="brand" href="index.html"><i aria-hidden="true"></i>Conecta Sustentável</a><p style="margin-top:1rem">Plataforma educativa sobre consumo consciente, economia doméstica e sustentabilidade para estudantes da UNICAP.</p><div class="ods"><span>ODS 4 · Educação de Qualidade</span><span>ODS 12 · Consumo e Produção Responsáveis</span></div></div><div><h2>Navegação</h2><ul>'+links.map(function(l){return '<li><a href="'+l[0]+'">'+l[1]+'</a></li>';}).join("")+'</ul></div><div><h2>Identificação acadêmica</h2><p>Projeto de Extensão Universitária<br>Curso: Engenharia de Software<br>Instituição: Cruzeiro do Sul Virtual<br>Aluno: Hugo Borba de Andrade França<br>Comunidade parceira: UNICAP – Recife/PE</p></div></div><p class="copy">Eixo extensionista: Economia Sustentável. Projeto sem fins lucrativos, de caráter educativo.</p></div>';}
  var boxes=document.querySelectorAll("#check input"),msg=document.getElementById("check-msg");
  if(boxes.length&&msg){var t=["Marque o que já respondeu.","Bom começo. Continue.","Quase lá: falta pouco.","Compra pensada! Agora é decidir com calma."];
    boxes.forEach(function(c){c.addEventListener("change",function(){var n=document.querySelectorAll("#check input:checked").length;msg.textContent=t[Math.min(n,3)];});});}
})();
