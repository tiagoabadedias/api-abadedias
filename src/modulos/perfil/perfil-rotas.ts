import * as express from "express";
import { PerfilController } from "./perfil-controller";

class PerfilRotas {
  public express: express.Application;
  public router: express.Router;
  public perfilController: PerfilController;

  constructor() {
      this.express = express();
      this.router = express.Router();
      this.perfilController = new PerfilController();
      this.initRoutes();
  }


  private initRoutes() {
    this.router.get("/", this.perfilController.getAll);
  }
}

export default new PerfilRotas().router;
