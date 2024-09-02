var img_eu = document.getElementById("img_eu")
var texto_1 = document.getElementById("textosobremim");  /* criar variável para texto, para selecionar quando criamos uma id */

var botao_1 = document.getElementById("1"); /* criar variavel para botão quando criamos uma id também, e usamos a função a partir do botão. Adicionar evento na função para saber quando o usuário clica ou passa pelo botão*/
botao_1.addEventListener("click", () => [
    texto_1.innerHTML = " <strong>Estudante de Biologia e Análise e Desenvolvimento de Sistemas</strong>. Sou Curitibano, tenho 25 anos e possuo carreira acadêmica desenvolvida na área de biotecnologia, com ampla experiência em cultivo de microrganismos. Já participei de projetos que divulgam ciência para a sociedade (Ciência para Todos), desenvolvendo ótimo trabalho em equipe com grande foco na interdisciplinaridade além de participar de congressos internacionais para divulgação científica. <strong> Gosto muito de ficção científica, botânica e jogos eletrônicos</strong>. Gosto bastante de áreas da programação relacionadas ao back-end, tendo grande conhecimento em Python. Atualmente estou me especializando em HTML e banco de dados relacionais, utilizando a linguagem MySQL.  ",
    img_eu.style.backgroundImage = `url('Imagens/eu_atualizado.jpeg')`, 
    img_eu.style.backgroundSize = 'cover'
] )
texto_1.innerText = " Olá, eu sou o Kauê Melenek da Costa Oliveira"



var botao_2 = document.getElementById("2"); /* criar variavel para botão 2*/
botao_2.addEventListener("click", () => [
    document.getElementById("textosobremim").innerHTML = "<div class = 'coluna'><p>Tecnólogo em Análise e Desenvolvimento de Sistemas (2024 - 2026) - UNINTER </p> <p>Bacharel em Ciências Biológicas (2020 - 2025) - UFPR </p><p>Técnico em Administração (2015) - SENAI </p> </div>",
    img_eu.style.backgroundImage = `url('Imagens/faculdade.png')`,
    img_eu.style.backgroundSize = '120%'
] )

var botao_3 = document.getElementById("3"); /* criar variavel para botão 3*/
botao_3.addEventListener("click", () => [
    document.getElementById("textosobremim").innerHTML = "<ul class = 'coluna'><li><strong> NPDEAS (Núcleo de Pesquisa e Desenvolvimento de Energia Autossustentável).</strong> 2021 -2024. <br><br> </li> <li> Funções: Cultivo de microalgas em pequena e grande escala; Realização de análises químicas; Auxílio em aplicações biotecnológicas de microalgas; Assistência na produção de biorreatores de nível industrial. Produção de artigos científicos; Utilização de pacote office e de softwares para aperfeiçoamento de processos relacionados a biorrefinaria de microalgas. <br> <br> </li> <li> <strong>LAGEAMB (Laboratório de Geoprocessamento e Estudos Ambientais). </strong> 2024 - 2025 <br><br> Funções: Atuação em projetos vinculados ao programa TED/INCRA; monitoramento e sistematização de indicadores de extensão; Gestão de conteúdo dos canais de comunicação internos, trabalho com ferramentas de gestão de projetos.",
    img_eu.style.backgroundImage = `url('Imagens/lageamb.png')`,
    img_eu.style.backgroundSize = 'cover'
])

var botao_4 = document.getElementById("4"); /* criar variavel para botão 4*/
botao_4.addEventListener("click", () => [
    document.getElementById("textosobremim").innerHTML = "<ul> <li> <a href='https://github.com/kauemelenek/Projetos_Python' target= '_blank' style='color:black; border: 1px solid darkgreen;' > Projetos relacionados a Python </a> </li></ul> <br><br> <ul> <li>  <a href='https://github.com/kauemelenek/Banco-de-dados' target= '_blank' style='color:black; border: 1px solid darkgreen;'> Projetos relacionados a Banco de Dados </a> </li> </ul> ",
    img_eu.style.backgroundImage = `url('Imagens/projetos.png')`,
    img_eu.style.backgroundSize = '60%'
])


var botao_5 = document.getElementById("5"); /* criar variavel para botão 5*/
botao_5.addEventListener("click", () => [
    document.getElementById("textosobremim").innerHTML = "<div class='contatomain'> <ul class = 'contato'><li> <a href ='https://www.linkedin.com/in/kauê-melenek-261496164' target='_blank' style='color:black; border: 1px solid darkgreen;'> <strong> Linkedin </strong> </a> </li> <li> <a href ='https://github.com/kauemelenek' target='_blank' style='color:black; border: 1px solid darkgreen;'> <strong> GitHub </strong> </a> </li> </ul><br> <form action= 'mailto:kauemelenek.99@gmail.com' method='post' enctype='text/plain'> <strong> Nome: </strong> <input type='text' name='nome'> <br><br> <strong> E-mail: </strong> <input type='text' name='email'> <br><br> <strong> Mensagem: </strong><br> <textarea type='text' name='mensagem' style= 'min-height='300px' rows='10' cols='75'></textarea><br> <input type='submit' value='Enviar'> </form> </div>" ,
    img_eu.style.backgroundImage = `url('Imagens/contatos.png')`,
    img_eu.style.backgroundSize = '100%'
])