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
            title: 'Site agora está live!',
            text: 'O website agora se encontra vivo. Foi escrito do zero,' +
            ' usando as bibliotecas: <br>&emsp;<b>CSS:</b> w3-css, Bootstrap e Animate-css <br>&emsp;<b>Javascript:</b> AngularJS',
            date: new Date('2016', '9', '26')
        }
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
            link: 'https://github.com/GreaterNumbersLaw/website'
        },
        {
            title: 'Brasil Game Jam 2016',
            type: 'Game Jam',
            description: 'Participação da Brasil Game Jam de 2016, ficando entre os Top 5 times participantes.' +
            '<br>Os times envolvidos foram desafiados a fazer um jogo dentro de 48h, dentro da maior feira de games' +
            ' da américa latina: a <a href="http://www.brasilgameshow.com.br/" target="_blank">Brasil Game Show.</a>' +
            '<br>Junto com Guilherme Moura (EACH-USP) e Marcelo Prado (Insper)',
            date: new Date('2016', '7', '24'),
            image: 'BGJ2016.jpg',
            subtitle: 'Foto de nosso workspace durante o desafio, dentro da Brasil Game Show',
            link: 'http://globouniversidade.globo.com/page/projetos/ansiedade-e-expectativa-marcaram-o-ultimo-dia-da-globo-na-bgs'
        }
    ];
}]);
