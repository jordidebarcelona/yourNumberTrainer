import { Component } from '@angular/core';
import { TimerComponent } from './timer.component';

@Component({
    selector: 'number',
    templateUrl: './app/number/numberGeneration.component.html'
})

export class NumberGenerationComponent {
    myNumber: string = "";
    guessedNumber: number = 0;
    numberOfDigits: number = 20;
    memoTime: number = 0;
    states: string[] = [
        'preparingNumber',
        'memorizingNumber',
        'guessingNumber'
    ];

    state: string = this.states[0];

    generateNumber(): void {
        this.myNumber = this.createRandomNumber();
        this.state = this.states[1];
    }

    createRandomNumber(): string {
        let n: string = "";

        for (var i = 0; i < this.numberOfDigits; i++) {
            n = n + Math.floor(Math.random() * 10);
        }

        return n;
    }

    timerFinished(ticks: number): void {
        this.memoTime = ticks;
        this.state = this.states[2];       
    }
}