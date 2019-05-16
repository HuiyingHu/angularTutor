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

    meats: Meat[] = [new Meat( '鸡胸肉', '../../assets/imgs/chicken.jpg'),
                      new Meat( '牛腩', '../../assets/imgs/beef.jpg'),
                      new Meat('鸡蛋', '../../assets/imgs/egg.jpg'),
                      new Meat('鸡翅', '../../assets/imgs/chicken_wing.jpg')];
    vegs: Veg[] = [new Veg('西红柿', '../../assets/imgs/tomato.jpg'),
                   new Veg('土豆', '../../assets/imgs/potato.jpg'),
                    new Veg('辣椒', '../../assets/imgs/pepper.jpg')];
    // receipts: Receipt[] = [new Receipt('土豆炖牛腩',['牛楠'], ['土豆']),
    //   new Receipt('西红柿炖牛腩',['牛楠'], ['西红柿']),
    //   new Receipt('西红柿炒鸡蛋',['鸡蛋'], ['西红柿'])];

  receipts: Receipt[] = [new Receipt('土豆炖牛腩',['牛腩', '土豆']),
                        new Receipt('土豆炖鸡块',['鸡胸肉', '土豆']),
                        new Receipt('西红柿炖牛腩',['牛腩', '西红柿']),
                        new Receipt('红烧牛肉',['牛腩', '辣椒']),
                        new Receipt('西红柿炒鸡蛋',['西红柿', '鸡蛋'])];

    bucket: Bucket[] = [new Bucket([])];
    // bucket: Bucket[] = [new Bucket([], [])];

    result = ' ';
    isFound = true;
    dishsrc = '../../assets/imgs/prepare.jpg';

    getCooked() {
      this.result = ' ';
      if (this.bucket[0].ingreds.length === 0) {
        this.result = '';
        return;
      }　else {
        for (let i = 0; i < this.receipts[i].ingreds.length; i++) {
          this.isFound = true;
          if (this.receipts[i].ingreds.length === this.bucket[0].ingreds.length ) {
            for (let j = 0; j < this.bucket[0].ingreds.length; j++) {
              if (this.receipts[i].ingreds.indexOf(this.bucket[0].ingreds[j]) !== -1) {
                continue;
              } else {
                this.isFound = false;
              }
            }
            if (this.isFound) {
              this.result = this.receipts[i].name;
              if (this.result === '土豆炖牛腩') {
                this.dishsrc = '../../assets/imgs/potato_beef.jpg';
              }

              if (this.result === '土豆炖鸡块') {
                this.dishsrc = '../../assets/imgs/potato_chicken.jpg';
              }

              return;
            }

          }
          this.isFound = false;
        }
        if (!this.isFound) {
          this.result = '黑暗料理';
          this.dishsrc = '../../assets/imgs/dark.jpg';
          return;
        }

      }
    }

    reset() {
      this.bucket[0].ingreds = [];
      this.result = '';
      this.dishsrc = '../../assets/imgs/prepare.jpg';
    }

    addIngred(ingred: string){
      if (this.bucket[0].ingreds.length === 0) {
        this.bucket[0].ingreds.push(ingred);
        return;

      } else {
        for (let j = 0; j < this.bucket[0].ingreds.length; j++) {
          if (this.bucket[0].ingreds.indexOf(ingred) === -1) {
            this.bucket[0].ingreds.push(ingred);
            return;
          }
        }
      }
    }

    delIngred(ingred: string) {

      if (this.bucket[0].ingreds.length === 0) {
        return;

      } else {
        for (let j = 0; j < this.bucket[0].ingreds.length; j++) {
          if (this.bucket[0].ingreds.indexOf(ingred) !== -1) {
            this.bucket[0].ingreds.splice(this.bucket[0].ingreds.indexOf(ingred), 1);
            return;
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
