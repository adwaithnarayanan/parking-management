export type NavInnerLinkType = {
  item: string;
  active: boolean;
};

export type NavLinkType = {
  item: string;
  icon: string;
  innerLinks: NavInnerLinkType[] | null;
  active: boolean;
};
