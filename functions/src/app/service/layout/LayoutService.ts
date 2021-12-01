import LayoutProps from "../../model/layout/LayoutProps";
import getFooter from "../../usecases/layout/footer/FooterUseCases";
import getMain from "../../usecases/layout/main/MainUseCases";
import getNavigation from "../../usecases/layout/navigation/NavigationUseCases";

class LayoutService {
  public static async getLayout(): Promise<LayoutProps> {
    return {
      navigation: getNavigation(),
      main: getMain(),
      footer: getFooter()
    };
  }
}

export default LayoutService;
