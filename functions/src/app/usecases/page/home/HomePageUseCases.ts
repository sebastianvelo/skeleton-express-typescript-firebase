import WidgetPage from "../../../common/widget/WidgetPage";
import TitleWidget from "../../widget/atomic/title/TitleWidget";
import PaginationWidget from "../../widget/components/pagination/PaginationWidget";

const getHomePage = WidgetPage.builder("view")
  .setRoute("/home")
  .addChild(TitleWidget())
  .addChild(PaginationWidget({
    total: 25,
    pagesToShow: 8,
    color: 'primary'
  }));

export default getHomePage;
