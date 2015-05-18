var page = require('webpage').create();

page.open('http://127.0.0.1:7000/test.html', function(status) {
  console.log("status: " + status);

  // Render
  if(status === "success") {
    page.render('testlogs/test_html.png');
  }

  // Check title
  var title = page.evaluate(function() {
    return document.title;
  });

  console.log('Page title is ' + title);
  phantom.exit();
});
