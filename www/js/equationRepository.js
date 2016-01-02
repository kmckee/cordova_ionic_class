angular.module('starter')
.factory('equationRepository', function(pouchDB) {
    var database = pouchDB('myEquations');
    database.sync('https://couchdb-396c4f.smileupps.com/codemash/', {live: true});
    return {
        save: function(equation) {
              var doc = { equation: equation, author: "Kyle" };
              return database.post(doc);
          },
        all: function() {
             return database.allDocs({include_docs: true}).then(function(allDocs){
                return _.pluck(allDocs.rows, 'doc');
             });
        }
    };
});

