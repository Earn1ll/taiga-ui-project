import { Component } from '@angular/core';


@Component({
  selector: 'app-vebinars',
  templateUrl: './vebinars.component.html',
  styleUrls: ['./vebinars.component.less']
})
export class VebinarsComponent {

  condition: boolean=true;
     
    toggle(){
        this.condition=!this.condition;}

  readonly data = [
    {
      id: '12345',
      name: '130610:iv3_proggers',
      text: 'Вебинар 130610:iv3_proggers, начало 05.11.2022 18:41,длительность 144 минуты, участников: 7',
      type: 'LiveWebinars',
      nerros: 0,
      count1: 7,
      count2: 144,
      data: {minutes:144,roomid:'130610:iv3_proggers',group:' 130610',start:1666215320,stat:7},
      webinarId:'12214415fs2323',
      mode: null,
      created:'2022-11-05'
  },
  {
    id: '123455',
    name: '130610:iv3_testing',
    text: 'Вебинар 130610:iv3_testing, начало 05.11.2022 18:41,длительность 120 минут, участников: 20',
    type: 'LiveWebinars',
    nerros: 0,
    count1: 20,
    count2: 256,
    data: {minutes:144,roomid:'130610:iv3_testing',group:' 130313',start:1223415320,stat:20},
    webinarId:'12214415dasf333',
    mode: null,
    created:'2022-12-07'
},
] as const;

readonly columns = Object.keys(this.data[0]);


}
