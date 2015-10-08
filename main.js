if (Meteor.isClient) {


  Template.tagline_banner.helpers({

    "isHome": function () {
      if (FlowRouter.getQueryParam("view") || FlowRouter.getParam("_id")) {
        return false;
      } else {
        return true;
      }
    }

  });


  Telescope.modules.remove("postHeading", "post_domain");

  Telescope.modules.add("postMeta", {
    template: "post_domain",
    order: 2
  });

  Telescope.modules.remove("postHeading", "post_categories");

  Telescope.modules.add("postMeta", {
    template: "post_categories",
    order: 1
  });

  $(window).scroll(function (e) {
    $("body").css({"background-position": $("body").scrollTop()/12 + "% center"})
  });


}
