import Widget from "../../../../common/widget/Widget";

export interface CheckboxLabelProps {
  label?: string;
}

const CheckboxLabelWidget = (props?: CheckboxLabelProps) =>
  Widget.builder<CheckboxLabelProps>("checkbox").setData(props);

export default CheckboxLabelWidget;
