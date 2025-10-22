import { CardWithIconProps } from '@typings/cardWithIconProps';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import SearchIcon from '@mui/icons-material/Search';

// import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
// import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
// import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';

export const highlights: CardWithIconProps[] = [
  // {
  //   icon: LayersRoundedIcon,
  //   title: 'Efficient Full-Stack Design',
  //   paragraph: 'Creating seamless and performant experiences from server to client, ensuring robust and scalable architecture.',
  // },
  // {
  //   icon: DesignServicesRoundedIcon,
  //   title: 'Functional Design',
  //   paragraph: 'Focusing on user-centric interfaces that are not only beautiful but also intuitive and highly functional.',
  // },
  // {
  //   icon: PsychologyRoundedIcon,
  //   title: 'AI Integration',
  //   paragraph: 'Leveraging artificial intelligence to build smarter, more personalized applications and automated workflows.',
  // },
  // {
  //   icon: CodeRoundedIcon,
  //   title: 'Custom Solutions',
  //   paragraph: 'Developing tailor-made solutions that perfectly fit your unique business needs and objectives.',
  // }

  {
    Icon: SearchIcon,
    title: 'Descubrimiento',
    paragraph: 'Comprender tu visión y objetivos para establecer una base sólida.',
  },
  {
    Icon: CodeRoundedIcon,
    title: 'Desarrollo',
    paragraph: 'Construir tu producto con código limpio y tecnologías modernas.',
  },
  {
    Icon: RocketLaunchRoundedIcon,
    title: 'Lanzamiento y Crecimiento',
    paragraph: 'Desplegar tu producto y apoyar su crecimiento y evolución.',
  },
] as const;
