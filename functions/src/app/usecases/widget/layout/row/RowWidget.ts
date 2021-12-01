import Widget from "../../../../common/widget/Widget";

interface RowProps {
  responsive?: boolean;
  reverse?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

const RowWidget = (props?: RowProps) =>
  Widget.builder<RowProps>("row").setData(props);

export default RowWidget;
