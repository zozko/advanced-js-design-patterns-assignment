const UI = (() => {

  // this is basically our configuration,
  // the part that might have to change when the HTML changes:
  // gathering the selectors for the elements we will be working with
  const productImageSelector = ".js-product-image";
  const productNameSelector = ".js-product-name";
  const productCategorySelector = ".js-product-category";
  const productDescriptionSelector = ".js-product-description";
  const productPriceSelector = ".js-product-price";

  // using the selectors above, we store the elements in private variables
  const productImageElement = document.querySelector(productImageSelector);
  const productNameElement = document.querySelector(productNameSelector);
  const productCategoryElement = document.querySelector(productCategorySelector);
  const productDescriptionElement = document.querySelector(productDescriptionSelector);
  const productPriceElement = document.querySelector(productPriceSelector);

  // this is the public API for our UI module:
  // methods to change the UI by only changing the
  // content of the privately stored elements
  return {
    setProductImage: (src) => {
      productImageElement.src = src;
    },
    setProductName: (name) => {
      productNameElement.textContent = name;
    },
    setProductCategory: (category) => {
      productCategoryElement.textContent = category;
    },
    setProductDescription: (description) => {
      productDescriptionElement.textContent = description;
    },
    setProductPrice: (price) => {
      productPriceElement.textContent = `€${price}`;
    },
  }

})();

UI.setProductName("test!");
