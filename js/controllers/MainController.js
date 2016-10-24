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
            title: "This part now features angularJS!",
            text: "Now the post list is dynamic, so that it'll auto-grow as I make more posts.",
            date: new Date('2016', '9', '21'),
        },
        {
            title: "First Post",
            text: "First post of latestProj",
            date: new Date('2016', '9', '1'),
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
    $scope.projects = [
        {
            title: 'Simulador da lei fraca dos grandes números',
            type: 'Site',
            description: 'Website desenvolvido em colaboração com Juliano Garcia.',
            date: new Date('2016', '9', '25'),
            image: '',
            subtitle: 'gráfico-exemplo de nosso website',
            link: 'http://www.github.com/GreaterNumbersLaw/website'
        },
        {
            title: 'Brasil Game Jam 2016',
            type: 'Game Jam',
            description: 'Participação da Brasil Game Jam de 2016, ficando entre os Top 5 times participantes.',
            date: new Date('2016', '7', '24'),
            image: '',
            subtitle: 'Foto de nosso workspace durante o desafio, dentro da Brasil Game Show',
            link: 'http://globouniversidade.globo.com/page/projetos/ansiedade-e-expectativa-marcaram-o-ultimo-dia-da-globo-na-bgs'
        }
    ];
}]);
