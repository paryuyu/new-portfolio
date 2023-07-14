export const defaultOptions = {
  reverse: false,
  max: 25,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const projectItem = [
  {
    id: 1,
    title: "New Portfolio",
    desc: "반응형으로 제작된 포트폴리오입니다. 웹에서 더 적절하게 구현되오나 모바일 버전도 확인이 가능합니다. react-three-fiber와 react-three-drei를 통해 3D 모델을 구현하였습니다. 새로운 스타일로 만들어보고자 노력했습니다. 단독으로 진행한 프로젝트입니다. 쓰리디 모델이 나오는 섹션은 다소 로딩이 긴 편이오니 기다려주세요.",
    webPage: "https://paryuyu.github.io/new-portfolio/",
    github: "https://github.com/paryuyu/new-portfolio.git",
    period: ["2023-07-10", "2023-07-15"],
    images: ["./project-image/newportfolio/new1.png",
      "./project-image/newportfolio/new2.png",
      "./project-image/newportfolio/new3.png",
      "./project-image/newportfolio/new4.png",
      "./project-image/newportfolio/new5.png",
    ],
    skills: ["react-three-fiber & drei", "React.js", "JavaScript", "css", "GitHub", "Framer Motion"],
    people: "단독 프로젝트"
  },
  {
    id: 2,
    title: "00Blog",
    desc: "이전 클론코딩을 통해 학습한 NextJs의 13버전을 이용해 만들었습니다. MongoDB를 통하여 CRUD를 구현하였으며, 서버는 Nextjs를 이용하였습니다. 부족하지만 SEO구현에 최선을 다하였습니다. Next-auth를 통해 카카오 소셜 로그인을 구현하였습니다. 반응형으로 구현하였으니 모바일에서도 편하게 방문해주세요. 1인으로 진행된 단독 프로젝트입니다. 첫 로딩에 약간의 시간이 소요됩니다.",
    webPage: "https://00blog.vercel.app",
    github: "https://github.com/paryuyu/00blog.git",
    period: ["2023-06-28", "2023-07-10"],
    images: ["./project-image/blog/blog1.png", "./project-image/blog/blog2.png", "./project-image/blog/blog3.png"],
    skills: ["Next.js", "MongoDB", "GitHub", "Tailwind CSS", "JavaScript", "react-quill"],
    people: "단독 프로젝트"
  },
  {
    id: 3,
    title: "promptopia clone",
    desc: "NextJs의 버전이 새롭게 업데이트되어 새로운 문법들을 익히고자 학습하며 만든 클론 사이트입니다. 해당 프로젝트에서 문법을 익혀 블로그 사이트를 만들었습니다. 또한, tailwind CSS를 처음으로 활용해보았습니다.Next-auth를 통해 구글 소셜로그인을 구현하였습니다.",
    webPage: "https://next13-new-promptopia.vercel.app",
    github: "https://github.com/paryuyu/promptopia-clone.git",
    period: ["2023-06-25", "2023-06-27"],
    images: ["./project-image/promptopia/promptopia1.png", 
    "./project-image/promptopia/promptopia2.png", 
    "./project-image/promptopia/promptopia3.png",],
    skills: ["Next.js", "MongoDB", "GitHub", "Tailwind CSS", "JavaScript"],
    people: "단독 프로젝트"
  },
  {
    id: 4,
    title: "Resume",
    desc: "12버전의 NextJs로 진행된 프로젝트입니다. 현재 사이트인 포트폴리오 사이트와 달리 개발공부를 시작하고 진행했던 모든 토이프로젝트를 확인해보실 수 있습니다. 반응형을 고려하고 제작된 사이트입니다. 모바일에서도 편하게 보실 수 있습니다. UI는 MUI와 기본 CSS로 제작되었습니다.",
    webPage: "https://yuyu-resume-developer.vercel.app/",
    github: "",
    period: ["2023-01-14", "2023-01-24"],
    images: ["./project-image/resume/resume1.png",
      "./project-image/resume/resume2.png",
      "./project-image/resume/resume3.png",
      "./project-image/resume/resume4.png",
      "./project-image/resume/resume5.png",
      "./project-image/resume/resume6.png",
      "./project-image/resume/resume7.png",
      "./project-image/resume/resume8.png",
      "./project-image/resume/resume9.png",
      "./project-image/resume/resume10.png",
      "./project-image/resume/resume11.png",
      "./project-image/resume/resume12.png",
      "./project-image/resume/resume13.png",
    ],
    skills: ["Next.js", "MongoDB", "GitHub", "Material-UI", "TypeScript"],
    people: "단독 프로젝트"
  },
];