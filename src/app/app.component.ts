import { Component } from '@angular/core';
import { TodoWrapperComponent } from "./todo-wrapper/todo-wrapper.component";
import { ProductParentComponent } from './product-parent/product-parent.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from './app-routing/app-routing.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , AppRoutingModule , HeaderComponent , TodoWrapperComponent, ProductParentComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-3';
}
