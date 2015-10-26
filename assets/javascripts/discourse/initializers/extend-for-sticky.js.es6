import ApplicationView from 'discourse/views/application';
import DiscoveryCategorysView from 'discourse/views/discovery-categories';
import DiscoveryTopicsView from 'discourse/views/discovery-topics';
import TopicView from 'discourse/views/topic';
import PostView from 'discourse/views/post';

export default {
  name: 'extend-for-sticky',
  initialize() {

    const stickFooter = function (footer, container) {
      let $footer = $(footer),
        footerHeight = $footer.outerHeight(),
        footerOffset = $footer.offset(),
        footerBottom;

      if (footerOffset) {
        footerBottom = footerHeight + footerOffset.top;

        if (footerBottom <= $(window).height()) {
          $footer.css({
            'position': 'fixed',
            'left': 0,
            'right': 0,
            'bottom': 0
          });
          // In case the window is resized upwards
          $(container).css('padding-bottom', footerHeight + "px");
        }
      }
    };

    const unstickFooter = function (footer, container) {
      $(footer).css('position', 'static');
      $(container).css('padding-bottom', 0);
    };

    const footerId = function(context) {
      return '#' + context.siteSettings.sticky_footer_id;
    };

    ApplicationView.reopen({
      stick: function () {
        Ember.run.scheduleOnce('afterRender', this, function () {
          stickFooter(footerId(this), '#main');
        });
      }.on('didInsertElement').observes('controller.currentPath'),

      unstick: function () {
        unstickFooter(footerId(this), '#main');
      }.on('willDestroyElement'),
    });

    DiscoveryCategorysView.reopen({
      stick: function () {
        Ember.run.scheduleOnce('afterRender', this, function () {
          stickFooter(footerId(this), '#main');
        });
      }.on('didInsertElement'),

      unstick: function () {
        unstickFooter(footerId(this), '#main');
      }.on('willDestroyElement'),
    });

    DiscoveryTopicsView.reopen({
      stick: function () {
        Ember.run.scheduleOnce('afterRender', this, function () {
          stickFooter(footerId(this), '#main');
        });
      }.on('didInsertElement'),

      unstick: function () {
        unstickFooter(footerId(this), '#main');
      }.on('willDestroyElement'),
    });

    TopicView.reopen({
      stick: function () {
        Ember.run.scheduleOnce('afterRender', this, function () {
          stickFooter(footerId(this), '#main');
        });
      }.on('didInsertElement'),

      unstick: function () {
        unstickFooter(footerId(this), '#main');
      }.on('willDestroyElement'),
    });

    PostView.reopen({
      stick: function () {
        Ember.run.scheduleOnce('afterRender', this, function () {
          stickFooter(footerId(this), '#main');
        });
      }.on('didInsertElement'),

      unstick: function () {
        unstickFooter(footerId(this), '#main');
      }.on('willDestroyElement'),
    });
  }
}