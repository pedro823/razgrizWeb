function readJSON(file) {
    var xmlhttp = new XMLHttpRequest();
    var url = file;
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var finalJSON = JSON.parse(this.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    return finalJSON;
}
app.controller('News', ['$scope',
function($scope) {
    $scope.lastChange = new Date('2016', '9', '24');
    $scope.lastNews = [
        {
            title: "só um teste para ver se tá legal",
            date: new Date('2016', '9', '24'),
            link: 'http://www.google.com',
        },
        {
            title: 'mais um para ver se tá bonito',
            date: new Date('2016', '9', '24'),
            link: 'http://facebook.com'
        }
    ];

}]);
app.controller('PostList', ['$scope',
function($scope) {
    $scope.postTexts = [
        {
            title: 'Canais de Youtube relacionados a programação',
            text: '&emsp;Há um tempo, venho recomendando alguns canais de Youtube para amigos e ' +
            'colegas de classe. Decidi então fazer uma lista de alguns canais, a maioria sem muito reconhecimento, que alguns podem se interessar.',
            date: new Date('2016', '9', '29'),
            wholeText: '&emsp;Há um tempo, venho recomendando alguns canais de Youtube para amigos e ' +
            'colegas de classe. Decidi então fazer uma lista de alguns canais, a maioria sem muito reconhecimento, que alguns podem se interessar.' +
            '<br><em>Todos os nomes contém links para o canal.</a></em>' +
            '<br><a href="https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A" target="_blank"><b>Sirajology</b></a><br>' +
            'Um canal que utiliza muito a maleabilidade da linguagem Python para fazer tudo: desde redes neurais e machine learning até data science' +
            ' e análise sentimental. Os vídeos são bastante "mão na massa", então é pouca explicação e bastante código.' +
            '<br><a href="https://www.youtube.com/user/devcentral" target="_blank"><b>F5 DevCentral</b></a><br>' +
            'Esse canal é da <a href="http://f5.com" target="_blank">f5 networks</a>, que trabalha com serviços de proteção de DDoS, cloud, escala de DNS e mais. ' +
            'No canal, além de um monte de vídeos explicando como usar os programas deles, há vídeos sobre alguns métodos de criptografia, como a ECC (Elyptic curve criptography),' +
            ' e tokenização de dados. Os vídeos desse tipo são meio raros no canal, mas vale dar uma olhada mesmo assim.' +
            '<br><a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw" target="_blank"><b>3Blue1Brown</b></a><br>' +
            'Explica, de uma maneira fácil de compreender, assuntos matemáticos como álgebra linear, fractais, curvas que preenchem espaço, música, e muito mais.' +
            ' O autor sempre visa a intuitividade - sem anotar nada, você sai do vídeo sabendo mais.' +
            '<br><a href="https://www.youtube.com/channel/UCqbkm47qBxDj-P3lI9voIAw" target="_blank"><b>danooct1</b></a><br>' +
            'Um canal muito mais de diversão, que pega malwares antigos para DOS, Windows 95, 98, ME e XP, e até alguns sistemas operacionais inesperados, ' +
            'como Symbian para Smartphones antigos, e testa eles na frente da câmera. É muito interessante ver como o rumo de malwares mudou de "tela azul mortal"' +
            ' para malwares silenciosos que roubam seus dados sem você saber.' +
            '<br><a href="https://www.youtube.com/user/gigafide" target="_blank"><b>Tinkernut</b></a> e <a href="https://www.youtube.com/channel/UCipr-y52SQGyMX-CQ2xk3jA" target="_blank"><b>Tinkernut Labs</b></a><br>' +
            'Para os que gostam de Arduino, Raspberry Pi, Internet of Things e Hacking, esse canal é para vocês. O host ensina a fazer servidores de e-mail, um smartwatch a partir de peças velhas, ' +
            'um cluster computer de Raspberry Pis, câmeras de segurança e muito mais.' +
            '<br><a href="https://www.youtube.com/channel/UCNovoA9w0KnxyDP5bGrOYzg" target="_blank"><b>Tek Syndicate</b></a><br>' +
            'Um canal de notícias de hardware de computador. Eu faria um post inteiro sobre canais de hardware, mas pus esse aqui porque o podcast deles, "The Tek",' +
            ' é um podcast que ao mesmo tempo é relaxante, é bem informativo.' +
            '<br><a href="https://www.youtube.com/user/standupmaths" target="_blank"><b>Standupmaths</b></a><br>' +
            'Um matemático que faz shows de standup. Embora no canal dele não tenha os shows que ele faz, ele sempre traz assuntos muito interessantes para falar, como' +
            ' "Por que a TV NTSC é 29.97 frames por segundo?", "Quantos vídeos de Youtube são possíveis de serem feitos?", e mais.' +
            '<br><a href="https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA" target="_blank"><b>Computerphile</b></a><br>' +
            'Óbvio.',
            postNo: '00003',
            code: '',
        },
        {
            title: 'Por que "Razgriz One?"',
            text: '&emsp;Me perguntam "por que Razgriz One?" bastante.' +
            '<br>&emsp;<b>Razgriz</b> vem de um jogo para Playstation 2 chamado Ace Combat 5: The Unsung War.' +
            ' É um jogo de guerra de aviões-caça.',
            date: new Date('2016', '9', '28'),
            wholeText: '&emsp;Me perguntam "por que Razgriz One?" bastante.' +
            '<br>&emsp;<b>Razgriz</b> vem de um jogo para Playstation 2 chamado <b>Ace Combat 5: The Unsung War </b>.' +
            ' É um jogo de guerra de aviões-caça. Um resumo curto da história do jogo,' +
            ' é uma guerra entre os países Osea e Yuktobania, dentro do mundo de <a href="http://acecombat.wikia.com/wiki/Strangereal" target="_blank">Strangereal</a>' +
            ', um mundo muito parecido com a Terra. <br>&emsp;Desde a declaração de guerra, Nenhum dos presidentes dos dois países havia entrado novamente em seus escitórios: ' +
            'Os dois foram capturados antes da guerra, mantidos em uma prisão no Norte, e todas as suas declarações haviam sido forjadas pelos generais superiores de cada país.' +
            ' O esquadrão do jogador, primeiramente chamado de Wardog, é o primeiro a descobrir a verdade, e fazer tudo a parar a guerra.' +
            ' O termo vem de <a href="https://youtu.be/Hz8HTPGQpBU?t=1h21m22s" target="_blank">uma lenda</a> do jogo, descrita em um poema: <em>' +
            '<br><br>The Demon of Razgriz <br><br> (The Demon of the North Sea) <br><br>' +
            '<br>When history witnesses a great change, Razgriz reveals itself, first as a dark demon.' +
            "<br>As a demon, it uses it's power to rain death upon the land, and then it dies" +
            '<br>However, after a period of slumber, Razgriz returns...' +
            '<br><br>Amidst the eternal waves of time' +
            '<br>From a ripple of change shall the storm rise' +
            '<br>Out of the abyss peer the eyes of a demon' +
            '<br>Behold the Razgriz, its wings of black sheath' +
            '<br><br>The demon soars through dark skies' +
            '<br>Fear and death trail its shadow beneath' +
            '<br>Until men united wield a hallowed sabre' +
            '<br>In final reckoning, the beast is slain' +
            '<br><br>As the demon sleeps, man turns on man' +
            '<br>His own blood and madness soon cover the earth' +
            '<br>From the depths of despair awaken the Razgriz' +
            '<br>Its raven wings ablaze in majestic light.' +
            '<br><br></em>&emsp;Basicamente, essa lenda conta de um demônio residente do mar do Norte, que ao nascer destrói tudo que vê, até ser derrotado.' +
            ' Ele ressurge como um fantasma, mas quando isso acontece, ele semeia bondande pela terra.' +
            '<br>&emsp;Depois de uma parte do jogo, inimigos começam a utilizar esse conto para <a href="https://youtu.be/Hz8HTPGQpBU?t=2h37m" target="_blank">referir-se ao esquadrão Wardog</a>.' +
            ' Para eles, o esquadrão é igual ao demônio de Razgriz - destruindo tudo que passam sobre, e imparáveis.' +
            ' O esquadrão acata o nome após um tempo. após <a href="https://youtu.be/Hz8HTPGQpBU?t=2h1m20s" target="_blank">esse acontecimento</a>, os pilotos são reconhecidos como abatidos, mas são recuperados e ' +
            'trocam seus nomes para Razgriz. A partir daí, fazem de tudo para parar a guerra.' +
            '<br>Razgriz One seria o primeiro piloto do esquadrão, e é esse o nome que escolhi.',
            postNo: '00002',
            code: '',
        },
        {
            title: 'Site agora está live!',
            text: 'O website agora se encontra vivo. Foi escrito do zero,' +
            ' usando as bibliotecas: <br>&emsp;<b>CSS:</b> w3-css, Bootstrap e Animate-css <br>&emsp;<b>Javascript:</b> AngularJS',
            date: new Date('2016', '9', '26'),
            wholeText: 'O website agora se encontra vivo. Foi escrito do zero,' +
            ' usando as bibliotecas: <br>&emsp;<b>CSS:</b> w3-css, Bootstrap e Animate-css <br>&emsp;<b>Javascript:</b> AngularJS',
            postNo: '00001',
            code: 'int main() {<br>&emsp;&emsp;printf("Hello world!\\n");<br>&emsp;&emsp;return 0;<br>}',
        },
    ];
    $scope.openSec = function(event) {
        var obj = event.target.nextElementSibling;
        if(obj.className.indexOf("w3-show") == -1) {
            obj.className += " w3-show";
            obj.previousElementSibling.className = obj.previousElementSibling.className.replace(" w3-black", " w3-red");
        }
        else {
            obj.className = obj.className.replace(" w3-show", "");
            obj.previousElementSibling.className = obj.previousElementSibling.className.replace(" w3-red", " w3-black");
        }
    };
}]);

app.controller('ProjectList', ['$scope',
function($scope) {
    // $scope.projects = readJSON('https://linux.ime.usp.br/~razgrizone/info/projectList.json');
    $scope.projects = [
        {
            title: 'HackathonUSP 2016',
            type: 'Hackathon',
            description: 'Menção honrosa na participação do Hackathon feito pela USP em colaboração com a IBM.' +
            '<br>O grupo foi composto por Pedro Pereira, Raphael Gusmão, Breno Helfstein e Caio Lopes. O grupo focou no tema "Ética em desenvolvimento e pesquisa",' +
            ' e fez um website com o intuito de aprimorar o ensino da ética em pesquisa por meio de perguntas e respostas.' +
            '<br>O projeto pode ser conferido <a href="http://aprendetica.herokuapp.com/">aqui</a>.<br><em>Feito em HTML, CSS, PHP e javascript, utilizando a framework Laravel</em>',
            date: new Date('2016', '10', '6'),
            image: 'hackUSP.jpg',
            subtitle: 'Nosso workspace durante o Hackathon',
            link: 'https://devpost.com/software/aprendetica',
        },
        {
            title: 'Simulador da lei fraca dos grandes números',
            type: 'Site',
            description: 'Website desenvolvido em colaboração com <a href="http://linux.ime.usp.br/~robotenique" target="_blank">Juliano Garcia.</a>' +
            '<br>Utiliza de tecnologias como chartJS para mostrar um gráfico dinâmico, que demonstra a' +
            ' <a href="https://pt.wikipedia.org/wiki/Lei_dos_grandes_n%C3%BAmeros" target="_blank">Lei Fraca dos Grandes Números</a>.<br>' +
            'Um projeto feito para a aula de introdução à estatística.',
            date: new Date('2016', '9', '25'),
            image: 'WeakLaw',
            subtitle: 'gráfico-exemplo de nosso website',
            link: 'https://linux.ime.usp.br/~robotenique/prog/wk/'
        },
        {
            title: 'Brasil Game Jam 2016',
            type: 'Game Jam',
            description: 'Participação da Brasil Game Jam de 2016, ficando entre os Top 5 times participantes.' +
            '<br>Os times envolvidos foram desafiados a fazer um jogo dentro de 48h, dentro da maior feira de games' +
            ' da américa latina: a <a href="http://www.brasilgameshow.com.br/" target="_blank">Brasil Game Show.</a>' +
            '<br>Junto com Guilherme Moura (EACH-USP) e Marcelo Prado (Insper), "Os Gracinhas" fizeram um jogo mobile ' +
            'viciante, que conquistou os votos de visitantes da exposição no domingo. <a href="https://gracinhas.itch.io/">' +
            'Confira o jogo aqui.</a>',
            date: new Date('2016', '7', '24'),
            image: 'BGJ2016.jpg',
            subtitle: 'Foto de nosso workspace durante o desafio, dentro da Brasil Game Show',
            link: 'http://globouniversidade.globo.com/page/projetos/ansiedade-e-expectativa-marcaram-o-ultimo-dia-da-globo-na-bgs'
        }
    ];
}]);
