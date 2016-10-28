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
            title: 'Por que "Razgriz One?"',
            text: '&emsp;Me perguntam "por que Razgriz One?" bastante.' +
            '<br>&emsp;<b>Razgriz</b> vem de um jogo para Playstation 2 chamado Ace Combat 5: The Unsung War.' +
            ' É um jogo de guerra de aviões-caça.',
            date: new Date('2016', '9', '28'),
            wholeText: '&emsp;Me perguntam "por que Razgriz One?" bastante.' +
            '<br>&emsp;<b>Razgriz</b> vem de um jogo para Playstation 2 chamado <b>Ace Combat 5: The Unsung War </b>.' +
            ' É um jogo de guerra de aviões-caça. Um resumo curto da história do jogo,' +
            ' é uma guerra entre os países Osea e Yuktobania, dentro do mundo de <a href="http://acecombat.wikia.com/wiki/Strangereal">Strangereal</a>' +
            ', um mundo muito parecido com a Terra. <br>&emsp;Desde a declaração de guerra, Nenhum dos presidentes dos dois países havia entrado novamente em seus escitórios: ' +
            'Os dois foram capturados antes da guerra, mantidos em uma prisão no Norte, e todas as suas declarações haviam sido forjadas pelos generais superiores de cada país.' +
            ' O esquadrão do jogador, primeiramente chamado de Wardog, é o primeiro a descobrir a verdade, e fazer tudo a parar a guerra.' +
            ' O termo vem de <a href="https://youtu.be/Hz8HTPGQpBU?t=1h21m22s">uma lenda</a> do jogo, descrita em um poema: <em>' +
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
            '<br>&emsp;Depois de uma parte do jogo, inimigos começam a utilizar esse conto para <a href="https://youtu.be/Hz8HTPGQpBU?t=2h37m">referir-se ao esquadrão Wardog</a>.' +
            ' Para eles, o esquadrão é igual ao demônio de Razgriz - destruindo tudo que passam sobre, e imparáveis.' +
            ' O esquadrão acata o nome após um tempo. após <a href="https://youtu.be/Hz8HTPGQpBU?t=2h1m20s">esse acontecimento</a>, os pilotos são reconhecidos como abatidos, mas são recuperados e ' +
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
        }
        // {
        //     title: '',
        //     text: '',
        //     date: ,
        // }
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
