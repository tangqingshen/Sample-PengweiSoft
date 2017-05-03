import { Component } from '@angular/core';
import { ViewController, NavParams, IonicPage } from 'ionic-angular';

import * as PouchDB  from 'pouchdb';

@IonicPage()
@Component({
  templateUrl: 'modal-edittodo.html'
})
export class ModalEditTodo {
  constructor(public viewCtrl: ViewController, private navParams: NavParams) { }

  private _todo;
  public todo: any = {};
  private db;

  ionViewDidLoad() {
    var that = this;
    let id = this.navParams.get('id');

    that.db = new PouchDB('pengwei_todo');
    that.db.get(id).then((todo) => {
      that._todo = todo;
      that.todo = {
        id: todo._id,
        title: todo.title,
        completed: todo.completed
      };
    })
  }

  saveTodo() { 
    var that = this; 
    that._todo.title = that.todo.title;
    that._todo.completed = that.todo.completed;
    that.db.put(that._todo, function (err, result) {
      that.viewCtrl.dismiss();
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

