import ApplicationView from 'discourse/views/application';
import DiscoveryCategorysView from 'discourse/views/discovery-categories';
import DiscoveryTopicsView from 'discourse/views/discovery-topics';
import CloakedView from 'discourse/views/cloaked';
import LoadingView from 'discourse/views/loading';
import HeaderView from 'discourse/views/header'

export default {
  name: 'extend-for-sticky',
  initialize() {

    const stickFooter = function(footer) {
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
        stickFooter('#' + this.siteSettings.sticky_footer_id);
      },
      pathChanged: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          stickFooter('#' + this.siteSettings.sticky_footer_id);
        });
      }.observes('controller.currentPath', 'controller.model')
    });

    DiscoveryCategorysView.reopen({
      didInsertElement: function() {
        this._super();
        stickFooter('#' + this.siteSettings.sticky_footer_id);
      },
      pathChanged: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          stickFooter('#' + this.siteSettings.sticky_footer_id);
        });
      }.observes('controller.currentPath', 'controller.model')
    });

    DiscoveryTopicsView.reopen({
      didInsertElement: function() {
        this._super();
        stickFooter('#' + this.siteSettings.sticky_footer_id);
      },
      pathChanged: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          stickFooter('#' + this.siteSettings.sticky_footer_id);
        });
      }.observes('controller.currentPath', 'controller.model')
    });

    CloakedView.reopen({
      didInsertElement: function() {
        this._super();
        stickFooter('#' + this.siteSettings.sticky_footer_id);
      },
      pathChanged: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          stickFooter('#' + this.siteSettings.sticky_footer_id);
        });
      }.observes('controller.currentPath', 'controller.model')
    });


    LoadingView.reopen({
      didInsertElement: function() {
        this._super();
        stickFooter('#' + this.siteSettings.sticky_footer_id);
      },
      pathChanged: function() {
        Ember.run.scheduleOnce('beforeRender', this, function() {
          console.log('this is from the loading view change');
          stickFooter('#' + this.siteSettings.sticky_footer_id);
        });
      }.observes('controller.currentPath', 'controller.model')
    });
  }
}