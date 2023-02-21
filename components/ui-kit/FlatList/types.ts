export type ListItem = {
  id: number | string;
  label: string;
  value?: string;
  children?: JSX.Element;
};
