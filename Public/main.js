define([
    'jquery',
    'underscore',
    'backbone',
    './apps/menu/views/main'
], function ($, _, Backbone, MenuView) {
    var main = {
        init: function () {
            var base = this;

            base.menu_view = new MenuView();
            $("#top_content").append(base.menu_view.$el);
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
        }
    };
    return main;
});