export interface IWidget<Model> {
  uiType: string;
  id?: string;
  data?: Model;
  children?: IWidget<any>[];
}
class Widget<Model> implements IWidget<Model> {
  uiType: string;

  id?: string;

  data?: Model;

  children: IWidget<any>[] = [];

  protected constructor(uiType: string) {
    this.uiType = uiType;
  }

  static builder = <M>(uiType: string) => new Widget<M>(uiType);

  setId(id: string) {
    this.id = id;
    return this;
  }

  setData(data?: Model) {
    this.data = data;
    return this;
  }

  setChildren(children: IWidget<any>[]) {
    this.children = children;
    return this;
  }

  addChild<M>(child: IWidget<M>) {
    this.children.push(child);
    return this;
  }
}

export default Widget;
