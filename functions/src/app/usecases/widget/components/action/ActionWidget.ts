import Widget from "../../../../common/widget/Widget";
import { ActionAnchorProps } from "../../atomic/anchor/ActionAnchorWidget";
import { ActionButtonProps } from "../../atomic/button/ActionButtonWidget";
import { ActionLinkProps } from "../../atomic/link/ActionLinkWidget";

export interface ActionProps
  extends ActionLinkProps,
    ActionAnchorProps,
    ActionButtonProps {}

const ActionWidget = (props?: ActionProps) =>
  Widget.builder<ActionProps>("action").setData(props);

export default ActionWidget;
