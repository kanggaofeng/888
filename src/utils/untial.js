export function tojsonstr(target) {
    return JSON.stringify(target)
}
export function tojsonobj(params) {
    return JSON.parse(params)
}
export function getCook_key(keyname) {
    var str = document.cookie
    var arr = str.split('; ')
    var brr = []
    arr.forEach((item, ind) => {
        if (item.indexOf(keyname) != -1) {
            brr = item.split('=');
        }
    })
    return brr[1]

}
export function setCookie(keyname, val) {
    document.cookie = keyname + '=' + val
}