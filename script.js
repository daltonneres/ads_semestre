import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
getFirestore,
collection,
addDoc,
getDocs,
query,
where
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3_iRr8uLISTv2F2ad8A2duxKKP9E9dSg",
  authDomain: "quiz-geracoes-computador-87f1a.firebaseapp.com",
  projectId: "quiz-geracoes-computador-87f1a",
  storageBucket: "quiz-geracoes-computador-87f1a.firebasestorage.app",
  messagingSenderId: "987776130405",
  appId: "1:987776130405:web:716bd0e77d33c63dd5d58c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const perguntas = {

1: [
  { pergunta: "O Projeto Japonês da década de 1980 marcou oficialmente o início da 5ª geração de computadores.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "A principal mudança conceitual da 5ª geração foi:", tipo: "multipla", alternativas: ["Transformar o computador em um sistema capaz de aprender e decidir", "Aumentar o tamanho das máquinas", "Eliminar sistemas operacionais", "Voltar ao processamento mecânico"], correta: "Transformar o computador em um sistema capaz de aprender e decidir" },
  { pergunta: "A computação ubíqua significa que os sistemas estão conectados e disponíveis em qualquer lugar.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "Um dos pilares da 5ª geração é a integração entre:", tipo: "multipla", alternativas: ["IA, processamento paralelo e interação natural", "Válvulas e cartões perfurados", "Fitas magnéticas e disquetes", "Somente hardware analógico"], correta: "IA, processamento paralelo e interação natural" },
  { pergunta: "Na 5ª geração, o computador deixa de ser apenas executor de comandos.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "O avanço em LSI, VLSI e ULSI permitiu:", tipo: "multipla", alternativas: ["Milhões de componentes em um único chip", "Redução da capacidade de processamento", "Eliminação da memória", "Uso exclusivo de texto"], correta: "Milhões de componentes em um único chip" },
  { pergunta: "O uso de múltiplos núcleos está ligado ao conceito de processamento paralelo.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "Os sistemas operacionais da 5ª geração são caracterizados principalmente por:", tipo: "multipla", alternativas: ["Gerenciamento simultâneo de múltiplos programas", "Funcionamento monotarefa", "Ausência de interface gráfica", "Dependência de papel"], correta: "Gerenciamento simultâneo de múltiplos programas" }
],

2: [
  { pergunta: "A 5ª geração popularizou dispositivos compactos com alto poder de processamento.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "A ampliação da capacidade de SSDs impacta principalmente:", tipo: "multipla", alternativas: ["Análise de grandes volumes de dados", "Redução da internet", "Fim do multitarefa", "Substituição da IA"], correta: "Análise de grandes volumes de dados" },
  { pergunta: "Interfaces gráficas ampliaram o acesso de usuários não técnicos à computação.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "Qual fator é considerado um desafio atual da 5ª geração?", tipo: "multipla", alternativas: ["Vieses algorítmicos e privacidade de dados", "Falta de energia mundial", "Desuso da internet", "Retorno às válvulas"], correta: "Vieses algorítmicos e privacidade de dados" },
  { pergunta: "A IA é vista como elemento central que permite decisões automatizadas.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "O processamento paralelo permite ao sistema:", tipo: "multipla", alternativas: ["Executar várias tarefas ao mesmo tempo", "Executar apenas uma instrução por vez", "Eliminar o uso de RAM", "Substituir redes"], correta: "Executar várias tarefas ao mesmo tempo" },
  { pergunta: "Big Data está relacionado à capacidade de extrair insights de grandes volumes de informação.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "A miniaturização transformou computadores tradicionais em:", tipo: "multipla", alternativas: ["Dispositivos móveis poderosos", "Equipamentos maiores", "Máquinas mecânicas", "Dispositivos analógicos"], correta: "Dispositivos móveis poderosos" }
],

3: [
  { pergunta: "A conectividade constante tornou-se elemento central da 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "Modelos como SaaS e streaming tornaram-se viáveis graças à expansão:", tipo: "multipla", alternativas: ["Da internet e das redes globais", "Das válvulas térmicas", "Dos disquetes", "Dos cartões perfurados"], correta: "Da internet e das redes globais" },
  { pergunta: "A 5ª geração combina alto desempenho com redução de tamanho físico.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "Qual tecnologia representa possível continuidade evolutiva dessa geração?", tipo: "multipla", alternativas: ["Computação quântica", "Máquinas a vapor", "Fitas perfuradas", "Relés eletromecânicos"], correta: "Computação quântica" },
  { pergunta: "A busca por eficiência energética é consequência do aumento da demanda por processamento.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "A interação natural envolve principalmente:", tipo: "multipla", alternativas: ["Reconhecimento de voz e linguagem natural", "Cartões perfurados", "Alavancas mecânicas", "Somente teclado físico"], correta: "Reconhecimento de voz e linguagem natural" },
  { pergunta: "A IA permite automatizar tarefas complexas anteriormente feitas por humanos.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "O crescimento do mercado de IA demonstra:", tipo: "multipla", alternativas: ["Expansão acelerada da tecnologia e dos investimentos", "Declínio da computação", "Redução de infraestrutura", "Fim do desenvolvimento tecnológico"], correta: "Expansão acelerada da tecnologia e dos investimentos" }
],

4: [
  { pergunta: "A 5ª geração abrange desde PCs avançados até sistemas baseados em nuvem atuais.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "O uso massivo de dados exige atenção especial à:", tipo: "multipla", alternativas: ["Segurança, ética e privacidade", "Falta de teclado", "Ausência de monitores", "Redução de RAM"], correta: "Segurança, ética e privacidade" },
  { pergunta: "Processadores de 64 bits são comuns nessa geração.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "O diferencial central da 5ª geração em relação às anteriores é:", tipo: "multipla", alternativas: ["Capacidade de aprendizado e reconhecimento de padrões", "Uso de válvulas", "Dependência de papel", "Processamento mecânico"], correta: "Capacidade de aprendizado e reconhecimento de padrões" },
  { pergunta: "A expansão da IA impactou significativamente o mercado de trabalho.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "A miniaturização contribuiu principalmente para:", tipo: "multipla", alternativas: ["Portabilidade e eficiência energética", "Aumento do tamanho físico", "Redução da conectividade", "Uso de papel"], correta: "Portabilidade e eficiência energética" },
  { pergunta: "A conectividade em rede é essencial para a 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "A 5ª geração pode ser definida como:", tipo: "multipla", alternativas: ["A era da inteligência artificial e da conectividade total", "O retorno às válvulas", "O fim da internet", "A computação mecânica moderna"], correta: "A era da inteligência artificial e da conectividade total" }
],

6: [
  { pergunta: "Armazenamentos com centenas de GB viabilizam aplicações baseadas em grandes dados.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "Na 5ª geração, a internet é considerada:", tipo: "multipla", alternativas: ["Elemento central da experiência computacional", "Recurso secundário", "Inexistente", "Irrelevante para sistemas"], correta: "Elemento central da experiência computacional" },
  { pergunta: "Big Data e computação em nuvem são pilares tecnológicos associados à 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "Segundo os dados apresentados, a IA impactou o PIB da China em aproximadamente:", tipo: "multipla", alternativas: ["+26.1%", "+10%", "+5%", "+50%"], correta: "+26.1%" },
  { pergunta: "A demanda por profissionais de IA no Brasil teve crescimento superior a 300%.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "O mercado global de IA citado apresenta valor aproximado de:", tipo: "multipla", alternativas: ["US$ 312 bilhões", "US$ 50 bilhões", "US$ 1 trilhão", "US$ 100 milhões"], correta: "US$ 312 bilhões" },
  { pergunta: "Miniaturização e alto desempenho caminham juntos na 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
  { pergunta: "Entre os principais desafios atuais está:", tipo: "multipla", alternativas: ["Garantir ética, privacidade e segurança da informação", "Falta de eletricidade", "Ausência de internet", "Uso de cartões perfurados"], correta: "Garantir ética, privacidade e segurança da informação" }
], 

  5: [
    { pergunta: "HDs e SSDs com centenas de GB ou mais possibilitam trabalhar com grandes volumes de dados.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "A internet na 5ª geração:", tipo: "multipla", alternativas: ["É o centro da experiência e conecta tudo em tempo real", "É inexistente", "É usada apenas para e-mails internos", "Não influencia o funcionamento dos sistemas"], correta: "É o centro da experiência e conecta tudo em tempo real" },
    { pergunta: "Big Data e computação em nuvem são tecnologias associadas à 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "Qual foi o impacto da IA no PIB da China segundo o PDF?", tipo: "multipla", alternativas: ["+26.1%", "+10%", "+5.5%", "+50%"], correta: "+26.1%" },
    { pergunta: "A busca por profissionais de IA no Brasil aumentou +306%.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "O mercado global de IA citado no PDF é de aproximadamente:", tipo: "multipla", alternativas: ["US$ 312 bilhões", "US$ 50 bilhões", "US$ 1 trilhão", "US$ 100 milhões"], correta: "US$ 312 bilhões" },
    { pergunta: "Miniaturização e portabilidade são marcas da 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "Qual é um dos principais desafios da 5ª geração?", tipo: "multipla", alternativas: ["Privacidade, ética e segurança da informação", "Falta de eletricidade", "Ausência de internet", "Uso de cartões perfurados"], correta: "Privacidade, ética e segurança da informação" }
  ]

};

let geracao;
let lista=[];
let respostas=[];
let atual=0;
let tempo=150;
let timer;
let acertos=0;

window.iniciarQuiz = async function(g){

  // 🔐 Proteção da Geração 5 - ADMIN
  if(g === 5){
    const senha = prompt("🔒 Área restrita - Digite a senha:");

    if(senha !== "dalton.neres@unisep"){
      alert("❌ Senha incorreta!");
      return;
    }

    abrirPainelAdmin();
    return;
  }

  // 🔍 Verifica no Firestore se já existe resultado dessa geração
  const q = query(
    collection(db,"ranking"),
    where("geracao","==",g)
  );

  const snapshot = await getDocs(q);

  if(!snapshot.empty){
    alert("⚠ Esta geração já realizou o quiz! Não é permitido repetir.");
    return;
  }

  // Se não existir registro, permite iniciar
  geracao=g;
  lista=perguntas[g];
  respostas=[];
  atual=0;
  tempo=150;

  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  iniciarTimer();
  carregar();
}

function iniciarTimer(){

timer = setInterval(()=>{

let m=Math.floor(tempo/60);
let s=tempo%60;

const tempoElemento = document.getElementById("tempo");

tempoElemento.innerText=
`${m<10?"0":""}${m}:${s<10?"0":""}${s}`;


// efeito visual pulsante
tempoElemento.style.transform="scale(1.1)";
setTimeout(()=>{
tempoElemento.style.transform="scale(1)";
},200);

tempo--;

if(tempo < 0){
clearInterval(timer);
finalizar();
}

},1000);

}

function carregar(){
if(atual>=lista.length){
revisar();
return;
}

let p=lista[atual];
document.getElementById("pergunta").innerText=
`Pergunta ${atual+1}/8 - ${p.pergunta}`;

let div=document.getElementById("alternativas");
div.innerHTML="";

if(p.tipo==="vf"){
["Verdadeiro","Falso"].forEach(op=>criarBotao(op));
}else{
p.alternativas.forEach(op=>criarBotao(op));
}
}

function criarBotao(txt){
let b=document.createElement("button");
b.innerText=txt;
b.onclick=()=>confirmar(txt);
document.getElementById("alternativas").appendChild(b);
}

function confirmar(resp){
respostas[atual] = resp;
atual++;
carregar();
}

let acaoConfirmacao = null;

function revisar(){
  abrirModal("Deseja revisar suas respostas?", (resposta)=>{
    if(resposta){
      atual = 0;
      carregar();
    } else {
      finalizar();
    }
  });
}

function abrirModal(texto, callback){
  document.getElementById("modalTexto").innerText = texto;
  document.getElementById("modalConfirm").classList.remove("hidden");
  acaoConfirmacao = callback;
}

window.respostaModal = function(resposta){
  document.getElementById("modalConfirm").classList.add("hidden");
  if(acaoConfirmacao){
    acaoConfirmacao(resposta);
  }
}

async function finalizar(){

  clearInterval(timer);
  acertos=0;

  lista.forEach((p,i)=>{
    if(respostas[i]===p.correta) acertos++;
  });

  // 🚫 Não salva geração 5 no ranking
  if(geracao !== 5){
    await addDoc(collection(db,"ranking"),{
      geracao,
      pontuacao:acertos,
      tempoRestante: tempo < 0 ? 0 : tempo,
      data:new Date()
    });
  }

  mostrarResultado();
}

async function mostrarResultado(){

document.getElementById("quiz").classList.add("hidden");
document.getElementById("resultado").classList.remove("hidden");

document.querySelector("#resultado h2").innerText = "Ranking Geral";

document.getElementById("pontuacao").innerText=
`Você acertou ${acertos} de 8 questões!`;

let dados=await getDocs(collection(db,"ranking"));
let listaRank=[];
dados.forEach(d=>listaRank.push(d.data()));

listaRank.sort((a,b)=>{
if(b.pontuacao !== a.pontuacao){
return b.pontuacao - a.pontuacao;
}
return b.tempoRestante - a.tempoRestante;
});

let div=document.getElementById("ranking");
div.innerHTML="<h3>Ranking Geral</h3>";

listaRank.forEach((r,i)=>{

let medalha="";

if(i===0) medalha="🥇";
else if(i===1) medalha="🥈";
else if(i===2) medalha="🥉";

div.innerHTML+=`
<div class="card-ranking">
<span class="posicao">${i+1}º</span>
<span class="medalha">${medalha}</span>
<span class="geracao">Geração ${r.geracao}</span>
<span class="info">
${r.pontuacao} acertos | ${r.tempoRestante}s restantes
</span>
</div>
`;

}); // ✅ fecha forEach

// 🎉 Se ficou em 1º lugar
if(listaRank.length > 0){
const primeiro = listaRank[0];

if(primeiro.geracao === geracao && 
primeiro.pontuacao === acertos){

confetti({
particleCount: 200,
spread: 120,
origin: { y: 0.6 }
});

}
}

} // ✅ fecha mostrarResultado

window.voltar=function(){
location.reload();
}

async function abrirPainelAdmin(){

  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");
  document.querySelector("#resultado h2").innerText = "Ranking Geral";

  let dados = await getDocs(collection(db,"ranking"));
  let listaRank = [];

  dados.forEach(d => {
    const data = d.data();

    // 🚫 Não mostra geração 5 no ranking
    if(data.geracao !== 5){
      listaRank.push(data);
    }
  });

  listaRank.sort((a,b)=>{
    if(b.pontuacao !== a.pontuacao){
      return b.pontuacao - a.pontuacao;
    }
    return b.tempoRestante - a.tempoRestante;
  });

  let div=document.getElementById("ranking");
div.innerHTML="";
  listaRank.forEach((r,i)=>{

    let medalha="";
    if(i===0) medalha="🥇";
    else if(i===1) medalha="🥈";
    else if(i===2) medalha="🥉";

    div.innerHTML+=`
    <div class="card-ranking">
      <span class="posicao">${i+1}º</span>
      <span class="medalha">${medalha}</span>
      <span class="geracao">Geração ${r.geracao}</span>
      <span class="info">
        ${r.pontuacao} acertos | ${r.tempoRestante}s restantes
      </span>
    </div>
    `;
  });

}