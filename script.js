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
    { pergunta: "A 5ª geração surgiu oficialmente nos anos 1980 com foco em Inteligência Artificial.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "Qual é o principal foco da 5ª geração de computadores?", tipo: "multipla", alternativas: ["Inteligência Artificial e Processamento Paralelo", "Uso de válvulas", "Transistores isolados", "Cartões perfurados"], correta: "Inteligência Artificial e Processamento Paralelo" },
    { pergunta: "A 5ª geração representa a era da IA, da conectividade global e da computação ubíqua.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "Um dos principais objetivos da 5ª geração é:", tipo: "multipla", alternativas: ["Fazer o computador aprender e reconhecer padrões", "Reduzir o uso de sistemas operacionais", "Eliminar a internet", "Voltar ao uso de válvulas"], correta: "Fazer o computador aprender e reconhecer padrões" },
    { pergunta: "A integração de voz, linguagem natural e toques faz parte da 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "Quais tecnologias de hardware são intensamente utilizadas na 5ª geração?", tipo: "multipla", alternativas: ["LSI, VLSI e ULSI", "Válvulas térmicas", "Engrenagens mecânicas", "Apenas transistores simples"], correta: "LSI, VLSI e ULSI" },
    { pergunta: "Processadores de 32 e 64 bits com múltiplos núcleos permitem processamento paralelo.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "Qual característica define os sistemas operacionais da 5ª geração?", tipo: "multipla", alternativas: ["Multitarefa", "Monotarefa", "Sem interface gráfica", "Baseados apenas em texto puro"], correta: "Multitarefa" },
  ],

  2: [
      { pergunta: "A 5ª geração é caracterizada por dispositivos portáteis poderosos como smartphones.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "O uso de SSDs com grande capacidade permite:", tipo: "multipla", alternativas: ["Trabalhar com grandes volumes de dados", "Reduzir a conectividade", "Eliminar sistemas multitarefa", "Substituir IA"], correta: "Trabalhar com grandes volumes de dados" },
      { pergunta: "Interfaces gráficas com janelas e ícones tornaram os sistemas mais acessíveis.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "Qual destas opções é um desafio da 5ª geração?", tipo: "multipla", alternativas: ["Privacidade e vieses algorítmicos", "Falta de energia elétrica mundial", "Ausência de chips", "Uso de papel para armazenamento"], correta: "Privacidade e vieses algorítmicos" },
      { pergunta: "A IA é considerada o 'cérebro' da 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "O processamento paralelo permite:", tipo: "multipla", alternativas: ["Executar várias tarefas simultaneamente", "Executar apenas uma tarefa por vez", "Eliminar memória RAM", "Substituir a internet"], correta: "Executar várias tarefas simultaneamente" },
      { pergunta: "Big Data permite analisar enormes volumes de dados.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "A miniaturização permitiu transformar PCs grandes em:", tipo: "multipla", alternativas: ["Laptops e smartphones", "Máquinas maiores", "Computadores mecânicos", "Dispositivos analógicos"], correta: "Laptops e smartphones" }
    ],

  3: [
      { pergunta: "A conectividade constante é uma marca da 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "Modelos como SaaS e streaming surgem com a expansão:", tipo: "multipla", alternativas: ["Da internet", "Das válvulas", "Dos cartões perfurados", "Dos disquetes"], correta: "Da internet" },
      { pergunta: "A 5ª geração prioriza alto desempenho em espaço físico reduzido.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "Qual destes está associado à continuidade tecnológica da 5ª geração?", tipo: "multipla", alternativas: ["Computação quântica", "Máquinas a vapor", "Válvulas gigantes", "Fitas magnéticas antigas"], correta: "Computação quântica" },
      { pergunta: "A demanda por hardware mais potente pressiona por eficiência energética.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "A interação natural inclui:", tipo: "multipla", alternativas: ["Reconhecimento de voz e linguagem natural", "Cartões perfurados", "Comandos mecânicos", "Alavancas manuais"], correta: "Reconhecimento de voz e linguagem natural" },
      { pergunta: "A 5ª geração busca automatizar tarefas complexas com IA.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "O crescimento do mercado global de IA citado no PDF demonstra:", tipo: "multipla", alternativas: ["Expansão acelerada de infraestrutura e serviços", "Declínio da tecnologia", "Fim da computação", "Redução de investimentos"], correta: "Expansão acelerada de infraestrutura e serviços" }
    ],

  4: [
      { pergunta: "A 5ª geração vai dos PCs avançados dos anos 80/90 até os sistemas em nuvem atuais.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "O uso massivo de dados levanta preocupações com:", tipo: "multipla", alternativas: ["Ética e segurança da informação", "Falta de monitores", "Ausência de teclado", "Redução de memória RAM"], correta: "Ética e segurança da informação" },
      { pergunta: "Processadores de 64 bits são comuns na 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "Qual característica diferencia fortemente a 5ª geração das anteriores?", tipo: "multipla", alternativas: ["Capacidade de aprender e reconhecer padrões", "Uso de válvulas", "Dependência de cartões", "Processamento mecânico"], correta: "Capacidade de aprender e reconhecer padrões" },
      { pergunta: "A empregabilidade na área de IA teve aumento expressivo segundo o PDF.", tipo: "vf", correta: "Verdadeiro" },
      { pergunta: "A miniaturização impactou principalmente:", tipo: "multipla", alternativas: ["Portabilidade e eficiência energética", "Aumento do tamanho físico", "Uso de papel", "Redução da conectividade"], correta: "Portabilidade e eficiência energética" },
      { pergunta: "A 5ª geração não depende de conectividade em rede.", tipo: "vf", correta: "Falso" },
      { pergunta: "O principal marco conceitual da 5ª geração é:", tipo: "multipla", alternativas: ["Inteligência Artificial moldando o futuro", "Retorno às válvulas", "Fim da internet", "Computação exclusivamente mecânica"], correta: "Inteligência Artificial moldando o futuro" }
    ],

  6: [
    { pergunta: "HDs e SSDs com centenas de GB ou mais possibilitam trabalhar com grandes volumes de dados.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "A internet na 5ª geração:", tipo: "multipla", alternativas: ["É o centro da experiência e conecta tudo em tempo real", "É inexistente", "É usada apenas para e-mails internos", "Não influencia o funcionamento dos sistemas"], correta: "É o centro da experiência e conecta tudo em tempo real" },
    { pergunta: "Big Data e computação em nuvem são tecnologias associadas à 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "Qual foi o impacto da IA no PIB da China segundo o PDF?", tipo: "multipla", alternativas: ["+26.1%", "+10%", "+5.5%", "+50%"], correta: "+26.1%" },
    { pergunta: "A busca por profissionais de IA no Brasil aumentou +306%.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "O mercado global de IA citado no PDF é de aproximadamente:", tipo: "multipla", alternativas: ["US$ 312 bilhões", "US$ 50 bilhões", "US$ 1 trilhão", "US$ 100 milhões"], correta: "US$ 312 bilhões" },
    { pergunta: "Miniaturização e portabilidade são marcas da 5ª geração.", tipo: "vf", correta: "Verdadeiro" },
    { pergunta: "Qual é um dos principais desafios da 5ª geração?", tipo: "multipla", alternativas: ["Privacidade, ética e segurança da informação", "Falta de eletricidade", "Ausência de internet", "Uso de cartões perfurados"], correta: "Privacidade, ética e segurança da informação" }
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

await addDoc(collection(db,"ranking"),{
geracao,
pontuacao:acertos,
tempoRestante: tempo < 0 ? 0 : tempo,
data:new Date()
});

mostrarResultado();
}

async function mostrarResultado(){

document.getElementById("quiz").classList.add("hidden");
document.getElementById("resultado").classList.remove("hidden");

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