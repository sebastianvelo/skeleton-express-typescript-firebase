import Widget from "../../../../common/widget/Widget";
import ColorProps from "../../../../model/common/util/ColorProps";

interface PaginationProps extends ColorProps {
  total: number;
  pagesToShow: number;
  active?: number;
}

const PaginationWidget = (props?: PaginationProps) =>
  Widget.builder<PaginationProps>("pagination").setData(props);

export default PaginationWidget;
