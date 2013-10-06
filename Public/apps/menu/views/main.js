define([
    'jquery',
    'underscore',
    'backbone',
    'text!../templates/menu_template.html'
], function ($, _, Backbone, menu_template) {
    var View = Backbone.View.extend({
        tagName: "div",
        className: "apps_menu",
        initialize: function () {
            var base = this;
        },
        init: function () {
            var base = this;

            base.render();
            base.registerEvents();
        },
        render: function () {
            var base = this;

            var template = _.template(menu_template, {});
            base.$el.html(template);

            var apps = SmartBlocks.Data.apps;
            for (var k in apps.models) {
                var app = apps.models[k];
                if (app.get("token") != "app_organizer")
                    base.$el.find(".apps_menu_container").append('<li class="app_link"><a href="#' + app.get('token') + '">' + app.get('name') + '</a></li>');
            }
        },
        show: function () {
            var base = this;
            base.$el.animate({
                width: 250
            }, 200);
            $("body").animate({
                'left': 250
            }, 200);
        },
        hide: function () {
            var base = this;
            base.$el.animate({
                width: 0
            }, 200);

            $("body").animate({
                'left': 0
            }, 200, function () {
                $("body").css("position", "relative");
                $("body").css("overflow", "hidden");
            });
        },
        registerEvents: function () {
            var base = this;
            base.$el.delegate("a", "click", function (e) {
                e.preventDefault();
                var elt = $(this);
                window.location = elt.attr("href");
            });

            base.$el.delegate(".button", "click", function () {
                if (base.$el.width() > 10) {
                    base.hide();
                } else {
                    base.show();
                }
            });
        }
    });

    return View;
});