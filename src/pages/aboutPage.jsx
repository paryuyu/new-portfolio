
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useState } from "react";
import { Clock } from "three";
import * as THREE from "three";
import { useEffect } from "react";

const aboutMeContent = [{
  tab: '자기소개',
  tabContent: '<p>저는 프론트 엔드 개발자로서 성장하고 있는 주니어 개발자입니다. <br/>개발자로서의 경력은 아직 짧지만, 열정과 열망으로 가득 차 있어 끊임없이 발전하려고 노력하고 있습니다.</p>',
  tabIcon: '🤯'
}, {
  tab: '가치관',
  tabContent: '🥰',
  tabIcon: '🤯'
}, {
  tab: '경험',
  tabContent: '🤬',
  tabIcon: '🤯'
}, {
  tab: '포부',
  tabContent: '🧐'
}];


const AboutPage = () => {

  const [selectedTab, setSelectedTab] = useState(null);

  const handleTab = (item) => {
    setSelectedTab(item)
  }


  return <section className="about_section" id="about-section">

    <h1>About me</h1>
    <div className="main_tab_screen">
      <nav>
        <ul>
          {aboutMeContent?.map((item, index) => {
            return <li key={index} onClick={() => handleTab(item)} className={selectedTab?.tab === item?.tab ? 'selected' : 'unSelected'}>{item?.tab}</li>
          })}
        </ul>
      </nav>

      <AnimatePresence>
        <motion.div
          className="content_box"
          key={selectedTab ? selectedTab?.tab : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5 }}>
          {selectedTab ? <div dangerouslySetInnerHTML={{__html : selectedTab.tabContent}} /> : "😋"}
        </motion.div>
      </AnimatePresence>
    </div>
  </section>;
};

export default AboutPage;
