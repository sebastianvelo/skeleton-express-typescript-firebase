import { ActionProps } from "../action/ActionWidget";
import Widget from "../../../../common/widget/Widget";

export interface CardProps {
  header?: string;
  body?: {
    title?: string;
    content?: string;
  };
  footer?: {
    actions?: ActionProps[];
  };
}

const CardWidget = (props?: CardProps) =>
  Widget.builder<CardProps>("card").setData(props);

export default CardWidget;
