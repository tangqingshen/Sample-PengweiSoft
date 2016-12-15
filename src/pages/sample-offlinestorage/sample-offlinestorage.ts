import {
  Component,
  NgZone
} from '@angular/core';
import {
  NavController,
  ToastController,
  ModalController,
  ViewController,
  NavParams,
  ItemSliding
} from 'ionic-angular';

declare var PouchDB;

/*
  Generated class for the SampleOfflinestorage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sample-offlinestorage',
  templateUrl: 'sample-offlinestorage.html'
})
export class OfflineStoragePage {

  private remoteDB = "http://dbreader:Passw0rd@localhost:5984/pengwei_todo";
  public isOnline = false;
  public todos = [];
  private db;
  private sync;
  private toast;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public modalCtrl: ModalController, public zone: NgZone) { }

  ionViewWillUnload() {
    this.isOnline = false;
    if (this.sync) {
      this.sync.cancel();
    }
  }

  ionViewDidLoad() {
    var that = this;

    that.toast = this.toastCtrl.create({
      message: '网络连接已断开',
      duration: 2000,
      position: 'top'
    });

    that.db = new PouchDB('pengwei_todo');

    that.db.changes({
      since: 'now',
      live: true,
      include_docs: true
    }).on('change', function (change) {
      // handle change
      console.log('chnage : ' + JSON.stringify(change));
      // 删除
      if (change.deleted) {
        for (var i = 0; i < that.todos.length; i++) {
          if (that.todos[i].id == change.doc._id) {
            that.zone.run(() => {
              that.todos.splice(i, 1);
            });
            return;
          }
        }
      } else {
        for (var i = 0; i < that.todos.length; i++) {
          if (that.todos[i].id == change.doc._id) {
            // 修改
            that.zone.run(() => {
              that.todos[i].title = change.doc.title;
              that.todos[i].completed = change.doc.completed;
            });
            return;
          }
        }
        // 添加
        that.zone.run(() => {
          that.todos.push({
            id: change.doc._id,
            title: change.doc.title,
            completed: change.doc.completed
          });
        })
      }
    })

    // 获取所有数据
    that.db.allDocs({ include_docs: true, attachments: true }).then(function (result) {
      result.rows.forEach(function (item) {
        that.todos.push({
          id: item.doc._id,
          title: item.doc.title,
          completed: item.doc.completed
        });
      })
    });
  }

  editTodo(slidingItem: ItemSliding, id) {
    let modal = this.modalCtrl.create(ModalEditTodoPage, { id: id });
    modal.present();
    slidingItem.close();
  }

  removeTodo(slidingItem: ItemSliding, id) {
    var that = this;
    that.db.get(id).then((todo) => {
      that.db.remove(todo);
      slidingItem.close();
    })
  }

  toggleNetwork() {
    if (this.isOnline) {
      this.isOnline = false;
      this.toast.present();

      if (this.sync) {
        this.sync.cancel();
      }
    } else {
      this.isOnline = true;
      this.sync = this.db.sync(this.remoteDB,
        {
          live: true,
          retry: true
        });
    }
  }

  createTodo() {
    let modal = this.modalCtrl.create(ModalCreateTodoPage);
    modal.present();
  }
}

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

@Component({
  templateUrl: 'modal-edittodo.html'
})
export class ModalEditTodoPage {
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

