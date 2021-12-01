import Widget, { IWidget } from "../../../../common/widget/Widget";

interface TabsProps {
  tabs?: {
    header: string;
    content: IWidget<any> | IWidget<any>[];
  }[];
}

const TabsWidget = (props?: TabsProps) =>
  Widget.builder<TabsProps>("tabs").setData(props);

export default TabsWidget;
