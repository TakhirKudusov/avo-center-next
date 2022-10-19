import { HandleDeleteElFromArrFunc, QuestionId } from '../../faq/common/types';

const handleDeleteElementFromArr: HandleDeleteElFromArrFunc<QuestionId> = (
  arr,
  index,
) => {
  const newArr = [...arr];
  newArr.splice(index, 1);
  return newArr;
};

export { handleDeleteElementFromArr };
