angular.module('app')
.service('blogSvc', function($stateParams, $http) {
    
    this.bwogs = [{
        title: 'blog1',
        id: 1,
        body: 'blah blah blah stuff about a place'
    },
    {
        title: 'blog2',
        id: 2,
        body: 'stuff about another place'
    },
    {
        title: 'blog3',
        id: 3,
        body: 'stuff about place three'
    }];
    
    this.getEntry = function() {
        for (var i = 0; i < this.bwogs.length; i++) {
            if (this.bwogs[i].id == $stateParams.id) {
                return this.bwogs[i];
            }
        }
    };
});

this.getAllEntries = function() {
    return $http('/api/blog').then(function(response) {
        console.log('service something')
        return response;
    });
}