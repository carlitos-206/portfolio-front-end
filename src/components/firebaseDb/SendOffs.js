import {addDoc, collection} from 'firebase/firestore';
import { PolicyViolationCollection } from '../files/violationCollection';
import { db } from './firebaseAuth';
import { v4 as uuidv4 } from 'uuid'

export const contactFormSendOff = async (contactForm) =>{
  const docRef = collection(db, 'contactRequest' )
  const data = {
    id: uuidv4(),
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
    id: uuidv4(),
    prompt: prompt,
    timeStamp: new Date().toISOString()
  }
  await addDoc(docRef, data)
  return true
}

export const policyViolation = async (prompt) =>{
  let dataCollection = JSON.parse(sessionStorage.getItem('data'))
    let incidentId = uuidv4()
  if(prompt === null){
    return;
  }else if(dataCollection === null){
    await PolicyViolationCollection()
    dataCollection = JSON.parse(sessionStorage.getItem('data'))
    let data = {
      id: incidentId,
      prompt: prompt,
      data: dataCollection,
      timeStamp: new Date().toISOString()
    }
    const docRef = collection(db, 'policy_violation')
    await addDoc(docRef, data)
    return incidentId
  }else{
    let data = {
      id: incidentId,
      prompt: prompt,
      data: dataCollection,
      timeStamp: new Date().toISOString()
    }
    const docRef = collection(db, 'policy_violation')
    await addDoc(docRef, data)
    return incidentId
  }
}