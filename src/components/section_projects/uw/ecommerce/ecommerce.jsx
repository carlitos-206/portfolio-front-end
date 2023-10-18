import React from "react";
import "./ecommerce.css";
import logo from "../../../../images/ui_needs/storeLogo.png";
import grade from "../../../../images/ui_needs/ecommerceGrade.png";
export default function UwEcommerceProject() {
    const codeString = `
// Functions that hold the Firebase Storage and Firestore connection Logic

  /* 
    This Function is used to upload the image to Firebase Storage 
    then it returns the url to be used in Firestore
  */
  function uploadFileToStorage() {
    return new Promise((resolve, reject) => {
      if (itemImgFile !== null || itemImgFile !== '') {
        const imageRef = ref(imgDB, \`img/\${itemNameValue.split(' ').join('')}_img---\${v4()}\`);
        uploadBytes(imageRef, itemImgFile).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            resolve(url.toString()); // This is the url to be used in Firestore
          });
        });
      } else {
        reject(new Error('file missing'));
      }
    });
  }
  
  /*
    This Function is used to upload the item to Firestore with the image url
  */
  async function uploadToFirestore() {
    const imgURL = await uploadFileToStorage(); // awaits for the image to be uploaded to Firebase Storage
    const entriesRef = collection(db, 'storeItems');
    addDoc(entriesRef, {
      uniqueID: \`\${v4()}\`,
      itemName: itemNameValue,
      itemGender: itemGenderValue,
      itemQuantity: itemQuantityValue,
      itemImg: imgURL,
      itemPrice: itemPriceValue,
      itemSalePercent: itemSalePercentValue,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    });
  }
    `;


  const openPopUp = (e, source) => {
    if(source === 'rootCode'){
      window.open('https://github.com/carlitos-206/react-firebase-ecomerce-sdk', 'popup', 'width=800,height=600')
    }
    if(source === 'taskList'){  
      window.open('https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/design/task.txt', 'popup', 'width=800,height=600')
    }
    if(source === 'routeDesign'){
      window.open('https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/design/routeDesign.txt', 'popup', 'width=800,height=600') 
    }
    if(source === 'dbDesign'){
      window.open('https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/design/fireBaseDBDesign.txt', 'popup', 'width=800,height=600')  
    }
    if(source === 'analytics'){
      window.open('https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/src/components/dataCollection/arrivalRequest.js', 'popup', 'width=800,height=600')  
    }
    if(source === 'keyDoc'){
      window.open('https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/src/components/admin/adminPage.jsx', 'popup', 'width=800,height=600') 
    }
  }
  return (
    <div className="uwEcommerceContainer">
      <div className="uwEcommerceTitle">
          <img src={logo} alt="storeLogo" id="storeLogoImg" />
      </div>
      <div className="uwEcommerceBody">
        <p className="uwEcommerceText indent">This was my second project at the University of Washington. The project consisted of 4 simple criterias, have the code published on GitHub, have the app be deployed onto the internet, have the site be RESTful as well as take usage of Google Firebase Firestore to save information. At this point I had done what I consider to be the basic applications in the past, I had done <p className="ecommerceDjangoRef" title="See Coding Dojo Projects">variations of a social media with Django</p>, and of course a <a title="Read the article" href="/projects/school/uw/solo">portfolio in JS</a>. I knew that for myself I had to push the boundaries of what I knew at that time or else I would not feel satisfied in my work. At this point I knew that the grade was irrelevant because I knew it would be a 100%. I had to push my own boundaries or else I would have done a disservice to myself. So I set out to build something that would forever be useful,  built my own <a title='Read code from GitHub' href="https://github.com/carlitos-206/react-firebase-ecomerce-sdk" target="popup" onClick={(e)=>{openPopUp(e, 'rootCode')}}>E-Commerce SDK in React.js</a>. I made the decision to write the most universal code and more importantly the most maintainable code. At this time I had not taken a single course or even watched a video on system architecture and to be truthful I didn’t even know such a concept existed. But regardless of that I knew that I had to organize the code in such a way that any new developer could plug in their code and have no difficulty; also any new developer could clearly see the flow of data.</p>
        <p className="uwEcommerceText indent">The goal was set, now it is simply time to execute it. I began to script my plan, which had a <a title="Read on GitHub" href="https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/design/task.txt" target="popup" onClick={(e)=>{openPopUp(e, 'taskList')}}>list of  tasks</a>, a <a title="Read on GitHub" target="popup" onClick={(e)=>{openPopUp(e, 'routeDesign')}} href="https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/design/routeDesign.txt">design of the routes</a> and their contents as well as a <a title="Read on GitHub" target="popup" onClick={(e)=>{openPopUp(e, 'dbDesign')}} href="https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/design/fireBaseDBDesign.txt">database design</a>. I had 3 weeks to complete all of this. A time frame which I felt was enormous, so therefore I had to do work that I felt would take 3 weeks to complete. The project started smoothly, I was able to quickly create the firebase connection. Since then I have become an advocate for the usage of Firebase as a database because their extensive documentation makes development very simple and their UI is extremely easy to navigate.</p>
        <p className="uwEcommerceText indent">With the connection in hand I now had to now build the client side. I started with the admin side of the site. I had to plan on how I was going to upload images, that's of course one of the limitations of the Firestore being a document database therefore it does not  have the ability to hold files only text based data. So I discovered Firebase Storage, this was great news because I was able to hold everything in the same ecosystem. But since they are two separate services I had to make them co-dependent, this was a challenge. It took lots of testing, now that I look at the code the answer and concept is second nature, making functions co-dependent or simply asynchronous as it is known was a large wave of mental gymnastics that I had to complete, that was the first challenge I truly felt was worthy of my skills. How functions work was simple, I first uploaded the image to Firebase Storage, that returns a url reference to the image, the image url reference is then added to the object being sent to Firebase Firestore. When the document in Firestore is called to be rendered since it's an image url, it's now usable in the HTML.</p>
        <pre className="uwEcommerceCode">
          <code>
            {codeString}
          </code>
        </pre>
        <p className="uwEcommerceText indent">At this point the Admin had the ability to create items, view the items, edit them as well as having the ability to delete them. Now I have a new challenge: locking this page in the site. I could have gone the traditional route (which is the safe route) which is to have the admin login and use sessions to give access to the page. But since the purpose of this project was to push my boundaries I had the idea of creating a requirement to have a physical key to log in to the admin site for no other reason that I thought it would be fun to build. At this point I felt that I had bitten more than I could chew since I had 2 weeks left and the front end wasn’t yet complete. I set out to complete the front end. The front end was simple since this was a clothing store it  was just mapping the items from the database and allowing them to be queried by gender and whether it was on sale, the user could add them to a cart and have the ability to create an account. I also built the <a title="Read on GitHub" target="popup" onClick={(e)=>{openPopUp(e, 'analytics')}} href="https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/src/components/dataCollection/arrivalRequest.js">analytics for the site</a>. For the first time my knowledge of the user agent and location information was useful. If this was a site for business regardless of the product they were able to see the request locations as well as the device and make an inform decision on development for the future or even if development would be needed outside the web, or where the customer where more concentrated to build a brick and mortar store or where in the map opportunity of growth was. I of course used my favorite 3rd party service IPinfo.io and the javascript inbuilt Navigator API to capture the user agent.</p>
        <p className="uwEcommerceText indent">Now that all the basics were built and functional I had a week left and 2 major tasks, lock the admin page with a physical key and deploy the app to a web service. I had to build the physical key. So I took my thinking outside of the digital space and began to think in a more analog manner. I decided to watch a video on how a key unlocks a door. The ridges of the key fit to a predetermined set of pins and if all the pins match the ridges of the keys it allows the key to twist therefore unlocking the door. That was my eureka moment, it's a simple comparison if ‘a’ matches ‘b’ then it unlocks. Now that I had the concept in mind I had to build it. <a title="Read on GitHub" target="popup" onClick={(e)=>{openPopUp(e, 'keyDoc')}}  href="https://github.com/carlitos-206/react-firebase-ecomerce-sdk/blob/main/sample-app-for-sdk/src/components/admin/adminPage.jsx">I built the key, the door and the pins</a>. So I started with the key and pins, the key was a simple text document that contained a hashed word, the pins were the same hashed word in Firestore. The door was a form that only took a file. This allowed the idea that I could carry the text file in USB and access the admin page from any device and honestly add a classical spy movie level of security. I know the younger version of me who played James Bond GoldenEye on the N64 would appreciate it. But that wasn’t enough, if the correct file was loaded it would automatically load the page without having to press the send button, but if you had to press the send button it was the wrong file. This was just the cherry on top.</p>
        <p className="uwEcommerceText indent">At this point I had one day and zero knowledge on how to deploy javascript. That's when in the middle of it all a video of Ngrok appeared on my youtube feed. The most underrated service yet one of the services that I now use in my daily development. The service is simple to use and it requires only basic knowledge of the terminal of your choice. Ngrok builds a web tunnel that listens to the port of your choice making your computer a live server, of course for production this isn’t ideal but for testing various devices and/or quickly showcasing a demo is extremely useful. I have found it to be best useful for mobile development, while Chrome’s devtools or any other browser devtools are useful in emulating the size of a mobile device like a tablet or smartphone it does not compare as to having it at your fingertips. Thankfully I had an older iPad, and iPhone and Google Pixel phone so testing how an app would feel to the end user has become extremely useful when making UI decisions.</p>
        <p className="uwEcommerceText indent">The 3 weeks were up, my project met every single criteria so 500/500 wasn’t a surprise. But I felt I had genuinely accomplished what I set out. My SDK was ready to use with any product since now it was as simple as adding a new Firebase Store and Storage Database and it would autobuild. Of course the UI could change depending on client requirements for the front end. Reason when the components were categorized to be maintainable, that included the analytics since all it requires is a key from IPinfo.io and the rest autobuilds to the database.</p>
        <img title="Screenshot of grade"src={grade} alt="Screenshot of grade" className="uwEcommerceGradePic" />
        <p className="uwEcommerceText indent">The project was complete, the grade was achieved but more importantly I completed what I set out to do, push my own boundaries.</p>
        
      </div>
    </div>
  );
}