Template.index.rendered = function() {
  if (!window.allScriptsLoaded) {
    var scripts = [
      // list of JS files to be loaded.
      'js/jquery.js',
      'js/main.js',
      '/script.js'
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
