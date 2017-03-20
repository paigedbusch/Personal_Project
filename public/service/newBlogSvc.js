angular.module('app')
.service('newBlogSvc', function($http) {
    
    this.newEntry = function() {
        return $http.post('/api/new_blog')
        .then(function(response) {
            console.log('new blog posted svc');
            return response.data;
        });
    };
});