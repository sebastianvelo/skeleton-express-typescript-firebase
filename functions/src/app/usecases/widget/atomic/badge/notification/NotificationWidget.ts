import Widget from "../../../../../common/widget/Widget";
import FeedbackType from "../../../../../model/common/types/FeedbackType";
import Size from "../../../../../model/common/types/Size";

interface NotificationProps {
  type: FeedbackType;
  size?: Size;
  quiet?: boolean;
}

const NotificationWidget = (props?: NotificationProps) =>
  Widget.builder<NotificationProps>("notification").setData(props);

export default NotificationWidget;
