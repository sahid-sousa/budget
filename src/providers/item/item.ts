import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database'

@Injectable()
export class ItemProvider {

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello ItemProvider Provider');
  }

  public insert(item: Item) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {

        let sql = 'INSERT INTO itens VALUES (null, ?, ?, ?)';
        let data = [item.nome, item.valor, item.compra_id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));

      })
      .catch((e) => console.error(e));
  }

  public update(item: Item) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'UPDATE itens SET nome = ?, valor = ? WHERE id = ?';
        let data = [item.nome, item.valor, item.id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public remove(id: number) {

  }

  public get(id: number) {

  }

  public getAllItemCompra(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {

        let sql = 'SELECT * FROM itens WHERE compra_id = ? ORDER BY id DESC';
        let data = [id];


        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let resposta: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var compra = data.rows.item(i);
                resposta.push(compra);
              }
              return resposta;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

}

export class Item {
  id: number;
  nome: string;
  valor: number;
  compra_id: number
}
