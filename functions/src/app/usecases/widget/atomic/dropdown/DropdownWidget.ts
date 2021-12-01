import Widget, { IWidget } from "../../../../common/widget/Widget";

interface DropdownProps {
  trigger?: IWidget<any> | IWidget<any>[];
  content?: IWidget<any> | IWidget<any>[];
}

const DropdownWidget = (props?: DropdownProps) =>
  Widget.builder<DropdownProps>("dropdown").setData(props);

export default DropdownWidget;
