
export interface NavItem {
    displayName: string;
    iconName: string;
    disabled?: boolean;
    route?: string;
    children?: NavItem[];
  }
  