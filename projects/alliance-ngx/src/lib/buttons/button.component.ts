import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class AgxButtonComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

  public clicked(event: MouseEvent): void {
      event.preventDefault();
      event.stopPropagation();

      // Do somethin here...
  }

}


/*@Component({
  selector: 'agx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class AgxButtonComponent implements OnInit {

  private isLoading: boolean = false;
  @Input("loader") public enableLoader: boolean = false;
  @Output("click") public clickEmitter: EventEmitter<AgxButtonEvent> = new EventEmitter(true);

  constructor() { }
  ngOnInit(): void {
    console.log(this.canShowLoader)
  }

  public get canShowLoader(): boolean {
    return this.isLoading && this.enableLoader;
  }

  public clicked(event: MouseEvent): void {
      event.preventDefault();
      event.stopPropagation();

      if(this.enableLoader) {
          this.isLoading = true;
      }
      
      this.clickEmitter.emit({
        next: () => this.isLoading = false,
        event
      })
  }

}*/

