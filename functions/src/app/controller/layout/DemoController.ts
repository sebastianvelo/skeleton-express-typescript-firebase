import { Request, Response } from "express";
import Controller from "../../common/controller/Controller";
import Resource from "../../config/Resource";
import DemoService from "../../service/demo/DemoService";

class DemoController extends Controller {
  resource: Resource = Resource.DEMO;

  setEndpoints() {
    this.setEndpoint("/").get((req: Request, res: Response) => {
      DemoService.getDemo().then((item) => {
        res.send(item);
      });
    });

    return this.app;
  }
}

export default DemoController;
