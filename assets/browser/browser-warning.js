/**
 * This file is supposed to show user a page describing why they can't use the application in old IEs.
 */
(function(global) {

    'use strict';

    var html = [];

    html.push('<div class="browser-wrapper">');
    html.push('<h1>Your browser is not supported.</h1>');
    html.push('<h3>Please update to a more recent one.</h3>');

    html.push('<ul>');
    html.push('<li><a href="http://www.google.com/chrome">Google Chrome</a></li>');
    html.push('<li><a href="http://www.firefox.com/">Mozilla Firefox</a></li>');
    html.push('<li><a href="http://www.apple.com/safari/">Safari</a></li>');
    html.push('<li><a href="http://www.opera.com/">Opera</a></li>');
    html.push('<li><a href="http://windows.microsoft.com/ie">Internet Explorer</a></li>');
    html.push('</ul>');

    global.document.body.innerHTML = html.join('');

}(this));