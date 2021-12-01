import Widget from "../../../../common/widget/Widget";
import { ImageProps } from "../../atomic/image/ImageWidget";
import { ActionProps } from "../action/ActionWidget";

export interface StoryProps extends ActionProps {
  img?: ImageProps;
  title?: string;
  subtitle?: string;
  text?: string;
  hoverable?: boolean;
}

const StoryWidget = (props?: StoryProps) =>
  Widget.builder<StoryProps>("story").setData(props);

export default StoryWidget;
