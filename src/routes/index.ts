import * as express from "express";
import experienciaRotas from "../modulos/experiencia/experiencia-rotas";
import perfilRotas from "../modulos/perfil/perfil-rotas";
import projetoRotas from "../modulos/projeto/projeto-rotas";

class Routes {
  public express: express.Application;
  public router: express.Router;

  constructor() {
    this.express = express();
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.use("/experiencias", experienciaRotas);
    this.router.use("/perfis", perfilRotas);
    this.router.use("/projetos", projetoRotas);
  }
}

export default new Routes().router;
