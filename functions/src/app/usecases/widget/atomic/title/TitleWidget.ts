import Widget from "../../../../common/widget/Widget";
import ColorProps from "../../../../model/common/util/ColorProps";
import SizeProps from "../../../../model/common/util/SizeProps";

export interface TitleProps extends ColorProps, SizeProps {}

const TitleWidget = (props?: TitleProps) =>
  Widget.builder<TitleProps>("title").setData(props);

export default TitleWidget;
