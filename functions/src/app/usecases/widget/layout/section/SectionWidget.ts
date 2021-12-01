import Widget from "../../../../common/widget/Widget";
import { TitleProps } from "../../atomic/title/TitleWidget";
import { ArticleProps } from "../article/ArticleWidget";

interface SectionProps {
  articles?: ArticleProps[];
  title?: TitleProps;
}

const SectionWidget = (props?: SectionProps) =>
  Widget.builder<SectionProps>("section").setData(props);

export default SectionWidget;
