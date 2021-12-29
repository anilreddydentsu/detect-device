const MobileDetect = require('mobile-detect');
var md = new MobileDetect(window.navigator.userAgent);
alert(md.phone());