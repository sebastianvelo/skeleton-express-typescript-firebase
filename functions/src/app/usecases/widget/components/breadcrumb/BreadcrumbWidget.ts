import Widget from "../../../../common/widget/Widget";
import { ActionLinkProps } from "../../atomic/link/ActionLinkWidget";

interface BreadcrumbProps {
  levels: ActionLinkProps[];
}

const BreadcrumbWidget = (props?: BreadcrumbProps) =>
  Widget.builder<BreadcrumbProps>("breadcrumb").setData(props);

export default BreadcrumbWidget;
