function jsonp(url, callback, callbackname) {
var el = document.createElement('script');
// 用到返回的call名字
window[callbackname] = function(data) {
callback(data)
document.body.removeChild(el)
}
el.src = url;
document.body.appendChild(el)
}
export default jsonp;
// demo
/* var url = 'https://h5api.m.tmall.com/h5/mtop.tmall.supermarket.itempromotion.get/1.0/
?
 jsv=2.4.8&appKey=12574478&t=1510717156274&sign=24e770dfa98a7f3541e17afeecde9ac1&api=mtop.tmall.supermarket.itempromotion.get&AntiCreep=true&v=1.0&type=jsonp&dataType=jsonp&callback=mtopjsonp16&data=%7B%22itemIds%22%3A%22537668615233%2C14313684513%2C530435938954%2C41018401179%2C547746784042%2C523374121465%2C523022301088%2C20263873324%2C39859825663%2C524825958240%2C541971437810%2C534921738993%2C37348244535%2C533148975516%2C20251586460%2C541955453529%2C44126168670%2C523216956192%2C531176938603%2C524512535086%22%2C%22smAreaId%22%3A110100%2C%22device%22%3A%22wap%22%2C%22option%22%3A%22price%22%2C%22source%22%3A%22channel_industry_market%22%7D';
jsonp(url, function(data) {
console.log(data)
vm.goods_list = data.data.result
    }, 'mtopjsonp16') */
