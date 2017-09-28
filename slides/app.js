angular.module('slides',[])

    .controller('slide', function($scope) {

        let pages = [
            'hello_there',
            'what_to',
            'node',
            'selenium',
            'cucumber'
        ];
        let index = 0;

        $scope.page = 'pages/' + pages[0] + '.html';
        $scope.next = () => {
            index++;
            index = (index === pages.length) ? 0 : index;
            $scope.page = 'pages/' + pages[index] + '.html';
        };
    });
