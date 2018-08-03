
import { NextFunction, Request, Response } from "express";
import { Sequelize, Transaction } from "sequelize";
import { IError } from "../../interfaces/error";
import { ICustomRequest } from "../../interfaces/custom-request";
import { Perfil } from "../../models/Perfil";

export class PerfilController {

  constructor() {
  }

  public async getAll(request: ICustomRequest, response: Response, nextFunction: NextFunction) {
    const perfis: any[] = await Perfil.findAll({
    });

    response.json(perfis);
  }
}
