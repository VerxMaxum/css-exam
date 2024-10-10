import React from 'react';
import { useState, useRef } from 'react'
import { Banner } from './Banner'
import { Navigation } from './Navigation'
import { Track } from './Track'
import { Subject } from './Subject'
import dummyTexts from '../dummy/dummy'
import subjectDisplay from '../subjects/subjectDisplay';

type ListOfSubjectProps = {
  isSelected: boolean,
  list: {
    code: string
    title: string
    src: string
  }[]
}[]

export const Landing = () => {
  const tracks = useRef<HTMLDivElement | null>(null);
  const subjects = useRef<HTMLDivElement | null>(null);
  const latestPage = useRef<HTMLDivElement | null>(null);
  const [listOfSubjects, setListOfSubjects] = useState<ListOfSubjectProps>(subjectDisplay);
    return (
        <>
          <div className="h-screen flex flex-col">
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
                translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all"
                onClick={() => {
                  tracks.current?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}>#tracks</button>
                <button className="bg-purplecss p-3 text-white font-bold rounded-p10 text-base mr-2
                translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all"
                onClick={() => {
                  subjects.current?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}>#subjects</button>
                <button className="bg-purplecss p-3 text-white font-bold rounded-p10 text-base
                translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all"
                onClick={() => {
                  latestPage.current?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}>#latestpage</button>
              </div>
            </div>
            <Banner />
          </div>
          <div className="h-screen flex flex-col" id="tracks" ref={tracks}>
            <div>
              <h3 className="text-primary font-extrabold text-p52 text-center p-12">Tracks</h3>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-track w-[1216px] gap-10">
                <Track src="./images/data_science.jpg" trackName="Data Science" dummyText={dummyTexts[0]} />
                <Track src="./images/core_sci.jpg" trackName="Core Science" dummyText={dummyTexts[1]} />
                <Track src="./images/game_dev.jpg" trackName="Game Development" dummyText={dummyTexts[2]} />
              </div>
            </div>
            <Banner />
          </div>
          <div className="" id="subjects" ref={subjects}>
            <div className="flex flex-col items-center">
              <h3 className="text-primary font-extrabold text-p52 text-center p-12">Subjects</h3>
              <h6 className="text-base text-p22 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              </h6>
              <div className="mt-16">
                <button className="text-p18 text-white bg-purplecss font-bold px-4 py-2 mr-4 rounded-p10
              translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all">Data Science</button>
              <button className="text-p18 text-white bg-purplecss font-bold px-4 py-2 mr-4 rounded-p10
              translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all">Core Science</button>
              <button className="text-p18 text-white bg-purplecss font-bold px-4 py-2 mr-4 rounded-p10
              translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all">Game Development</button>
              </div>
            </div>
            <div className="grid grid-cols-subject gap-11 mt-12">
              {
                listOfSubjects.filter(e => e.isSelected).map(e => e.list)[0].map((e) => {
                  return (
                    <Subject src={e.src} code={e.code} title={e.title}/>
                  );
                })
              }
            </div>
          </div>
        </>
    );
}