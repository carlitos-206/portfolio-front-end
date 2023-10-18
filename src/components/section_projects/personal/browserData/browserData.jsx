import React  from "react";
import CarouselBuilder from "./carousel";
import { imgCollection } from "../../../../images/userAgentEmails/collection";
import img_0 from "../../../../images/userAgentEmails/firbaseCollection/img_0.png"
import Button from 'react-bootstrap/Button';
import {UserDataRetrival} from '../../../global/functions/userDataRetrival'
import "./browserData.css"

export default function BrowserData(){



// ***************************************************************************************************
// ***************                  ******************************************************************************
// ***************  ************    **********************************************************************
// ***************  ************    **********************************************************************
// ***************  ************    **********************************************************************
// ***************  *************    **********************************************************************
// ***************  **********     ************************************************************************
// ***************  **********  *************************************************************************
// ***************  ************     ***********************************************************************
// ***************  **************** *******************************************************************
// ***************  *************** *******************************************************************
// ***************                  **************** *******************************************************************


// data only shown if exist() in local storage if new user noShow()







  const showReflection = (e) =>{
    let isOpen = document.getElementsByClassName('bd_agreement_container')[0]
    if(isOpen == null){

    const mainDiv = document.getElementsByClassName('bd_container')[0]

    let container = document.createElement('div')
    container.className = 'bd_agreement_container'

    
    
    let title = document.createElement('p')
    title.className = 'bd_agreement_title'
    title.innerText = 'Information that will be retrieved'
    
    let body = document.createElement('div')
    body.className = 'bd_agreement_body'

    const agreementsArray = [
      'Device IP Adress', 
      'Browser Information:', 
      '- Browser Type and Version', 
      'Device Information', 
      '- Model', 
      "- Screen Width and Height",
      "- Type",
      "- Vendor",
      "Location",
      "- City",
      "- State/Province",
      "- Country",
      "- Postal Code"
    ]
    let text = document.createElement('p')
    text.className = 'bd_agreement_text'
    body.append(text)

    let counter = 0

    for(let i = 0; i < agreementsArray.length; i++){
      let agreementList = document.createElement('p')
      agreementList.className = 'bd_agreement_text'
      if(agreementsArray[i].startsWith('-')){
        agreementList.innerText = agreementsArray[i]
        agreementList.className = 'bd_agreement_text indent'
        body.append(agreementList)
      }else{
        counter+=1
        agreementList.innerText = `${counter}. ${agreementsArray[i]}`
        body.append(agreementList)

      }
    }

    let buttonGroup = document.createElement('div')
    buttonGroup.className = 'agreementButton_group'
    
    let button_cancel = document.createElement('button')
    button_cancel.className = 'bd_button_group glow-on-hover btn btn-danger'
    button_cancel.innerText ="Cancel"
    button_cancel.onclick = () => container.remove()
    buttonGroup.append(button_cancel)

    let button_view_only = document.createElement('button')
    button_view_only.className = 'bd_button_group glow-on-hover btn btn-warning'
    button_view_only.innerText = "View Only"
    
    UserDataRetrival()
    button_view_only.onclick = () =>{
      title.remove()
      body.remove()
      let newBody = document.createElement('div')
      newBody.className = 'bd_new_agreement_body'
      let data = JSON.parse(localStorage.getItem('data'))
      
      function iterateObject(obj, parentKey = '') {
        for (const key in obj) {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            let newtext = document.createElement('p')
            newtext.className = 'bd_newText'
            newtext.setAttribute('style', 'font-weight: bold; color: #ffcc00;')
            newtext.innerText = '\n' + key.toUpperCase() + ' \n'
            newBody.append(newtext)
            container.append(newBody)

            iterateObject(obj[key], parentKey + key + '.');
          } else {
            // console.log(parentKey + key + ': ' + obj[key]);
            let newtext = document.createElement('p')
            newtext.className = 'bd_newText indent'
            newtext.setAttribute('style', 'margin-left: 20px;')
            if(key === 'accuracy'){
              let map = document.createElement('a')
              map.href = `https://www.google.com/maps/search/?api=1&query=${obj['latitude']},${obj['longitude']}`
              map.target = 'popup'
              map.innerText = 'View on Map'
              map.onClick = () => {window.open(`https://www.google.com/maps/search/?api=1&query=${obj['latitude']},${obj['longitude']}`, 'popup', 'width=700,height=600')}

              newtext.innerText = '\n' + key + ': ' + obj[key] + 'm Radius\n'
              newtext.append(map)
              newBody.append(newtext)
              container.append(newBody)
            }else{
              newtext.innerText = '\n' + key + ': ' + obj[key] + '\n'
              newBody.append(newtext)
              container.append(newBody)
            }
          }
        }
      }
      
      iterateObject(data);
      console.log(data)
      // alert(JSON.stringify(data))
      let close = document.createElement('button')
      close.className= 'bd_button_group glow-on-hover btn btn-danger'
      close.innerText= 'Close'
      close.onclick = () => container.remove()

      let button_record = document.createElement('button')
      button_record.className = 'bd_button_group glow-on-hover btn btn-success'
      button_record.innerText = 'Allow Recording'
      button_record.onclick = () =>{alert('missing')}
      container.append(button_record)

      container.append(close)
    }
    
    
    buttonGroup.append(button_view_only)
    
    let button_record = document.createElement('button')
    button_record.className = 'bd_button_group glow-on-hover btn btn-success'
    button_record.innerText = 'View + Allow Recording'
    button_record.onclick = () =>{alert('missing')}
    buttonGroup.append(button_record)

    body.append(buttonGroup)
    body.append(title)
    container.append(body)
    container.append(title)
    mainDiv.append(container)
    }else{
      return
    }
  }

  const openPopUp = (e, source)=>{
    if(source === 'portfolio'){
      window.open('https://github.com/carlitos-206/mainPortfolio/blob/Main/portfolioAPP/views.py', 'popup', 'width=700,height=600')
    }
    if(source === 'auxScript'){
      window.open('https://github.com/carlitos-206/useragent-Django2.2/blob/main/data-collection-views.py', 'popup', 'width=700,height=600')
    }
    if(source === 'rootCode'){
      window.open('https://github.com/carlitos-206/portfolio-front-end/blob/dev2/src/components/global_functions/userDataRetrival.js', 'popup', 'width=700,height=600')
    }
    if(source === 'uw_1_code'){
      window.confirm('Code Starts at line 113')
      window.open('https://github.com/carlitos-206/JSPortfolio/blob/main/public/uwReqs.js', 'popup', 'width=700,height=600')
    }
    if(source === 'uw_2_code'){
      window.open('https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/src/components/dataCollection/arrivalRequest.js', 'popup', 'width=700,height=600')  
    }
  }

  return(
      <div className="bd_container">
        <div className="bd_title">
          <p className="coolTitle">User Data in Web Development</p>
          <p className="bd_project_outline_text">Projects Outlined in Article: <a title='Read code from GitHub' href="https://github.com/carlitos-206/useragent-Django2.2/blob/main/data-collection-views.py" target="popup" onClick={(e)=>{openPopUp(e, 'auxScript')}}>User Agent in Python Django plug in tool</a>,  
              <a title='Read code from GitHub' href="https://github.com/carlitos-206/mainPortfolio/blob/Main/portfolioAPP/views.py" target="popup" onClick={(e)=>{openPopUp(e, 'portfolio')}}> Portfolio{'(Deprecated)'}</a>, 
              <a title='Read code from GitHub' href="https://github.com/carlitos-206/JSPortfolio/blob/main/public/uwReqs.js" target="popup" onClick={(e)=>{openPopUp(e, 'uw_1_code')}} > UW Course 1 Final</a>,
              <a title='Read code from GitHub' href="https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/src/components/dataCollection/arrivalRequest.js" target="popup" onClick={(e)=>{openPopUp(e, 'uw_2_code')}}> UW Course 2 Final</a>
          </p>
        </div>
        <div className="bd_article indent">
          <p className="bd_article_text">During my formative years in the realm of coding, a particular experience stands out as a profound revelation. Upon completing the Coding Dojo bootcamp, which focused on Full Stack in Python with Django, I found myself in an interlude before embarking on my next bootcamp at the University of Washington. This transitionary period provided me the perfect opportunity to explore various areas of personal interest in coding.</p>
          <p className="bd_article_text">One such area of interest was the discovery of the User Agent. While many are aware of the IP address as a standard internet identification, my firsthand encounter with this digital reflection was nothing short of transformative. It felt like seeing my digital imprint in the vast expanse of the web. A realization further heightened by Django's built-in function to retrieve the IP address.</p>
          <code className=" bd_code">
            1| ip_address = request.META.get("REMOTE_ADDR")
          </code>
          <p className="bd_article_text bd_article_text_custom">Recognizing the immense value of this newfound knowledge, I was eager to incorporate it into my then-upcoming <a title='Read code from GitHub' href="https://github.com/carlitos-206/mainPortfolio/blob/Main/portfolioAPP/views.py" target="popup" onClick={(e)=>{openPopUp(e, 'portfolio')}}>portfolio</a>. Beyond just incorporating it, I wrote an <a title='Read code from GitHub' href="https://github.com/carlitos-206/useragent-Django2.2/blob/main/data-collection-views.py" target="popup" onClick={(e)=>{openPopUp(e, 'auxScript')}}>auxiliary script</a> designed for seamless integration into other Django projects. Acquiring such user-centric data opened up a strategic dimension in development, especially with respect to marketing. For instance, understanding a user's location and device type can inform marketing campaigns or decisions on whether to prioritize development of a mobile app.</p>
          <p className="bd_article_text">As an experimental feature, I even configured my portfolio to send direct email notifications containing user details for every site visit. This real-time feedback not only provided insights on user behavior, but also offered a glimpse into the diverse landscape of devices, browsers, and even automated bots like the Facebook bot. Such encounters reshaped my perspective, transforming the internet from a mere canvas of HTML to a bustling digital city.</p>
          <CarouselBuilder images={imgCollection}/>
          <p className="bd_article_text">This exploration didn't end with Python. During my introductory JavaScript course titled "JSCRIPT 310 B Wi 22: Programming For The Browser In JavaScript", I ventured into the nuances of JavaScript, a language I found surprisingly intuitive. While the curriculum was browser-centric, my thirst for knowledge led me to Node.js, a runtime environment for JavaScript outside the browser. This self-guided journey culminated in the creation of a <a title='Read the article' href="/projects/school/uw/solo">rudimentary full-stack JavaScript application</a>, even as I grappled with the intricacies of connecting it to a database.</p>
          <p className="bd_article_text">My quest for user information was further enriched with the discovery of IPinfo.io, a service that offers user location details through a straightforward API call. This, combined with the Navigator Web API, felt like obtaining a holistic snapshot of every incoming user request.</p>
          {/* <Button className="bd_button glow-on-hover" variant="primary" type="submit" onClick={(e)=>{showReflection(e)}} >
            Click Here
          </Button> */}
          <p className="bd_article_text">Subsequently, my exposure to <a title='Read the article' href="/projects/school/uw/ecommerce">React JS and Google Firebase: Firestore</a> during my second course was a game-changer. The pieces of the puzzle finally fit together, enabling me to capture and store the digital snapshot of every visitor.</p>
          <img className="bd_firebase_img" src={img_0} alt="" />
          <p className="bd_article_text">With multiple storage options now at my disposal, including Mongo DB and AWS Dynamo DB, I am well-equipped to harness user data to its fullest potential in future projects.</p>
          <p className="bd_article_text">Do you want to see your reflection? <a title='Read code from GitHub' href="https://github.com/carlitos-206/portfolio-front-end/blob/dev2/src/components/global_functions/userDataRetrival.js" target="popup" onClick={(e)=>{openPopUp(e, 'rootCode')}} className="bd_sourceCodeLink_text">Read the source code</a> </p>
          <Button className="bd_button glow-on-hover" variant="primary" type="submit" onClick={(e)=>{showReflection(e)}} >
            Click Here
          </Button>

        </div>

      </div>
  )
}