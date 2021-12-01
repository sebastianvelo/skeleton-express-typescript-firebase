import Widget from "../../../../common/widget/Widget";
import { ActionProps } from "../../components/action/ActionWidget";

export interface ActionListProps {
  actions?: ActionProps[];
}

const ActionListWidget = (props?: ActionListProps) =>
  Widget.builder<ActionListProps>("actions").setData(props);

export default ActionListWidget;
