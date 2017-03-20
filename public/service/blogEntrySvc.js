angular.module('app')
.service('blogEntrySvc', function($http, $stateParams) {

    this.getEntry = function() {
        return $http.get('/api/blog/' + $stateParams.id)
        .then(function(response) {
            return response.data;
        });
    };

    this.updateEntry = function(entry) {
        return $http.put('/api/update_blog', entry)
        .then(function(response) {
            return response.data;
        });
    };
    
    this.deleteEntry = function() {
        return $http.delete('/api/delete_blog/' + $stateParams.id)
        .then(function(response) {
            return response.data;
        });
    };
});