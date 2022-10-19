import React from 'react';

export type Tab = 'general' | 'support' | 'hosting' | 'product';

export type Category = {
  name: Tab;
  Icon: React.FC;
};

export type Question = {
  name: string;
  body: string;
  link: string;
  id: QuestionId;
};

export type QuestionId = '1' | '2' | '3' | '4' | '5';

export type HandleDeleteElFromArrFunc<T extends any> = (
  arr: T[],
  el: number,
) => T[];
