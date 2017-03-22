angular.module('app')
.service('blogSvc', function($http, $stateParams) {
    
    this.getAllEntries = function() {
        return $http.get('/api/blog')
        .then(function(response) {
            return response.data;
        });
    };

    this.newEntry = function(entry) {
        console.log(entry);
        return $http.post('/api/new_blog', entry)
        .then(function(response) {
            console.log(response);
            return response.data;
        });
    };
});
