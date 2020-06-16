$(document).foundation()

$('#offCanvas li a').click(() => {
  $('#offCanvas').foundation('close')
})

var elem = new Foundation.SmoothScroll(element, options);

$('#element').foundation('scrollToLoc', loc, options, callback);
