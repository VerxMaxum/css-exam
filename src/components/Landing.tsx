import React from 'react';
import { Banner } from './Banner'
import { Navigation } from './Navigation'

export const Landing = () => {
    return (
        <>
          <div className="h-screen relative">
            <Navigation />
            <div className="w-full flex flex-col items-center pt-40">
              <div className="flex justify-center">
                <h2 className="text-p66 text-primary font-extrabold leading-[120%] w-[740px] text-center">
                  Welcome to
                  Computer Science Society
                </h2>
              </div>
              <div className="flex justify-center mt-10">
                <h6 className="text-base text-p22 font-medium">From The University of Santo Tomas</h6>
              </div>
              <div className="flex justify-center m-16">
                <button className="bg-purplecss p-3 text-white font-bold rounded-p10 text-base mr-2
                translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all">#tracks</button>
                <button className="bg-purplecss p-3 text-white font-bold rounded-p10 text-base mr-2
                translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all">#subjects</button>
                <button className="bg-purplecss p-3 text-white font-bold rounded-p10 text-base
                translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all">#latestpage</button>
              </div>
            </div>
            <Banner />
          </div>
          <div className="h-screen">
            <div>
              <h3 className="text-primary font-extrabold">Tracks</h3>
            </div>
          </div>
        </>
    );
}