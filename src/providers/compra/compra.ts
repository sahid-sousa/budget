import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database'

@Injectable()
export class CompraProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(compra: Compra) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {

        let sql = 'INSERT INTO compras VALUES (null, ?, ?, ?)';
        let data = [compra.nome, compra.orcamento, compra.status];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public update(compra: Compra) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'UPDATE compras SET nome = ?, orcamento = ? WHERE id = ?';
        let data = [compra.nome, compra.orcamento, compra.id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {

        let sql = 'DELETE FROM compras WHERE id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT * FROM compras WHERE id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {

              let item = data.rows.item(0);
              let resposta = new Compra();

              resposta.id = item.id;
              resposta.nome = item.name;
              resposta.orcamento = item.price;

              return resposta;
            }

            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll() {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {

        let sql = 'SELECT * FROM compras ORDER BY id DESC';
        let data = [];


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

export class Compra {
  id: number;
  nome: string;
  orcamento: number;
  status: number;
}
