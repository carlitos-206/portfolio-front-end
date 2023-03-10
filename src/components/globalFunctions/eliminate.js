export default function eliminatePrivileges(){
  localStorage.setItem('blocked', 'true')
  sessionStorage.setItem('blocked', 'true')
  document.cookie = "blocked=True; expires=Fri, 01 Jan 2049 00:00:00 UTC;"
}