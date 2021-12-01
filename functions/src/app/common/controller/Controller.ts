import express from "express";
import Resource from "../../config/Resource";

abstract class Controller {
  protected app!: express.Application;

  abstract readonly resource: Resource;

  public init(app: express.Application): void {
    this.app = app;
    this.setEndpoints();
  }

  protected abstract setEndpoints(): express.Application;

  public getName = () => this.resource;

  protected setEndpoint = (path: string) =>
    this.app.route(`${this.resource}${path}`);
}

export default Controller;
