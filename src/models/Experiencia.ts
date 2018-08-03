
import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  HasOne,
  Length,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table({
  timestamps: false,
})
export class Experiencia extends Model<Experiencia> {

  @PrimaryKey
  @Column(DataType.STRING) 
  public id: string;

  @Column(DataType.STRING) public nome: string;

  @Column(DataType.STRING) public períodoInicio: string;

  @Column(DataType.STRING) public períodoFim: string;

  @Column(DataType.STRING) public descricao: string;

  @Column(DataType.STRING) public cargo: string;

  @Column(DataType.STRING) public tecnologias: string;

  @Column(DataType.STRING) public imagem: string;

}
