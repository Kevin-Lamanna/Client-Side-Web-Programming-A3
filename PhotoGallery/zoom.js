/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: Kevin Lamanna
 *    Date:   2022/06/25

 *    Filename: zoom.js
 */

"use strict";

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";
var favouritesCount = 0;

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
   addFavouriteListener();
}

// Close Window
function closeWin() {
   window.close();
}

// Event listener for the close button
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
      closeWindowDiv.addEventListener("click", closeWin, false);
   }
   else if (closeWindowDiv.attachEvent) {
      closeWindowDiv.attachEvent("onclick", closeWin);
   }
}

var newFavPic;
// Favourites
function addFavourite() {  
   if (window.opener.favouritesCount < 5 && favouritesCount < 5)
   {
      window.opener.favouritesCount++;
      favouritesCount++;

      // Add the favourite pic to the DOM of photo.htm
      
      window.opener.imgsrc = "images/IMG_0" + photoOrderArray[2] + ".jpg";
      
      //document.querySelector('.favourites').appendChild(newFavPic);
      window.opener.newFavourite();
   }
   else
   {
      window.alert("Remove at least one favourite first");
   }
}

// Event listener for the add to favourites button
function addFavouriteListener()
{
   var favouriteButton = document.getElementsByTagName("button")[0];
   if (favouriteButton.addEventListener) {
      favouriteButton.addEventListener("click", addFavourite, false);
   }
   else if (favouriteButton.attachEvent) {
      favouriteButton.attachEvent("onlick", addFavourite);
   }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;