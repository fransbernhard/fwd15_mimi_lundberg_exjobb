module.exports = function (casper, scenario, vp) {
  casper.evaluate(function () {
    // Your web-app is now loaded. Edit here to simulate user interacions or other state changes.
  });
  console.log('onReady.js has run for: ', vp.name);

  // var email = 'alsdjkfkasjdfkj' + Math.floor((Math.random() * 100000) + 1) + '@gmail.com'
  casper.fillSelectors('form', {
    'input[placeholder= "email"]': 'email@email.com',
    'textarea[placeholder= "meddelande"]': 'hej jag är ett testmejl',
  }, true)
};
