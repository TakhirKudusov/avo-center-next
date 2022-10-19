export type TMenuItem = {
  icon: JSX.Element;
  label: string;
  controller?: JSX.Element;
  clickHandler?: () => void;
}