
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
export class Perfil extends Model<Perfil> {

  @PrimaryKey
  @Column(DataType.STRING) 
  public id: string;

  @Column(DataType.STRING) public nome: string;

  @Column(DataType.STRING) public link: string;

  @Column(DataType.STRING) public imagem: string;

}
