// This File holds all the functions for Firebase Send Offs

// Firebase Imports
import {addDoc, collection} from 'firebase/firestore';
import { db } from './firebaseAuth';

// NPM Imports
import { v4 as uuidv4 } from 'uuid'

// Custom Imports
import { PolicyViolationCollection } from '../files/violationCollection';

// This function records the contact form
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

// This function records the prompts by users
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

// This function records the Policy violation 
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

// This function will log the users IP and deny any future request
export const terminationSendOff = async () =>{
    let dataCollection = JSON.parse(sessionStorage.getItem('data'))
    let incidentId = uuidv4()
    const docRef = collection(db, 'blocked_ip')
    try{
      const data = {
        id: incidentId,
        ip: dataCollection.location.ip,
        dataCollection: dataCollection,
        timeStamp: new Date().toISOString()
      }
      await addDoc(docRef, data)
      return true
    }catch(error){
      return false 
    }
}