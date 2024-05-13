export interface ComponentProp {
  content?: string;
  className?: string;
  style?: Object | any;
}

export interface MaincomponentProp extends ComponentProp {
  element?: string;
  items?: Array<TitleCardItem>;
}

export interface BlockProp extends MaincomponentProp {
  component?: string;
}

export interface ButtonProp extends ComponentProp {
  redirectTo?: string;
}

export interface TitleCardItem {
  content: string;
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

export interface CssSettingsArgs {
  pressed: boolean;
  cssProperty: string;
  cssValue: string | number;
}

export interface EmbedComponentProp {
  iframeSrc: string | undefined;
  style: Object;
  className?: string;
  renderIn?: string;
}
