import { Request, Response } from "express";
import Controller from "../../common/controller/Controller";
import Resource from "../../config/Resource";
import LayoutService from "../../service/layout/LayoutService";

class LayoutController extends Controller {
  resource: Resource = Resource.LAYOUT;

  setEndpoints() {
    this.setEndpoint("/").get((req: Request, res: Response) => {
      LayoutService.getLayout().then((layout) => {
        res.send(layout);
      });
    });

    return this.app;
  }
}

export default LayoutController;
