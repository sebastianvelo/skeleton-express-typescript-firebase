import Widget from "../../../../common/widget/Widget";
import ColorProps from "../../../../model/common/util/ColorProps";
import SizeProps from "../../../../model/common/util/SizeProps";
import StyleableProps from "../../../../model/common/util/StyleableProps";

export interface ActionButtonProps
  extends StyleableProps,
    ColorProps,
    SizeProps {
  quiet?: boolean;
  disabled?: boolean;
}

const ActionButtonWidget = (props?: ActionButtonProps) =>
  Widget.builder<ActionButtonProps>("button").setData(props);

export default ActionButtonWidget;
