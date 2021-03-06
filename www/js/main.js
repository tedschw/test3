var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    initialize: function() {
         // chose a datastore
         this.store = new MemoryStore();
//        this.store = new LocalStorageStore();
//          this.store = new WebSqlStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }

};

app.initialize();