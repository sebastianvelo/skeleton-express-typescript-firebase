import Widget, { IWidget } from "./Widget";

export interface IWidgetPage<Model> extends IWidget<Model> {
  route?: string;
}
class WidgetPage<Model> extends Widget<Model> {
  route?: string;

  static builder = <M>(uiType: string) => new WidgetPage<M>(uiType);

  setRoute(route: string) {
    this.route = route;
    return this;
  }
}

export default WidgetPage;
