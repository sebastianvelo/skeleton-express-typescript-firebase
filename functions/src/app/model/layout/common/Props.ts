import { IWidgetPage } from "../../../common/widget/WidgetPage";
import { ImageProps } from "../../../usecases/widget/atomic/image/ImageWidget";
import { ActionLinkProps } from "../../../usecases/widget/atomic/link/ActionLinkWidget";
import { ActionProps } from "../../../usecases/widget/components/action/ActionWidget";

interface MenuProps {
  toggler: ImageProps;
  options: ActionProps[];
}
interface BrandProps {
  header?: string;
}
interface NavigationHeaderProps extends BrandProps {
  header?: string;
  menu?: MenuProps;
}
interface NavigationActionsProps {
  actions?: ActionLinkProps[];
}

export interface NavigationProps
  extends NavigationHeaderProps,
    NavigationActionsProps {}

export interface MainProps {
  pages?: IWidgetPage<any>[];
}

interface AuthorProps {
  name?: string;
  linkedin?: string;
}
export interface FooterProps {
  author?: AuthorProps;
}
