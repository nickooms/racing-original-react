chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('cubes.htm', {
    'bounds': {
      //'width': 600,
      //'height': 600
    }
  }, function(w) {
  	w.maximize();
  });
});