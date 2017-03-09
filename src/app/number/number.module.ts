import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NumberGenerationComponent }  from './numberGeneration.component';
import { TimerComponent } from './timer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ NumberGenerationComponent, TimerComponent ],
  exports: [ NumberGenerationComponent ]  
})

export class NumberModule { }