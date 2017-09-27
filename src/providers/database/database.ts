import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  /**
   * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
   */
  public getDB() {
    return this.sqlite.create({
      name: 'budget.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB().then((db: SQLiteObject) => {
         // Criando as tabelas
        this.createTables(db);
       }).catch(e => console.log(e));
  }
 
  /**
   * Criando as tabelas no banco de dados
   * @param db
   */
  private createTables(db: SQLiteObject) {
    // Criando as tabelas
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS compras(id INTEGER PRIMARY KEY AUTOINCREMENT, nome CHAR(100) NOT NULL, orcamento REAL NOT NULL, status INTEGER)'],
      ['CREATE TABLE IF NOT EXISTS itens(id INTEGER PRIMARY KEY AUTOINCREMENT, nome CHAR(100) NOT NULL,	valor REAL NOT NULL, compra_id INTEGER, FOREIGN KEY(compra_id) REFERENCES compras(id))']
    ])
      .then(() => console.log('Tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }

}
