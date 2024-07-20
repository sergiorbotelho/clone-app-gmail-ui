import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { IconNameProps } from "@/components/drawer-button";

interface CustomOptions extends DrawerNavigationOptions {
  iconsName: IconNameProps;
  isDivider?: boolean;
  notifications?: number;
  sectionTitle?: string;
}
