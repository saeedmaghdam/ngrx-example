import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterInterface } from 'src/store/interfaces/CounterInterface';
import * as counter from 'src/store/actions/counter.actions';
import * as advancedCounter from 'src/store/actions/advancedCounter.actions';
import { countSelect } from 'src/store/selects/counter.select';
import { advancedCountSelect } from 'src/store/selects/advancedCounter.select';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>;
  advancedCount$: Observable<number>;
 
  constructor(private store: Store<CounterInterface>) {
    this.count$ = this.store.pipe(select(countSelect));
    this.advancedCount$ = this.store.pipe(select(advancedCountSelect))
    this.store.pipe(select(countSelect)).subscribe(data => console.log(data));
  }
 
  increment() {
    this.store.dispatch(counter.increment());
  }
 
  decrement() {
    this.store.dispatch(counter.decrement());
  }
 
  reset() {
    this.store.dispatch(counter.reset());
  }

  advancedIncrement() {
    this.store.dispatch(advancedCounter.increment({steps: 100}));
  }
 
  advancedDecrement() {
    this.store.dispatch(advancedCounter.decrement({steps: 100}));
  }
 
  advancedReset() {
    this.store.dispatch(advancedCounter.reset());
  }
}
