import Widget from "../../../../common/widget/Widget";
import { MessageProps } from "../message/MessageWidget";

interface SnackbarProps extends MessageProps {
  open?: boolean;
}

const SnackbarWidget = (props?: SnackbarProps) =>
  Widget.builder<SnackbarProps>("snackbar").setData(props);

export default SnackbarWidget;
