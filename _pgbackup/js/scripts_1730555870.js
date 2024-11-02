/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
:root {
  --orange: hsl(26, 100%, 55%);
  --paleOrange: hsl(25, 100%, 94%);
  --veryDarkBlue: hsl(220, 13%, 13%);
  --darkGrayishBlue: hsl(219, 9%, 45%);
  --grayishBlue: hsl(220, 14%, 75%);
  --lightGrayishBlue: hsl(223, 64%, 98%);
  font-family: "Kumbh Sans", sans-serif;
  color: var(--veryDarkBlue);
}

a {
  text-decoration: none;
  font-size: 1rem;
  color: var(--veryDarkBlue);
  text-transform: capitalize;
}

button {
  background-color: transparent;
  border: none;
}
/*^ end of general styles */

/*^ start of common styles */
.header,
.account,
.navMenu,
.mainSec,
.priceInfo,
.salePrice,
.productNumber,
.imgControls,
.next,
.previous,
.cartInfo {
  display: flex;
  align-items: center;
}
.header,
.account,
.priceInfo,
.salePrice {
  column-gap: 1rem;
}

.cursorPointer {
  cursor: pointer;
}

.addToCart,
.badge {
  background-color: var(--orange);
  color: white;
}

.badge,
.navLink a,
.alert {
  font-weight: 500;
}

/*^ end of common styles */

/*^ start of header */
.header {
  padding: 1rem 0;
}

.container,
.mobContainer {
  max-width: 90%;
  margin: auto;
}

.mobMenuIcon img {
  width: 100%;
}
.mobMenuIcon {
  padding: 0.5rem 0;
}

.profilePic {
  width: 25%;
}
.cart {
  width: 20%;
  position: relative;
}
.profilePic img,
.cart img {
  width: 100%;
}

.logo img {
  width: 100%;
}
.account {
  margin-left: auto;
  justify-content: end;
}

.navMenu {
  list-style-type: none;
  background-color: var(--lightGrayishBlue);
  position: absolute;
  left: -100%;
  width: 100%;
  transition: left 500ms;
  flex-direction: column;
  row-gap: 3rem;
  justify-content: center;
  z-index: 999;
}

.navLink a {
  padding: 1rem;
  transition: color 300ms;
  font-size: 1.2rem;
  color: var(--darkGrayishBlue);
}

.navLink a:hover {
  color: var(--orange);
}

.badge {
  padding: 1px 7px;
  border-radius: 40%;
  position: absolute;
  right: -50%;
  top: -50%;
  font-size: 12px;
  display: none;
}

/*^ end of header */

/*^ start of main sec */
main {
  min-height: 80vh;
  padding-bottom: 70px;
}

.mainSec {
  flex-direction: column;
  row-gap: 1.5rem;
}

.productImgs,
.productImgs img {
  width: 100%;
}

.productTitle,
.productDesc,
.priceInfo {
  margin-bottom: 1.2rem;
}

.productHeadline,
.sale,
.plus,
.minus {
  color: var(--orange);
}

.productTitle,
.currentPrice {
  font-size: calc(1.5rem + 0.3vw);
}

.currentPrice,
.originalPrice,
.sale,
.plus,
.minus,
.num,
.addToCart {
  font-weight: 700;
}

.productNumber,
.sale,
.addToCart {
  border-radius: 10px;
}

.productImgs {
  position: relative;
}

.imgControls,
.controls {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: space-between;
  padding: 0 10px;
}

.next,
.previous {
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: white;
  border-radius: 50%;
  justify-content: center;
}

.imgControls img,
.controls img {
  width: 40%;
}

.productHeadline {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2.1;
  margin-bottom: 0.7rem;
}

.productTitle {
  color: var(--veryDarkBlue);
}

.productDesc {
  color: var(--darkGrayishBlue);
  line-height: 1.5;
}

.sale {
  background-color: var(--paleOrange);
  padding: 0.5rem;
}

.originalPrice {
  color: var(--grayishBlue);
  text-decoration: line-through;
}

.priceInfo {
  justify-content: space-between;
}

.cartInfo {
  flex-direction: column;
  row-gap: 1.2rem;
}

.productNumber {
  background-color: var(--lightGrayishBlue);
  padding: 0 1rem;
  justify-content: space-between;
}

.plus,
.minus {
  font-size: calc(1.7rem + 0.5vw);
  padding: 3px 0 10px 0;
}
.num {
  font-size: 1.1rem;
  padding: 5px 0;
}

.addToCart,
.productNumber {
  width: 100%;
}
.addToCart {
  padding: 0.75rem 0.5rem;
  font-size: 1rem;
  box-shadow: 0 30px 20px 0px var(--paleOrange);
}

.addToCart svg {
  margin-right: 0.7rem;
}

.otherImgs {
  display: none;
}

.alert {
  color: red;
  margin-top: 30px;
  font-size: 1.1rem;
}

.lightBox {
  display: none;
}

.alertBox {
  text-align: center;
}

/*^ end of main sec */

/*^ start of media query */
/* *mob menu */
@media screen and (min-width: 768px) {
  header {
    padding: 1.1rem 0;
  }
  .container {
    max-width: 85%;
  }
  .mobMenuIcon {
    display: none;
  }

  .navMenu {
    background-color: transparent;
    position: static;
    width: 100%;
    flex-direction: row;
    column-gap: 0.5rem;
    justify-content: space-between;
  }

  .logo {
    order: -1;
  }

  .header {
    column-gap: 1.5rem;
  }

  .navLink a {
    padding: 0.5rem;
    font-size: 1rem;
  }
}
@media screen and (min-width: 992px) {
  header {
    padding: 0.4rem 0;
  }
  .container {
    max-width: 80%;
  }

  .navMenu {
    column-gap: 1rem;
  }

  .header {
    column-gap: 3rem;
  }

  .navLink a {
    font-size: 1.1rem;
  }
  .profilePic {
    width: 25%;
  }

  .cart {
    width: 15%;
  }

  .account {
    column-gap: 2.5rem;
  }

  .mainSec {
    flex-direction: row;
    column-gap: 5rem;
    justify-content: space-between;
  }

  .currentImg img,
  .otherImgs img,
  .otherImgs .layer {
    border-radius: 10px;
  }

  main {
    border-top: 1px solid var(--grayishBlue);
    max-width: 80%;
    margin: 10px auto;
    padding: 90px 0;
  }

  .secContainer {
    max-width: 88%;
    margin: 0 auto;
  }

  .mobContainer {
    width: 100%;
  }

  main .productImgs {
    width: calc((100% / 3) * 1.3 - 0.5rem);
  }
  .productInfo {
    width: calc((100% / 3) * 1.7 - 0.5rem);
  }

  .cartInfo {
    flex-direction: row;
    justify-content: center;
  }

  .productNumber {
    width: calc(40% - 0.5rem);
  }
  .addToCart {
    width: calc(60% - 0.5rem);
  }

  .imgControls {
    display: none;
  }

  .cartInfo,
  .otherImgs {
    column-gap: 1rem;
  }

  .productTitle {
    font-size: calc(2rem + 0.5vw);
    margin: 1rem 0 1.5rem 0;
  }

  .productDesc {
    margin-bottom: 1.5rem;
  }

  .otherImgs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .otherImgs .img {
    position: relative;
    width: calc(100% / 4);
  }
  .otherImgs img {
    width: 100%;
    max-height: 80px;
  }

  .otherImgs .layer {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
    border: 2px solid var(--orange);
  }

  .priceInfo {
    flex-direction: column;
    align-items: start;
    row-gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .currentImg img {
    max-height: 400px;
  }

  /* ?start of lightBox */
  .lightBox {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
  }

  .closeIcon svg {
    width: 15px;
  }

  .closeIcon {
    text-align: end;
    padding: 10px 5px;
    margin-bottom: 5px;
  }

  .lightBox .modal {
    width: 30%;
  }

  .lightBox .productImgs .currentImg {
    position: relative;
  }

  .lightBox,
  .controls {
    align-items: center;
  }
  .lightBox {
    justify-content: center;
  }
  .controls {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  .controls .previous {
    transform: translateX(-50%);
  }

  .controls .next {
    transform: translateX(50%);
  }