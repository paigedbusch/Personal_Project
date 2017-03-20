angular.module('app')
.service('blogSvc', function($stateParams, $http) {
    
    this.getAllEntries = function() {
        return $http.get('/api/blog')
        .then(function(response) {
            return response.data;
        });
    };

    this.newEntry = function(entry) {
        return $http.post('/api/new_blog', entry)
        .then(function(response) {
            return response.data;
        });
    };
});
