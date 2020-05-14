var portfolioApp = angular.module('portfolioApp', []);
portfolioApp.controller('GalleryListCtrl', function ($scope) {
    $scope.galleries = [
        {
            'title': 'Przekąski',
            'thumbnailUrl': 'assets/portfolio/grafika1.jpg'
        },
        {
            'title': 'Fast food',
            'thumbnailUrl': 'assets/portfolio/grafika2.jpg'
        },
        {
            'title': 'Sałatka warzywna',
            'thumbnailUrl': 'assets/portfolio/grafika3.jpg'
        },
        {
            'title': 'Mega Burger',
            'thumbnailUrl': 'assets/portfolio/grafika4.jpg'
        },
        {
            'title': 'Take-away food',
            'thumbnailUrl': 'assets/portfolio/grafika5.jpg'
        },
        {
            'title': 'Bitki z indyka',
            'thumbnailUrl': 'assets/portfolio/grafika6.jpg'
        },
        {
            'title': 'Kebab',
            'thumbnailUrl': 'assets/portfolio/grafika7.jpg'
        },

    ];
});
