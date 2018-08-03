
import { NextFunction, Request, Response } from "express";
import { Sequelize, Transaction } from "sequelize";
import { IError } from "../../interfaces/error";
import { ICustomRequest } from "../../interfaces/custom-request";
import { Projeto } from "../../models/Projeto";

export class ProjetoController {

  constructor() {
  }

  public async getAll(request: ICustomRequest, response: Response, nextFunction: NextFunction) {
    const projetos: any[] = await Projeto.findAll({
    });

    response.json(projetos);
  }
}
