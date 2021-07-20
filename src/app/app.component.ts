import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webview';

  callback(action) {
    // var androidCallback = window.jsBridge && jsBridge.invokeAction;
    // var iosCallback = window.webkit && webkit.messageHandlers && webkit.messageHandlers.invokeAction && webkit.messageHandlers.invokeAction.postMessage;
    // if (androidCallback) {
    //   jsBridge.invokeAction(action);
    // }
    // else if (iosCallback) {
    //   webkit.messageHandlers.invokeAction.postMessage(action);
    // }
    // else { }
    // return !!(androidCallback || iosCallback);
  }
}
