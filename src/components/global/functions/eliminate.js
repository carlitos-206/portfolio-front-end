export default async function eliminatePrivileges(){
  localStorage.setItem('blocked', 'true')
  sessionStorage.setItem('blocked', 'true')
  document.cookie = "blocked=true; expires=Fri, 01 Jan 2049 00:00:00 UTC;"
}