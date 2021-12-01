import Widget from "../../../../common/widget/Widget";
import ColorProps from "../../../../model/common/util/ColorProps";
import StyleableProps from "../../../../model/common/util/StyleableProps";

export interface ActionAnchorProps
  extends StyleableProps,
    ColorProps {
  url?: string;
}

const ActionAnchorWidget = (props?: ActionAnchorProps) =>
  Widget.builder<ActionAnchorProps>(`anchor`).setData(props);

export default ActionAnchorWidget;
