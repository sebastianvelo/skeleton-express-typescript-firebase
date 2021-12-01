import Widget from "../../../../common/widget/Widget";
import { CheckboxLabelProps } from "../../atomic/checkbox/CheckboxLabelWidget";

interface CheckboxListItemProps {
  checkbox?: CheckboxLabelProps;
  left?: boolean;
}

interface CheckboxListProps {
  items?: CheckboxListItemProps[];
  left?: boolean;
}

const CheckboxListWidget = (props?: CheckboxListProps) =>
  Widget.builder<CheckboxListProps>("checkbox-list").setData(props);

export default CheckboxListWidget;
