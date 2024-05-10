export interface ComponentProp {
  content?: string;
  className?: string;
  style?: Object;
}

export interface MaincomponentProp extends ComponentProp {
  element?: string;
  items?: Array<TitleCardItem>;
}

export interface BlockProp extends MaincomponentProp {
  component?: string;
}

export interface ButtonProp extends ComponentProp {
  clickHandler?: () => void;
}

export interface TitleCardItem {
  cardText: string;
  cardImgSrc: string;
  cardRoute?: string;
}

export interface MaincomponentPropWithId extends BlockProp {
  id?: string;
}

export interface BlockConfigType {
  name: string;
  defaultConfig: MaincomponentPropWithId;
}
