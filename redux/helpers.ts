import { IComment } from '../swagger';

export const findComment = (comments: IComment[], payload: IComment) => {
  let foundedComment = null;

  const newParentComments = [
    ...(comments ?? [])?.map((comment) => {
      if (comment._id === payload._id) {
        foundedComment = payload;
      }

      return comment._id !== payload._id ? comment : payload;
    }),
  ];

  if (!!foundedComment) {
    return newParentComments;
  }

  comments?.forEach((item) => {
    item.comments = item.comments.map((comment) =>
      comment._id !== payload._id ? comment : payload,
    );
  });

  return [...(comments || [])];
};
