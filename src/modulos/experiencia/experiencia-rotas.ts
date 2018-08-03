import * as express from "express";
import { ExperienciaController } from "./experiencia-controller";

class ExperienciaRotas {
  public express: express.Application;
  public router: express.Router;
  public experienciaController: ExperienciaController;

  constructor() {
      this.express = express();
      this.router = express.Router();
      this.experienciaController = new ExperienciaController();
      this.initRoutes();
  }


  private initRoutes() {
    this.router.get("/", this.experienciaController.getAll);
  }
}

export default new ExperienciaRotas().router;
