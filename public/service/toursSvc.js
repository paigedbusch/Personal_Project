angular.module('app')
.service('toursSvc', function($stateParams) {
    
    this.pwaces = [{
        place: 'The Wave',
        id: 1,
        img: './image/wave_1.jpg',
        body: 'stuff about this tour'
    },
    {
        place: 'Arches',
        id: 2,
        img: './image/arches_1.jpg',
        body: 'stuff about this other tour'
    },
    {
        place: 'Mesa Verde',
        id: 3,
        img: './image/mesa_verde_1.jpg',
        body: 'stuff about the last tour'
    }];

    this.getTour = function() {
        for (var i = 0; i < this.pwaces.length; i++) {
            if (this.pwaces[i].id == $stateParams.id) {
                return this.pwaces[i];
            }
        }
    };
});