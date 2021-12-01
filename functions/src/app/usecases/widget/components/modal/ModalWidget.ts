import Widget from "../../../../common/widget/Widget";
import { CardProps } from "../card/CardWidget";

export interface ModalProps extends CardProps {}

const ModalWidget = (props?: ModalProps) =>
  Widget.builder<ModalProps>("modal").setData(props);

export default ModalWidget;
