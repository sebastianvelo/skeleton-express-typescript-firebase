import Widget from "../../../../../common/widget/Widget";
import ColorProps from "../../../../../model/common/util/ColorProps";

interface PillProps extends ColorProps {}

const PillWidget = (props?: PillProps) =>
  Widget.builder<PillProps>("pill").setData(props);

export default PillWidget;
