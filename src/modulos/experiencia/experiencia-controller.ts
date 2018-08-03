
import { NextFunction, Request, Response } from "express";
import { Sequelize, Transaction } from "sequelize";
import { IError } from "../../interfaces/error";
import { ICustomRequest } from "../../interfaces/custom-request";
import { Experiencia } from "../../models/Experiencia";

export class ExperienciaController {

  constructor() {
  }

  public async getAll(request: ICustomRequest, response: Response, nextFunction: NextFunction) {
    const experiencias: any[] = await Experiencia.findAll({
    });

    response.json();
  }
}
