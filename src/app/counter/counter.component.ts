import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterInterface } from 'src/store/interfaces/CounterInterface';
import { increment, decrement, reset } from 'src/store/actions/counter.actions';
import { countSelect } from 'src/store/selects/counter.select';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>
 
  constructor(private store: Store<CounterInterface>) {
    this.count$ = this.store.pipe(select(countSelect));
    this.store.pipe(select(countSelect)).subscribe(data => console.log(data));
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
