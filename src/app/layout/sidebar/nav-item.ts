
export interface NavItem {
    headingName?: String;
    displayName: string;
    iconName: string;
    disabled?: boolean;
    route?: string;
    children?: NavItem[];
  }
  