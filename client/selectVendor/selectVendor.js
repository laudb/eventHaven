Template.selectVendors.rendered = function() {
  if (!window.allScriptsLoaded) {
    var scripts = [
      // list of JS files to be loaded.
      // 'js/pace.min.js',
      'js/jquery-1.11.1.min.js',
      'js/modernizr.custom.js',
      'js/jquery-ui.min.js',
      'js/jquery-easy.js',
      'js/jquery.unveil.min.js',
      'js/jquery.bez.min.js',
      'js/jquery.ioslist.min.js',
      'js/jquery.actual.min.js',
      'js/jquery.scrollbar.min.js',
      'js/select2.min.js',
      'js/classie.js',
      'js/switchery.min.js',
      'js/d3.v3.js',
      'js/nv.d3.min.js',
      'js/utils.js',
      'js/tooltip.js',
      'js/interactiveLayer.js',
      'js/axis.js',
      'js/line.js',
      'js/lineWithFocusChart.js',
      'js/hammer.js',
      'js/jquery.mousewheel.js',
      'js/mapplic.js',
      'js/rickshaw.min.js',
      'js/MetroJs.min.js',
      'js/jquery.sparkline.min.js',
      'js/skycons.js',
      'js/pages.min.js',
      'js/dashboard.js',
      'js/scripts.js',
      'js/theme_switcher.js'
      ];

      function loadNext() {
        var src = scripts.shift();
        if (typeof src === 'undefined')
          return;

        var s = document.createElement("script");

        s.setAttribute('src', src);
        if (s.addEventListener) {
          s.addEventListener("load", loadNext, false);
        } else if (s.readyState) {
          s.onreadystatechange = loadNext;
        }
        document.body.appendChild(s);
      };

      loadNext();
      window.allScriptsLoaded = true;
    };

  }