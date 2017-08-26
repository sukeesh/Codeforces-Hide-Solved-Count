// ==UserScript==
// @name         Codeforces
// @namespace    http://codeforces.com
// @version      0.1
// @description  try to take over the world!
// @author       Sukeesh
// @match        http://codeforces.com/problemset
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   var x = document.getElementsByTagName("a");
   var y = "<img style=\"vertical-align:middle\"src=\"http://st.codeforces.com/s/49688/images/icons/user.png\">&nbsp\;You can Solve!";
   var i;
    for ( i = 0 ; i < x.length ; i ++ ){
        console.log(x[i]);
        if(x[i].title == "Participants solved the problem"){
            x[i].innerHTML = y;
        }
    }
})();