const webSQL = require('websql')

export function eliminatePrivileges(){
  localStorage.setItem('blocked', 'true')
  sessionStorage.setItem('blocked', 'true')
  document.cookie = "blocked=True; expires=Fri, 01 Jan 2049 00:00:00 UTC;"


// // webSQL not possible in react.js must use nodeJS api
//   // creates the db
//               //  DB name   version  description    memory alocation 
//   let db = webSQL('blocked.db', '1.0', 'blocked', 5 * 1024 * 1024 )

}