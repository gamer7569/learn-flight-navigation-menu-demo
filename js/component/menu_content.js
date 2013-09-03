define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuContent);

  function menuContent() {
    this.setText = function (e, data) {
      this.$node.html(data.value);
    }

    this.after('initialize', function () {
      this.on('uiMenuItemSelected', this.setText);
    });
  }
});