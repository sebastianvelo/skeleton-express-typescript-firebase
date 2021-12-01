import Widget from "../../../../common/widget/Widget";
import { ActionButtonProps } from "../../atomic/button/ActionButtonWidget";
import { ActionProps } from "../action/ActionWidget";

interface ButtonDropdownContentProps {
  actions?: ActionProps[];
}

interface ButtonDropdownProps
  extends ActionButtonProps,
    ButtonDropdownContentProps {}

const ButtonDropdownWidget = (props?: ButtonDropdownProps) =>
  Widget.builder<ButtonDropdownProps>("button-dropdown").setData(props);

export default ButtonDropdownWidget;
