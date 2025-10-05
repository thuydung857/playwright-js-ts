//Exercise
//Bai1
const productInfo_text = "SKU: APL-IP15-BLK | Tình trạng: Còn hàng (5 sản phẩm)";

let productID = productInfo_text.replace(': ', " (").replace(' | Tình trạng: Còn hàng (5 sản phẩm)', "") + ')'
let start = productInfo_text.indexOf(' (') + 2
let end = productInfo_text.indexOf(' s')
let productQuantity = productInfo_text.slice(start, end)

console.log(`Product ID is ${productID}, and product quantity is ${productQuantity}`)

//Bai 2
const productTitle_UI = "  Apple iPhone 15 Pro Max - 256GB (Blue Titanium)  ";
const brandName_API = "apple";
const skuCode = "SKU#8825-A5";
// expected = apple-iphone-15-pro-max-256gb-blue-titanium_sku-8825a5

let productTitleLowercase = productTitle_UI.toLocaleLowerCase().trim().replaceAll(' ', "-").replace('---', "-").replace('(', "").replace(')', "")
let start1 = productTitleLowercase.indexOf('e-')+2
let end1 = productTitleLowercase.indexOf('um')+2
let productTitle = productTitleLowercase.slice(start1, end1)
let skuCodeConverted = skuCode.toLowerCase().replace('-',"").replace('#',"-")

console.log(`Production ID is ${brandName_API}-${productTitle}_${skuCodeConverted}`)

