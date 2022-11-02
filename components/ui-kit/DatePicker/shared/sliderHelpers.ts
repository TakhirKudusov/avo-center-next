import { TDate } from '../types';
import { getDateAccordingToMonth } from './generalUtils';

const getSlideDate = ({
  parent,
  isInitialActiveChild,
  activeDate,
  monthChangeDirection,
}: {
  parent: HTMLElement;
  isInitialActiveChild: string;
  activeDate: TDate;
  monthChangeDirection: string;
}) => {
  if (!parent) {
    return isInitialActiveChild
      ? activeDate
      : getDateAccordingToMonth(activeDate, 'NEXT');
  }
  const child = parent.children[isInitialActiveChild ? 0 : 1];
  const isActiveSlide =
    child.classList.contains('-shown') ||
    child.classList.contains('-shownAnimated'); // check -shownAnimated for Safari bug
  return isActiveSlide
    ? activeDate
    : getDateAccordingToMonth(activeDate, monthChangeDirection);
};

const animateContent = ({
  parent,
  direction,
}: {
  parent: HTMLElement | null;
  direction: string;
}) => {
  const wrapperChildren = Array.from(parent?.children!) as HTMLElement[];
  const shownItem = wrapperChildren.find((child) =>
    child.classList.contains('-shown'),
  );
  const hiddenItem = wrapperChildren.find((child) => child !== shownItem);
  const baseClass = shownItem?.classList[0];
  const isNextMonth = direction === 'NEXT';
  const getAnimationClass = (value: boolean) =>
    value ? '-hiddenNext' : '-hiddenPrevious';
  if (hiddenItem) {
    hiddenItem.style.transition = 'none';
    hiddenItem.className = `${baseClass} ${getAnimationClass(isNextMonth)}`;
    hiddenItem.classList.add('-shownAnimated');
  }
  if (shownItem) {
    shownItem.style.transition = '';
    shownItem.className = `${baseClass} ${getAnimationClass(!isNextMonth)}`;
  }
};

const handleSlideAnimationEnd = ({ target }: { target: HTMLElement }) => {
  target.classList.remove('-hiddenNext');
  target.classList.remove('-hiddenPrevious');
  target.classList.replace('-shownAnimated', '-shown');
};

export { animateContent, getSlideDate, handleSlideAnimationEnd };
