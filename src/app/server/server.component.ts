import { Component } from '@angular/core';
// import { Student } from '../../shared/student.model';


import { Meat } from '../../shared/meat.model';
import { Veg } from '../../shared/veg.model';
import　{ Receipt } from '../../shared/receipt.model';
import　{ Bucket } from '../../shared/bucket.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    // serverId = 10;
    // serverStatus = 'offLine';
    // counter = 0;
    // isLogin = false;
    // userName: string;
    // students: Student[] = [new Student('Bill Gates', 'Computer Science'),
    //                        new Student('Steve Jobs', 'Computer Science'),
    //                        new Student('Elon Musk', 'Computer Science')];

    meats: Meat[] = [new Meat( '鸡胸肉', '#'),
                      new Meat( '牛楠', '#'),
                      new Meat('鸡蛋', '＃'),
                      new Meat('鸡翅', '＃')];
    vegs: Veg[] = [new Veg('西红柿', '#'),
                   new Veg('土豆', '#'),
                    new Veg('青椒', '#')];
    receipts: Receipt[] = [new Receipt('土豆炖牛腩',['牛楠'], ['土豆']),
      new Receipt('西红柿炖牛腩',['牛楠'], ['西红柿']),
      new Receipt('西红柿炒鸡蛋',['鸡蛋'], ['西红柿'])];

    bucket: Bucket[] = [new Bucket(['牛腩'], ['土豆'])];
    // bucket: Bucket[] = [new Bucket([], [])];

    result = 'haha';
    isAdd = false;

    getCooked() {
      for (let i = 0; i < this.receipts.length; i++) {
        if (this.receipts[i].meats.length !== this.bucket[0].meats.length || this.receipts[i].vegs.length !== this.bucket[0].vegs.length) {
          this.result = 'bad';
          return;
        }
        for (let j = 0; j < this.receipts[i].meats.length; j++) {
          if (this.receipts[i].meats.indexOf(this.bucket[0].meats[j]) === -1) {
            this.result = 'bad';
            return;
          } else {
            for (let k = 0; k < this.receipts[i].vegs.length; k++) {
              if (this.receipts[k].vegs.indexOf(this.bucket[0].vegs[k]) === -1) {
                this.result = 'bad';
                return;
              }
            }
          }
        }
        this.result = this.receipts[i].name;
        return;
      }
    }

    addIngred(ingred: string){
      if (this.bucket[0].meats.length === 0) {
        for (let i = 0; i < this.receipts.length; i++) {
          for (let j = 0; j < this.receipts[i].meats.length; j++) {
            if (this.receipts[i].meats.indexOf(ingred) !== -1) {
              this.bucket[0].meats.push(ingred);
              return;
            }
          }
        }
      } else {
        if (this.bucket[0].vegs.length === 0) {
          for (let i = 0; i < this.receipts.length; i++) {
            for (let k = 0; k < this.receipts[i].vegs.length; k++) {
              if (this.receipts[k].vegs.indexOf(ingred) !== -1) {
                this.bucket[0].vegs.push(ingred);
                return;
              }
            }
            this.result = this.receipts[i].name;
            return;
          }
        } else {
          for (let j = 0; j < this.bucket[0].meats.length; j++) {
            if (this.bucket[0].meats.indexOf(ingred) === -1) {
              this.bucket[0].meats.push(ingred);
              return;
            }
          }
          for (let k = 0; k < this.bucket[0].vegs.length; k++) {
            if (this.bucket[0].vegs.indexOf(ingred) === -1) {
              this.bucket[0].vegs.push(ingred);
              return;
            }
          }
        }
      }


    }

    delIngred(ingred: string) {
      for (let j = 0; j < this.bucket[0].meats.length; j++) {
        if (this.bucket[0].meats.indexOf(ingred) !== -1) {
          this.bucket[0].meats.splice(this.bucket[0].meats.indexOf(ingred), 1);
          return;
        } else {
          for (let k = 0; k < this.bucket[0].vegs.length; k++) {
            if (this.bucket[0].vegs.indexOf(ingred) !== -1) {
              this.bucket[0].vegs.splice(this.bucket[0].vegs.indexOf(ingred), 1);
              return;
            }
          }
        }
      }
    }


    // getServerStatus() {
    //   return this.serverStatus;
    // }
    //
    // counterPlus() {
    //  this.counter ++;
    // }
    //
    // resetCounter() {
    //   this.counter = 0;
    // }
    //
    // login() {
    //   this.isLogin = true;
    // }
    //
    // signOut() {
    //   this.isLogin = false;
    // }
    //
    // // Event Binding
    // onUpdateUserName(event: Event) {
    //   this.userName = (<HTMLInputElement>event.target).value;
    // }


}
