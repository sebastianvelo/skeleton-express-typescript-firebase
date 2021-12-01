import Widget from "../../../../common/widget/Widget";
import { TitleProps } from "../../atomic/title/TitleWidget";

export interface ArticleProps {
  title?: TitleProps;
}

const ArticleWidget = (props?: ArticleProps) =>
  Widget.builder<ArticleProps>("article").setData(props);

export default ArticleWidget;
