app.controller('News', ['$scope',
function($scope) {
    $scope.lastNews = {
        lastChange: new Date('2016', '9', '21')
    };
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
