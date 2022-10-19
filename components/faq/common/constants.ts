import HomeSVG from '../../../assets/svg/home.svg';
import SupportSVG from '../../../assets/svg/support.svg';
import LightningFilledSVG from '../../../assets/svg/lightning-filled.svg';
import PenSVG from '../../../assets/svg/pen.svg';
import { Category, Question } from './types';

const CATEGORIES_LIST: Category[] = [
  {
    name: 'general',
    Icon: HomeSVG,
  },
  {
    name: 'support',
    Icon: SupportSVG,
  },
  {
    name: 'hosting',
    Icon: LightningFilledSVG,
  },
  {
    name: 'product',
    Icon: PenSVG,
  },
];

const QUESTIONS_DATA: Question[] = [
  {
    name: 'How does it work',
    body: 'The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit,  Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native. Mix-and-match dozens of responsive elements to quickly configure your favorite landing page layouts or hit the ground running with 10 pre-built templates, all in light or dark mode. ',
    link: 'https://youtu.be/dQw4w9WgXcQ',
    id: '1',
  },
  {
    name: 'How to start with Stacks',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nisi id justo pulvinar viverra sed eget urna. Nulla venenatis sit amet dui id blandit. Donec magna elit, lobortis quis gravida non, blandit ut est. Sed id luctus lorem, a mattis nulla. Mauris mollis ligula odio, ut venenatis orci viverra non. Curabitur faucibus ullamcorper mi, a egestas lacus efficitur nec.',
    link: 'https://youtu.be/dQw4w9WgXcQ',
    id: '2',
  },
  {
    name: 'Dose it suppport Dark Mode',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nisi id justo pulvinar viverra sed eget urna. Nulla venenatis sit amet dui id blandit. Donec magna elit, lobortis quis gravida non, blandit ut est. Sed id luctus lorem, a mattis nulla. Mauris mollis ligula odio, ut venenatis orci viverra non. Curabitur faucibus ullamcorper mi, a egestas lacus efficitur nec.',
    link: 'https://youtu.be/dQw4w9WgXcQ',
    id: '3',
  },
  {
    name: 'Does it support Auto-Layout',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nisi id justo pulvinar viverra sed eget urna. Nulla venenatis sit amet dui id blandit. Donec magna elit, lobortis quis gravida non, blandit ut est. Sed id luctus lorem, a mattis nulla. Mauris mollis ligula odio, ut venenatis orci viverra non. Curabitur faucibus ullamcorper mi, a egestas lacus efficitur nec.',
    link: 'https://youtu.be/dQw4w9WgXcQ',
    id: '4',
  },
  {
    name: 'What is Stacks Design System',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nisi id justo pulvinar viverra sed eget urna. Nulla venenatis sit amet dui id blandit. Donec magna elit, lobortis quis gravida non, blandit ut est. Sed id luctus lorem, a mattis nulla. Mauris mollis ligula odio, ut venenatis orci viverra non. Curabitur faucibus ullamcorper mi, a egestas lacus efficitur nec.',
    link: 'https://youtu.be/dQw4w9WgXcQ',
    id: '5',
  },
];

export { CATEGORIES_LIST, QUESTIONS_DATA };
