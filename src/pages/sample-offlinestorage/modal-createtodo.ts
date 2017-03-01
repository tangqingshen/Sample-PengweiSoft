import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import * as PouchDB  from 'pouchdb';

@Component({
  templateUrl: 'modal-createtodo.html'
})
export class ModalCreateTodoPage {
  constructor(public viewCtrl: ViewController) { }

  public text;
  private db;

  ionViewDidLoad() {
    this.db = new PouchDB('pengwei_todo');
  }

  saveTodo() {
    var that = this;
    var todo = {
      _id: new Date().toISOString(),
      title: that.text,
      completed: false
    };
    that.db.put(todo, function (err, result) {
      that.viewCtrl.dismiss();
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
