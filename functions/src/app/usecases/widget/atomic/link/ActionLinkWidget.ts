import Widget from "../../../../common/widget/Widget";
import ColorProps from "../../../../model/common/util/ColorProps";

export interface ActionLinkProps extends ColorProps {
  route?: string;
}

const ActionLinkWidget = (props?: ActionLinkProps) =>
  Widget.builder<ActionLinkProps>("link").setData(props);

export default ActionLinkWidget;
