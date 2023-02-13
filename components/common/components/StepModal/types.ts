export type Step = {
  id: number;
  title: string;
  subTitle: string;
  renderIcon: (hasError: boolean) => JSX.Element;
};

export type Stage = 'children' | 'followSteps' | 'successWindow';
