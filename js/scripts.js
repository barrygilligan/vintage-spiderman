/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
/*
steps:
   1. check if the cart is empty or not
   2. work on image controls   
   3. mobile navigation menu functionality
   4- work on image gallery on desktop
   5- work on image lightbox on desktop
   6- addToCart functionality
*/

"use strict";

// * step 1
const cartBadeg = document.querySelector(".cart .badge");
if (
  localStorage.getItem("productNum") &&
  +JSON.parse(localStorage.getItem("productNum")) != 0
) {
  cartBadeg.style.display = "inline";
  cartBadeg.textContent = JSON.parse(localStorage.getItem("productNum"));
}

// *step 2
const productImgs = document.querySelectorAll("main .pImg");
const currentImg = document.querySelector("main .currentImg img");
const prevBtn = document.querySelector("main .previous");
const nextBtn = document.querySelector("main .next");
let currentIndx = 0;

function getImg(indx, list, img) {
  if (currentIndx == list.length) {
    currentIndx = 0;
  } else if (currentIndx < 0) {
    currentIndx = list.length - 1;
  }
  img.src = list[currentIndx].src;
}

nextBtn.addEventListener("click", (e) => {
  getImg(currentIndx++, productImgs, currentImg);
});
prevBtn.addEventListener("click", (e) => {
  getImg(currentIndx--, productImgs, currentImg);
});

// *step 3
if (window.screen.width < 768) {
  const menuIcon = document.querySelector(".mobMenuIcon");
  const navMenu = document.querySelector(".navMenu");
  const header = document.querySelector("header");
  const mainSec = document.querySelector("main");

  navMenu.style.cssText = `left:-100%; top: ${header.clientHeight}px; min-height: calc(100vh - ${header.clientHeight}px)`;

  menuIcon.addEventListener("click", function (e) {
    if (this.classList.contains("closed")) {
      navMenu.style.cssText = `left:0%; top: ${header.clientHeight}px; min-height: calc(100vh - ${header.clientHeight}px)`;
      mainSec.style.display = "none";
      this.classList.toggle("closed");
    } else {
      navMenu.style.cssText = `left:-100%; top: ${header.clientHeight}px; min-height: calc(100vh - ${header.clientHeight}px)`;
      mainSec.style.display = "block";
      this.classList.toggle("closed");
    }
  });
} else {
  let imgIndex = 0;
  // ! functions declarations
  function hideLayers(secLayer) {
    secLayer.forEach((layer) => {
      layer.style.display = "none";
    });
  }

  function displayImg(list, secLayer, current) {
    list.forEach((img, indx) => {
      img.addEventListener("click", (e) => {
        current.src = img.src;
        imgIndex = indx;
        hideLayers(secLayer);
        secLayer[indx].style.display = "block";
      });
    });
  }

  // *step 4
  const layers = document.querySelectorAll(" main .otherImgs .layer");

  hideLayers(layers);
  layers[0].style.display = "block";

  displayImg(productImgs, layers, currentImg);

  // *step 5
  const lightBox = document.querySelector(".lightBox");
  const imgSec = document.querySelector(".lightBox .productImgs");
  const boxCurrentImg = document.querySelector(".lightBox .currentImg img");
  const boxImgs = document.querySelectorAll(".lightBox .boxImg ");
  const boxLayers = document.querySelectorAll(".lightBox .otherImgs .layer");
  const nextLightBtn = document.querySelector(".lightBox .next");
  const prevLightBtn = document.querySelector(".lightBox .previous");

  // ^ a. show & hide lightBox
  currentImg.addEventListener("click", (e) => {
    lightBox.style.display = "flex";
    boxCurrentImg.src = currentImg.src;
    currentIndx = imgIndex; //& to be used in displaying the corresponding boxLayer when clicking on next & prev btns
    hideLayers(boxLayers);
    boxLayers[imgIndex].style.display = "block";
    displayImg(boxImgs, boxLayers, boxCurrentImg);
  });

  lightBox.addEventListener("click", (e) => {
    lightBox.style.display = "none";
  });

  imgSec.addEventListener("click", (e) => {
    // & to not close the lighBox when user clicks on imgSec
    e.stopPropagation();
  });

  // ^ b. lightBox functionality
  nextLightBtn.addEventListener("click", (e) => {
    getImg(currentIndx++, boxImgs, boxCurrentImg);
    // & to display a layer on the currently active img only
    hideLayers(boxLayers);
    boxLayers[currentIndx].style.display = "block";
  });
  prevLightBtn.addEventListener("click", (e) => {
    getImg(currentIndx--, boxImgs, boxCurrentImg);
    // & to display a layer on the currently active img only
    hideLayers(boxLayers);
    boxLayers[currentIndx].style.display = "block";
  });
}

//* step 6
const addToCartBtn = document.querySelector(".addToCart");
const productNum = document.querySelector(".cartInfo .num");
const PlusBtn = document.querySelector(".cartInfo .plus");
const minusBtn = document.querySelector(".cartInfo .minus");
const alertPar = document.querySelector(".alert");

PlusBtn.addEventListener("click", (e) => {
  if (+productNum.textContent < 5) {
    productNum.textContent = +productNum.textContent + 1;
  } else {
    alertPar.textContent = `The maximum number you can add is 5`;
  }
});

minusBtn.addEventListener("click", (e) => {
  productNum.textContent = +productNum.textContent - 1;
  alertPar.textContent = ``;
  if (+productNum.textContent <= 0) {
    productNum.textContent = `0`;
  }
});

addToCartBtn.addEventListener("click", (e) => {
  cartBadeg.style.display = "inline";
  cartBadeg.textContent = productNum.textContent;
  localStorage.setItem("productNum", JSON.stringify(productNum.textContent));
});