postList.controller('PostList', ['$scope',
function($scope) {
    $scope.postTexts = [
        {
            title: "This part now features angularJS!",
            text: "Now the post list is dynamic, so that it'll auto-grow as I make more posts.",
            date: new Date('2016', '9', '21')
        },
        {
            title: "First Post",
            text: "First post of latestProj",
            date: new Date('2016', '9', '1')
        }
    ];
}]);
