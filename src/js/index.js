"use strict";
import ConsoleLog from './ConsoleLog.js';
import alertMe from "./AlertMe";
import * as url from "url";
import * as URL from "url";

(function () {
    alertMe('Kevin');
    ConsoleLog(document);
    window.onload = function () {

        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const heading_text = document.createTextNode("Click to chang Ocean box shape");
        const heading2 = document.createElement("h1");
        const heading_text2 = document.createTextNode("Click to delete boxes");
        heading.appendChild(heading_text);
        heading.style.color = "green";
        document.body.appendChild(heading);
        heading2.appendChild(heading_text2);
        document.body.appendChild(heading2);
        heading2.style.color = "red";
        heading2.style.border = "solid 1px black";
        const boxes = document.getElementById("boxes");
        const box1 = document.getElementById("box1");
        const box2 = document.getElementById("box2");
        const box3 = document.getElementById("box3");
        const heading3 = document.createElement("h1");
        const heading_text3 = document.createTextNode("Reset");
        heading3.appendChild(heading_text3);
        document.body.appendChild(heading3)

        heading2.onclick = function () {
            boxes.style.display = "none";
            heading2.innerText = "Deleted boxes";
        };



        heading.onclick = function () {
            heading2.innerText = "Click to delete boxes";
            boxes.style.display = "block";

        };

        heading3.onclick = function () {

            boxes.style.display = "grid";
            boxes.style.backgroundColor = "white";

        };

        boxes.onclick = function () {
            boxes.style.backgroundColor = 'Black';
        }


    }


})();
/*


 */

