import {addDoc, collection} from 'firebase/firestore';
import { db } from './firebaseAuth';

export const contactFormSendOff = async (contactForm) =>{
  const docRef = collection(db, 'contact_arrival' )
  const data = {
    email: contactForm.email,
    message: contactForm.message,
    name: contactForm.name,
    timeStamp: new Date().toISOString()
  }
  await addDoc(docRef, data)
  return true
}

export const aiImgPromptSendOff = async (prompt) =>{
  const docRef = collection(db, 'ai_img_prompt' )
  const data = {
    prompt: prompt,
    timeStamp: new Date().toISOString()
  }
  await addDoc(docRef, data)
  return true
}

export const policyViolation = async (prompt) =>{
  let dataCollection = JSON.parse(sessionStorage.getItem('data'))
  console.log(JSON.stringify(dataCollection))
  let data = {
    prompt: prompt,
    data: dataCollection,
    timeStamp: new Date().toISOString()
  }
  const docRef = collection(db, 'policy_violation')
  await addDoc(docRef, data)
}