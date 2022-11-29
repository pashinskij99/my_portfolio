import { Github, Gmail, Linkedin, Logo, Telegram } from '../components/iconsComponent'

export const pageUrl = {
  home: '/',
  about: '/about',
  works: '/works',
  contact: '/contact',
  skills: '/skills',
}

export const sideBarNav = [
  { id: 0, name: 'Home', href: pageUrl.home },
  { id: 1, name: 'About me', href: pageUrl.about },
  { id: 2, name: 'My Skills', href: pageUrl.skills },
  { id: 3, name: 'Work', href: pageUrl.works },
  { id: 4, name: 'Contact me ', href: pageUrl.contact },
]

export const homeWordArray1 = [
  'h',
  'e',
  'l',
  'l',
  'o',
  ',',
  <span>&nbsp;</span>,
  'm',
  'y',
  <span>&nbsp;</span>,
  'n',
  'a',
  'm',
  'e',
]

export const homeWordArray2 = ['i', 's', <span>&nbsp;</span>, 'y', 'a', 'r', 'o', 's', 'l', 'a', 'v']

export const animateHomeTitle = {
  scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
  scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
  scaleZ: [1, 1, 1, 1, 1, 1, 1],
}

export const aboutTabsName = ['Me', 'Study', 'Experience', 'Hobby']

export const aboutMeTitle = ['A', 'b', 'o', 'u', 't', <span>&nbsp;</span>, 'm', 'e']

export const aboutTabsContent = [
  {
    id: 'Me',
    title: 'Hello, I’m Yaroslav Pashinskii',
    description:
      'I am a front-end developer from Odessa (Ukraine) I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
  },
  {
    id: 'Study',
    title: 'I’m for self-education',
    description:
      'I raise my level and skills through various courses and through self-education. I work on it every day! At the moment I know very well such languages and technologies as HTML, CSS, JavaScript, React',
  },
  {
    id: 'Experience',
    title: 'For soul',
    description:
      'Since childhood, my favorite hobbies are sports and football. I love it as a life. Now along with them programming',
  },
  {
    id: 'Hobby',
    title: 'I work om it every day!',
    description:
      'I started front-end development about 1 year ago (2020) and am gaining experience by performing a large number of pet projects. I also have little experience in commercial projects. My skills grow with daily work !',
  },
]

export const skillsTitle = ['M', 'y', <span>&nbsp;</span>, 's', 'k', 'i', 'l', 'l', 's']
export const workTitle = ['W', 'o', 'r', 'k']
export const contactMeTitle = ['C', 'o', 'n', 't', 'a', 'c', 't']

export const sidebarSocialLinks = [
  { id: 0, SvgComponent: Linkedin, href: '#' },
  { id: 1, SvgComponent: Gmail, href: '#' },
  { id: 2, SvgComponent: Telegram, href: '#' },
  { id: 3, SvgComponent: Github, href: '#' },
]
