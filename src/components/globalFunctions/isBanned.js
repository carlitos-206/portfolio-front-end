import { isBannedIP } from "../firebaseDb/retrive";

export default async function isBanned(){
  
  const simpleCookieQuery = (cname) => {
    let name = cname + "=true";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return true
      }
    }
    return false;
  }
  
  let data = JSON.parse(localStorage.getItem('data'))
  if(data.ip){
    let fbIP = await isBannedIP(data.ip) 
    if(fbIP){
      return true
    }
  }
  let local = JSON.parse(localStorage.getItem('blocked'))
  let session = JSON.parse(sessionStorage.getItem('blocked'))
  if(local.blocked !== null || session.blocked !== null){
    return true
  }
  
  let cookie = await simpleCookieQuery('blocked')
  if(cookie === true){
    return true
  }

  return false
}