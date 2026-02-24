const questions = [

{
question: "Segundo os slides, a Quinta Geração surgiu oficialmente nos anos 1980 com o Projeto Japonês de Computadores de Quinta Geração. Qual era o principal foco desse projeto?",
answers: [
"Substituir os microprocessadores",
"Desenvolver Inteligência Artificial e processamento paralelo",
"Expandir o uso de válvulas",
"Eliminar sistemas operacionais"
],
correct: "Desenvolver Inteligência Artificial e processamento paralelo"
},

{
question: "Citação dos slides: 'Fazer o computador deixar de só executar comandos e passar a aprender, reconhecer padrões e tomar decisões.' Essa afirmação descreve qual objetivo central da Quinta Geração?",
answers: [
"Apenas aumento de memória",
"Evolução para sistemas inteligentes com IA",
"Retorno à linguagem de máquina",
"Redução da conectividade"
],
correct: "Evolução para sistemas inteligentes com IA"
},

{
question: "De acordo com as características de hardware apresentadas, qual tecnologia permitiu colocar milhões de componentes em um único chip?",
answers: [
"Cartões perfurados",
"LSI, VLSI e ULSI",
"Válvulas eletrônicas",
"Fitas magnéticas"
],
correct: "LSI, VLSI e ULSI"
},

{
question: "Os slides afirmam que 'a internet vira o centro da experiência'. Isso significa que:",
answers: [
"Os computadores deixam de usar hardware",
"Dados circulam em tempo real e serviços migram para o online",
"A internet substitui o software",
"Os dispositivos deixam de ser portáteis"
],
correct: "Dados circulam em tempo real e serviços migram para o online"
},

{
question: "Entre os desafios apresentados nos slides está a preocupação com privacidade, ética e vieses algorítmicos. Esse desafio está relacionado principalmente a:",
answers: [
"Uso massivo de dados e Inteligência Artificial",
"Falta de energia elétrica",
"Ausência de armazenamento",
"Fim da miniaturização"
],
correct: "Uso massivo de dados e Inteligência Artificial"
}

];

let selectedQuestions = [];
let current = 0;
let score = 0;
let time = 300;
let timer;

function shuffle(array){
    return array.sort(()=>Math.random()-0.5);
}

function startQuiz(){
    selectedQuestions = shuffle([...questions]).slice(0,5);

    selectedQuestions.forEach(q=>{
        q.answers = shuffle(q.answers);
    });

    document.getElementById("start").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    loadQuestion();
    timer = setInterval(updateTimer,1000);
}

function updateTimer(){
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    document.getElementById("time").innerText =
        (minutes<10?"0":"")+minutes + ":" +
        (seconds<10?"0":"")+seconds;
    time--;
    if(time<0){
        finishQuiz();
    }
}

function loadQuestion(){
    if(current >= selectedQuestions.length){
        finishQuiz();
        return;
    }

    document.getElementById("question").innerText =
        selectedQuestions[current].question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML="";

    selectedQuestions[current].answers.forEach(answer=>{
        let btn = document.createElement("button");
        btn.innerText = answer;
        btn.classList.add("option");
        btn.onclick = ()=>checkAnswer(answer);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(answer){
    if(answer === selectedQuestions[current].correct){
        score++;
    }
    current++;
    loadQuestion();
}

function finishQuiz(){
    clearInterval(timer);

    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("score").innerText =
        `Você acertou ${score} de 5 questões!`;

    let ranking = JSON.parse(localStorage.getItem("ranking5")) || [];
    ranking.push(score);
    ranking.sort((a,b)=>b-a);
    localStorage.setItem("ranking5",JSON.stringify(ranking));

    let rankingDiv = document.getElementById("ranking");
    rankingDiv.innerHTML="<h3>Ranking</h3>";
    ranking.forEach((r,i)=>{
        rankingDiv.innerHTML += `${i+1}º - ${r} pontos <br>`;
    });
}
