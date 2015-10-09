import ApplicationView from 'discourse/views/application';
import DiscoveryCategorysView from 'discourse/views/discovery-categories';
import DiscoveryTopicsView from 'discourse/views/discovery-topics';
import CloakedView from 'discourse/views/cloaked';

export default {
  name: 'extend-for-sticky',
  initialize() {

    const stickFooter = function() {
      let $footer = $('#sticky-footer'),
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
          $('#main').css('padding-bottom', footerHeight + "px");
        } else {
          $footer.css('position', 'static');
          $('#main').css('padding-bottom', 0);
        }
      }
    };

    ApplicationView.reopen({
      didInsertElement: function() {
        this._super();
        stickFooter();
      },
      pathChanged: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          stickFooter();
        });
      }.observes('controller.currentPath', 'controller.model')
    });

    DiscoveryCategorysView.reopen({
      didInsertElement: function() {
        this._super();
        stickFooter();
      },
      pathChanged: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          stickFooter();
        });
      }.observes('controller.currentPath', 'controller.model')
    });

    DiscoveryTopicsView.reopen({
      didInsertElement: function() {
        this._super();
        stickFooter();
      },
      pathChanged: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          stickFooter();
        });
      }.observes('controller.currentPath', 'controller.model')
    });

    CloakedView.reopen({
      didInsertElement: function() {
        this._super();
        stickFooter();
      },
      pathChanged: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          stickFooter();
        });
      }.observes('controller.currentPath', 'controller.model')
    });
  }
}