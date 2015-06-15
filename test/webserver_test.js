var page = require('webpage').create();
var system = require('system');

function fail() {
  phantom.exit(1);
}

page.open('http://127.0.0.1:7000/test.html', function(status) {
  console.log("status: " + status);

  // Render
  if(status === "success") {
    console.log("success");
  } else {
    fail();
  }
  
  page.render('testlogs/test_html.png');

  // Check title
  var title = page.evaluate(function() {
    return document.title;
  });

  console.log('Page title is ' + title);
  
  // exit

  phantom.exit(0);
});
