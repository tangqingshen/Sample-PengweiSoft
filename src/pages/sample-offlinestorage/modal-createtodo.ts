import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';

import * as PouchDB  from 'pouchdb';

@IonicPage()
@Component({
  templateUrl: 'modal-createtodo.html'
})
export class ModalCreateTodo {
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
