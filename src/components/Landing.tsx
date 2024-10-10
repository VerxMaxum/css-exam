import React from 'react';
import { useState, useRef } from 'react'
import { Banner } from './Banner'
import { Navigation } from './Navigation'
import { Track } from './Track'
import { Subject } from './Subject'
import { Carousel } from './Carousel'
import { slides } from '../data/latest.json'
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

  function handleSubjectClick(e: React.MouseEvent<HTMLButtonElement>) {

    const source = e.currentTarget;
    const id = source.id;
    let copySubjects = [...listOfSubjects];
    if(id === 'core') {
      copySubjects[0].isSelected = false;
      copySubjects[1].isSelected = true;
      copySubjects[2].isSelected = false;
    } else if(id === 'game') {
      copySubjects[0].isSelected = false;
      copySubjects[1].isSelected = false;
      copySubjects[2].isSelected = true;
    } else if(id === 'data') {
      copySubjects[0].isSelected = true;
      copySubjects[1].isSelected = false;
      copySubjects[2].isSelected = false;
    }

    setListOfSubjects(copySubjects);
  }

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
        <div className="flex flex-col" id="subjects" ref={subjects}>
          <div className="flex flex-col items-center">
            <h3 className="text-primary font-extrabold text-p52 text-center p-12">Subjects</h3>
            <h6 className="text-base text-p22 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            </h6>
            <div className="mt-16">
              {
                listOfSubjects.map((e, index) => {
                  let title = "";
                  let curr = listOfSubjects.indexOf(e);
                  let id = "";
                  if(curr === 0) {
                    title = "Data Science"
                    id = "data"
                  } else if(curr === 1) {
                    title = "Core Science"
                    id = "core"
                  } else if(curr === 2) {
                    title = "Game Development"
                    id = "game"
                  }

                  return (
                    <button key={index} className={`text-p18 text-white ${e.isSelected ? 'bg-orangecss' : 'bg-primary'} font-bold px-4 py-2 mr-4 rounded-p10
                      translate-y-0 hover:shadow-gray-400 hover:shadow-lg hover:-translate-y-1.5 hover:transition-all`}
                      id={id}
                      onClick={handleSubjectClick}>{title}</button>
                  );
                })
              }
            </div>
          </div>
          <div className="grid grid-cols-subject gap-11 mt-12 px-[5%]">
            {
              listOfSubjects.filter(e => e.isSelected).map(e => e.list)[0].map((e, index) => {
                return (
                  <Subject key={index} src={e.src} code={e.code} title={e.title}/>
                );
              })
            }
          </div>
          <Banner />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-primary font-extrabold text-p52 text-center p-12" ref={latestPage}>Latest Posts</h3>
          <div className="flex flex-col overflow-hidden w-p1580">
            <Carousel data={slides} />
          </div>
          
        </div>
        <footer className="flex h-p211 bg-primary p-10">
            <div className="w-1/2 flex flex-col justify-evenly">
              <h5 className="text-p26 font-bold text-white">Logo</h5>
              <p className="text-base text-white">CSS Headliner</p>
              <div className="bg-white px-4 py-1 rounded-lg w-fit">
                <span className="text-primary text-base">Passionately designed & developed by CSS</span>
                <span></span>
              </div>
            </div>
            <div className="flex justify-between w-1/3">
              <div className="flex flex-col justify-evenly">
                <p className="text-white font-bold text-p18">UST Computer Science Society</p>
                <p className="text-white text-p18">About Us</p>
                <p className="text-white text-p18">Community</p>
                <p className="text-white text-p18">News & Events</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <img src="./images/mail.svg" />
                  <span className="text-white text-base ml-2">Email</span>
                </div>
                <div className="flex justify-between w-6 h-6">
                  <img src="./images/facebook.svg" />
                  <span className="text-white text-base ml-2">Facebook</span>
                </div>
                <div className="flex justify-between w-6 h-6">
                  <img src="./images/twitter.svg" />
                  <span className="text-white text-base ml-2">Twitter</span>
                </div>
                <div className="flex justify-between w-6 h-6">
                  <img src="./images/instagram.svg" />
                  <span className="text-white text-base ml-2">Instagram</span>
                </div>
              </div>
            </div>
        </footer>
      </>
  );
}