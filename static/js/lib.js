function setCookie(key, value){
   document.cookie = key + "=" + value
}

function getCookie(sName){
  let aCookie = document.cookie.split('; ');
  for (let i = 0; i < aCookie.length; i++) {
    let aCrumb = aCookie[i].split('=');
    if (sName === aCrumb[0])
      return aCrumb[1];
  }
  return null;
}
function delCookie(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let val = getCookie(name);
  if (val != null) {
    document.cookie = name + '=' + val + ';expires=' + exp.toGMTString();
  }
}
function delAllCookie(){
  let myDate = new Date();
  myDate.setTime(-1000);//设置时间
  let data = document.cookie;
  let dataArray = data.split('; ');
  for (let i = 0; i < dataArray.length; i++) {
    let  varName = dataArray[i].split('=');
    document.cookie = varName[0] + '=\'\'; expires=' + myDate.toGMTString();
  }
}