export interface ComponentProp {
  content: string;
  className?: string;
  style?: Object;
}

export interface MaincomponentProp extends ComponentProp {
  element?: string;
}

export interface BlockProp extends MaincomponentProp {
  component: string;
}

export interface ButtonProp extends ComponentProp {
  clickHandler?: () => void;
}
