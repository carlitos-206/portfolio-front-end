import React from "react";
import CarouselBuilder from "./carouselBuilder";
import { seaHack, aiHack2, aiHack3 } from "./comunity/communityCollection";
export default function Community() {
  return(
    <>
      <div className="communityContainer">
        <div className="hackathon">
          <div className="hackathonHeader">
            <p>Hackathons</p>
          </div>
            <div className="seaHack min-h-screen w-screen bg-gradient-to-t fron-slate-950 to-slate-900">
              <div className="container mx-auto">
                <CarouselBuilder images={seaHack} />
                <CarouselBuilder images={aiHack2} />
                <CarouselBuilder images={aiHack3} />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}