// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template= Handlebars.compile($("#home-tpl").html());
    SearchByNameView.prototype.template=Handlebars.compile($("#name-tpl").html());
    SearchByDepartmentTitleView.prototype.template=Handlebars.compile($("#department-tpl").html());
    EmployeeListView.prototype.template= Handlebars.compile($("#employee-list-tpl").html());
    EmployeeView.prototype.template = Handlebars.compile($("#employee-tpl").html());
    var service = new EmployeeService();
    service.initialize().done(function () {
    router.addRoute('', function() {
    $('body').html(new HomeView(service).render().$el);
    });
    router.addRoute('nameRoute/:name-view', function() {
     $('body').html(new SearchByNameView(service).render().$el);
    
    });
    router.addRoute('DTRoute/:dep-title-view', function() {
    $('body').html(new SearchByDepartmentTitleView(service).render().$el);
    });
    
    router.addRoute('employees/:id', function(id) {
    service.findById(parseInt(id)).done(function(employee) {
    $('body').html(new EmployeeView(employee).render().$el);

    });
    });
    router.start();
    });

    // /* --------------------------------- Event Registration -------------------------------- */
    // $('.search-key').on('keyup', findByName);
    // $('.help-btn').on('click', function() {
    //     alert("Employee Directory v3.4");
    // });

    // /* ---------------------------------- Local Functions ---------------------------------- */
    // function findByName() {
    //     service.findByName($('.search-key').val()).done(function (employees) {
    //         var l = employees.length;
    //         var e;
    //         $('.employee-list').empty();
    //         for (var i = 0; i < l; i++) {
    //             e = employees[i];
    //             $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
    //         }
    //     });
    // }

}());