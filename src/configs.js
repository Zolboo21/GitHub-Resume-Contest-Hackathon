import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Odonkhuu Zolboo',
  subTitle: 'GitHub Resume for Hackathon',
  stars: {
    maxSize: 15,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Odonkhuu portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* Hi, I am Zolboo from Mongolia.",
        '*Currently doing my undergraduate degree in South Korea at Hallym University, Majoring in Smart IoT. I am 2019 Korean Government scholarship student. I like riding bike and traveling..',
        '* My journey as a software developer started when I was a just a kid trying to figure out how programs and games where made.'
      ],
    },
    {
      scale: 10,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      infos: [
        "* Capstone Design.",
        '* SW Future Technology Idea Contest.',
        '* Open Source Web Development Hackathon.',
        '* Open-source software contest.',
        '* GitHub Resume Contest Hackathon.',
      ],
     // imageList: EXPERIENCE,
     // footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Resume'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my Resume!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://zolboo21.github.io/',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/IOT.png',
            websiteURL: 'http://35.200.74.5:8000/',
          },
          {
            url: 'icons/arduino.png',
            websiteURL: 'https://github.com/Zolboo21/SmartCurtain',
          },
          {
            url: 'icons/saver.png',
            websiteURL:
              'https://github.com/Zolboo21/Number-Saver',
          },
          {
            url: 'icons/press.png',
            websiteURL: 'http://35.200.74.5:8000/',
          },
          {
          url: 'icons/tti.png',
          websiteURL: 'https://github.com/Zolboo21/SpaceWar-Unity',
        },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/zolboo_21',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/Odonkhuu-Zolboo-',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/Zolboo21',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:zolboo.oz@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
