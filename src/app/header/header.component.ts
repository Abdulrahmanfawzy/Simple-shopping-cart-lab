import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  counterService = inject(CounterService);
  counter = 0;
  ngOnInit(){
    this.counterService.getCounter().subscribe(response=> this.counter = response);
  }
}
