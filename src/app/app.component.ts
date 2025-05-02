import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterContentComponent } from "./app/public/components/footer-content/footer-content.component";
import { ToolbarComponent } from "./app/public/components/toolbar/toolbar.component";
import { ExhibitionListComponent } from "./app/exhibitions/components/exhibition-card/exhibition-list/exhibition-list.component";

@Component({
  selector: 'app-root',
  imports: [ FooterContentComponent, ToolbarComponent, ExhibitionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pc1-1ASI0729-u202417468';
}
