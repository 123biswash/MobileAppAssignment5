//origShrijan
// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope


(function () {
    /* ---------------------------------- Local Variables ---------------------------------- */
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeListTpl= Handlebars.compile($("#employee-list-tpl").html());
    var service = new EmployeeService();
    service.initialize().done(function () {
        renderHomeView();
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
        //if (_firstName.length >= 2 || _firstName.length >= 2) {
            service.findByFirstName($.trim($('.search-key1').val())).done(function (employees) {
                $('.content').html(employeeListTpl(employees));
                var no_of_emp = Object.keys(employees).length;
                if (no_of_emp==0){
                    $("<h4>", {text: "No employees found "}).appendTo("#no_of_results");
                }else{
                $("<h4>", {text: "no of results: " + no_of_emp}).appendTo("#no_of_results");
                }
            });
        //} else {
            //$(homeTpl.content).empty();
        //}
    }

    function findByLastName() {
        var _lastName = $.trim($('.search-key2').val());
        //if (_lastName.length >= 2 || _lastName.length >= 2) {
            service.findByLastName($.trim($('.search-key2').val())).done(function (employees) {
                $('.content').html(employeeListTpl(employees));
                var no_of_emp = Object.keys(employees).length;
                if (no_of_emp==0){
                    $("<h4>", {text: "No employees found "}).appendTo("#no_of_results");
                }else{
                $("<h4>", {text: "no of results: " + no_of_emp}).appendTo("#no_of_results");
                }
            });
       //} else {
            //$(homeTpl.content).empty();
        //}
        
    }
    

    function renderHomeView() {
   
    $('body').html(homeTpl());
    $('.search-key1').on('keyup', findByFirstName);
    $('.search-key2').on('keyup', findByLastName);
    }

}());