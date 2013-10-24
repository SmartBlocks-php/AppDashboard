define([
    'jquery',
    'underscore',
    'backbone',
    './apps/menu/views/main',
    './apps/dashboard/Views/Dashboard'
], function ($, _, Backbone, MenuView, Dashboard) {
    var main = {
        init: function () {
            var base = this;

            base.menu_view = new MenuView();
            $("body").prepend(base.menu_view.$el);
            base.menu_view.init();

            SmartBlocks.Shortcuts.add([
                27
            ], function () {
                if (base.menu_view.$el.width() > 10) {
                    base.menu_view.hide();
                } else {
                    base.menu_view.show();
                }
            });
        },
        launch_organizer: function (app) {
            var base = this;
            var dashboard = new Dashboard();
            SmartBlocks.Methods.render(dashboard.$el);
            dashboard.init(app);
        }
    };
    return main;
});