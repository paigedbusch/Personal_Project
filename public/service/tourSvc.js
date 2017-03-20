angular.module('app')
.service('tourSvc', function($http) {

    this.updateTour = function(id, dummyBlog)  {
        return $http.put('/api/update_tour/' + id, dummyBlog)
        .then(function(response) {
            console.log('tour updated');
            return response.data;
        });
    };

    // this.deleteTour = function() {
    //     return $http.delete('/api/delete_tour')
    //     .then(function(response) {
    //         console.log('tour deleted');
    //         return response.data;
    //     });
    // };
});