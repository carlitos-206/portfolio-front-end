import React from 'react'
import './index.css'
import { Button } from "@mui/material";


export default function Timeline() {
    const portfolioLink = (e, num) => {
      console.log('portfolioLink clicked')
      console.log(e.target)
      console.log(num)
      if (num === 1) {
        window.open('https://github.com/carlitos-206/mainPortfolio', 'popup', 'width=600,height=600')
      }else if(num === 2){
        window.open('https://github.com/carlitos-206/JSPortfolio', 'popup', 'width=600,height=600')
      }else if(num === 3){
        window.open('https://github.com/carlitos-206/carlitos_react/tree/development-react', 'popup', 'width=600,height=600')
      }else if(num === 4){
        window.open('https://github.com/carlitos-206/portfolio-front-end/tree/dev', 'popup', 'width=600,height=600')
      }else if(num === 5){
        window.open('https://github.com/carlitos-206/portfolio-front-end/tree/main', 'popup', 'width=600,height=600')
      }
    }
    return(
      <>
        <p className='timeline_title'>Portfolio Timeline</p>
        <ul className='timeline_ul'>
            <li id='timelineListItem_1' className='timeline_li'>
                <div class="date">Nov 30, 2021</div>
                <div class="title">1st Portfolio</div>
                <div class="descr">
                  <p className='timelineDescription indent'>
                  My initial endeavor with programming, which was characterized by the fundamental nature of the code, effectively mirrored my novice status following my graduation from the Coding Dojo.
                  </p>
                  <div className='timelineLinkButtons'>
                    <Button className='TL_buttons' onClick={(e)=>{portfolioLink(e, 1)}}>Read the code</Button>
                  </div>
                </div>
            </li>
            <li id='timelineListItem_2' className='timeline_li'>
                <div class="date">Mar 24, 2022</div>
                <div class="title">2nd Portfolio</div>
                <div class="descr">
                  <p className='timelineDescription indent'>
                    The second project in my portfolio was predominantly front-end oriented. While it was technically built as a full-stack Express application, the absence of a database rendered it more akin to a front-end project, supplemented with various NPM packages.                  </p>
                  <div className='timelineLinkButtons'>
                    <Button className='TL_buttons' onClick={(e)=>{portfolioLink(e, 2)}}>Read the code</Button>
                  </div>
                </div>
            </li>
            <li id='timelineListItem_3' className='timeline_li'>
                <div class="date">Dec 11, 2022</div>
                <div class="title">3rd Portfolio</div>
                <div class="descr">
                  <p className='timelineDescription indent'>
                  The third addition to my portfolio presents, to this day, one of my most substantial challenges. The endeavor of incorporating a multitude of features into a singular application might seem daunting, but it reflects the ambitious spirit inherent to many developers. It remains my aspiration to bring this project to completion in my future spare time.
                  </p>
                  <div className='timelineLinkButtons'>
                    <Button className='TL_buttons' onClick={(e)=>{portfolioLink(e, 3)}}>Read the code</Button>
                  </div>
                </div>
            </li>
            <li id='timelineListItem_4' className='timeline_li'>
                <div class="date">Mar 29, 2023</div>
                <div class="title">4th Portfolio</div>
                <div class="descr">
                  <p className='timelineDescription indent'>
                    The fourth entry in my portfolio, despite its expedited construction, stands as a testament to my capacity to construct a fully functional application featuring a serverless backend utilizing Google Firebase. During its development, I found it remarkable how readily the knowledge flowed, enabling the creation of an application that effectively fulfills its sole objective: establishing a digital presence.
                  </p>
                  <div className='timelineLinkButtons'>
                    <Button className='TL_buttons' onClick={(e)=>{portfolioLink(e, 4)}}>Read the code</Button>
                  </div>

                </div>
            </li>
            <li id='timelineListItem_5' className='timeline_li'>
                <div class="date">Present (you are here) </div>
                <div class="title">🔴Final Portfolio</div>
                <div class="descr">
                  <p className='timelineDescription indent'>
                  The final entry in my portfolio amalgamates the myriad of lessons gathered during the construction of its predecessors, reflecting the substantial experience I have amassed in code writing. Intriguingly, one of its most remarkable features is its capacity for expansion. This is an aspect I had not previously incorporated into my earlier portfolios. Despite its augmented complexity and a higher number of implementations than the third portfolio, it boasts a distinct organizational structure. Primarily, it successfully achieves an objective that my previous work had overlooked - providing an authentic representation of my capabilities.
                  </p>
                  <div className='timelineLinkButtons'>
                    <Button className='TL_buttons' onClick={(e)=>{portfolioLink(e, 5)}}>Read the code</Button>
                  </div>
                </div>
            </li>
            
        </ul>
      </>
    )
}