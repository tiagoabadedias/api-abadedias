import * as express from "express";
import { ProjetoController } from "./projeto-controller";

class ProjetoRotas {
  public express: express.Application;
  public router: express.Router;
  public projetoController: ProjetoController;

  constructor() {
      this.express = express();
      this.router = express.Router();
      this.projetoController = new ProjetoController();
      this.initRoutes();
  }


  private initRoutes() {
    this.router.get("/", this.projetoController.getAll);
  }
}

export default new ProjetoRotas().router;
