export interface ItemInterface {
  key?: string;
  title: string;
  icon?: Object;
  disabled?: boolean;
  hidden?: boolean;
  childern?: Array<ItemInterface>;
};

export interface PropsInterface {
  dataSource: Array<ItemInterface>;
  mode?: string;
  theme?: string;
  onSelect?: (event: any) => void;
};