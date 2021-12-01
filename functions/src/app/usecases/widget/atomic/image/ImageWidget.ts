import Widget from "../../../../common/widget/Widget";
import RoundableProps from "../../../../model/common/util/RoundeableProps";

export interface ImageProps extends RoundableProps {
  alt?: string;
  src?: string;
}

const ImageWidget = (props?: ImageProps) =>
  Widget.builder<ImageProps>("img").setData(props);

export default ImageWidget;
