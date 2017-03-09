import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';

@Component({
    selector: 'timer',
    templateUrl: './app/number/timer.component.html'      
})

export class TimerComponent {
    @Output () notifyTimerFinish: EventEmitter<number> = new EventEmitter<number>();

  ticks =0;
  private timer: any;
  private sub: Subscription;

  tickerFunc(tick: number) {
      console.log(tick);
      this.ticks = tick;
  }

  ngOnInit() {
      this.startTimer();
  }

  startTimer(){
    this.timer = Observable.timer(0,1000);
    //timer.subscribe(t =>this.ticks = t);
    this.sub = this.timer.subscribe((t:number) => this.tickerFunc(t));
  }

  endTimer(){
    console.log("Destroy timer");
    this.sub.unsubscribe();
  }

  gotIt(){
      this.endTimer();
      this.notifyTimerFinish.next(this.ticks)
  }

  ngDestroy(){
    this.endTimer();  
    alert("Destroy was called!!");
  }
}