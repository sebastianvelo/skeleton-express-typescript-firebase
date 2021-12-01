import Widget from "../../../../../common/widget/Widget";
import ColorProps from "../../../../../model/common/util/ColorProps";

interface DotProps extends ColorProps {}

const DotWidget = (props?: DotProps) =>
  Widget.builder<DotProps>("dot").setData(props);

export default DotWidget;
