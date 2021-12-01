import cors from "cors";
import express from "express";
import Controller from "./common/controller/Controller";
import Logger from "./common/log/Logger";

class Application {
  app: express.Application;

  port: number | string;

  controllers: Controller[];

  constructor(port: number | string, controllers: Controller[]) {
    this.app = express();
    this.port = port;
    this.controllers = controllers;
  }

  private setMiddlewares = () => {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(Logger);
  };

  private setControllers = () => {
    this.controllers.forEach((controller) => controller.init(this.app));
  };

  init() {
    this.setMiddlewares();
    this.setControllers();
    return this.app;
  }
}

export default Application;
