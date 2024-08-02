const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você acredita que podemos combater o racismo na sociedade?",
        alternativas: [           
            {
                texto: "Participando de campanhas de conscientização e educação sobre igualdade racial.",
                afirmacao: "afirmacao 1"
            },
            {
                texto:  "Denunciando atos de discriminação e apoiando políticas públicas inclusivas.",
                afirmacao: "afirmacao 2"
            }
        ]
    },
    {
        enunciado: "Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o racismo?",
        alternativas: [ 
            {
                texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",
                afirmacao: "afirmacao 1"
            },
            {
                texto: "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.",
                afirmacao: "afirmacao 2"
            }
        ]
    },
    {
        enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: [           
            {
                texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
                afirmacao: "afirmacao 1"
            },
            {
                texto: "Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
                afirmacao: "afirmacao 2"
            }
        ]
    } 
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();
