import Widget from "../../../../common/widget/Widget";
import FeedbackType from "../../../../model/common/types/FeedbackType";

export interface MessageProps {
  color?: FeedbackType;
  quiet?: boolean;
}

const MessageWidget = (props?: MessageProps) =>
  Widget.builder<MessageProps>("message").setData(props);

export default MessageWidget;
