import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './firebaseAuth';


// this function checks if the IP has been banned
export const isBannedIP = async (ip) =>{
  const q = query(collection(db, "blocked_ip"), where("ip", "==", ip));
  const querySnapshot = await getDocs(q);
  if(querySnapshot.length > 0){
    return true
  }
  return false
}
