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
                    base.menu_view.hide(function () {
                        $('.show_left_menu_button').html('<i class="fa  fa-caret-square-o-right"></i>');
                    });
                } else {
                    base.menu_view.show(function () {
                        $('.show_left_menu_button').html('<i class="fa  fa-caret-square-o-left"></i>');
                    });
                }
            });
            $('body').delegate('.show_left_menu_button', 'click', function () {
                if (base.menu_view.$el.width() > 10) {
                    base.menu_view.hide(function () {
                        $('.show_left_menu_button').html('<i class="fa  fa-caret-square-o-right"></i>');
                    });
                } else {
                    base.menu_view.show(function () {
                        $('.show_left_menu_button').html('<i class="fa  fa-caret-square-o-left"></i>');
                    });
                }
            });
        },
        launch_organizer: function (app) {
            var base = this;
            var dashboard = new Dashboard();
            SmartBlocks.Methods.render(dashboard.$el);
            dashboard.init(app);
        },
        showMenu: function () {
            var base = this;
            base.menu_view.show();
        },
        toggleMenu: function () {
            var base = this;
            if (base.menu_view.$el.width() > 10) {
                base.menu_view.hide();
            } else {
                base.menu_view.show();
            }
        }
    };
    return main;
});