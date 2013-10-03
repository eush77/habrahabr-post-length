// ==UserScript==
// @name        Habrahabr: Post Length
// @version     0.1
// @description Prepends window title with post length.
// @include     http://habrahabr.ru/post/*/
// @include     http://habrahabr.ru/company/*/blog/*/
// ==/UserScript==

!function() {
    var post = document.getElementsByClassName('post')[0];
    var length = document.getElementsByClassName('infopanel_wrapper')[0].offsetTop;
    document.title = '[' + length + '] ' + document.title;
}();
