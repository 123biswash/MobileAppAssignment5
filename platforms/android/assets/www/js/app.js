// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();
    service.initialize().done(function () {
        console.log("Service initialized");
    });

    /* --------------------------------- Event Registration -------------------------------- */
    $('.search-key1').on('keyup', findByFirstName);
    $('.search-key2').on('keyup', findByLastName);
    $('.help-btn').on('click', function() {
        alert("Employee Directory v3.4");
    });
    /*
    document.addEventListener('deviceready',
        function () {
        // Override default HTML alert
        // with native dialog
        if (device.platform != "browser") {
        window.alert = function (message) {
        navigator.notification.alert(
        message, // message
        null, // callback
        "Workshop on Android", // title
        'OK' // buttonName
        );
        };
        }
        }, false);
    */
    /* ---------------------------------- Local Functions ---------------------------------- */
    function findByFirstName() {
        var _firstName = $.trim($('.search-key1').val());
        if (_firstName.length >= 2 || _firstName.length >= 2) {
            service.findByFirstName($.trim($('.search-key1').val())).done(function (employees) {
                var l = employees.length;
                var e;
                $('.employee-list').empty();
                for (var i = 0; i < l; i++) {
                    e = employees[i];
                    $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
                }
            });
        } else {
            $('.employee-list').empty();
        }
    }

    function findByLastName() {
        var _lastName = $.trim($('.search-key2').val());
        if (_lastName.length >= 2 || _lastName.length >= 2) {
            service.findByLastName($.trim($('.search-key2').val())).done(function (employees) {
                var l = employees.length;
                var e;
                $('.employee-list').empty();
                for (var i = 0; i < l; i++) {
                    e = employees[i];
                    $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
                }
            });
        } else {
             $('.employee-list').empty();
        }
        
    }

}());