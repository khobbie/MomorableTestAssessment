import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Asset extends BaseModel {
  public static table = "assets";

  @column({ isPrimary: true })
  public id: number;

  @column()
  public type: string;

  @column()
  public filename: string;

  @column()
  public extension: string;

  @column()
  public score_type_1: number;

  @column()
  public score_type_2: number;

  @column()
  public score_type_3: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
