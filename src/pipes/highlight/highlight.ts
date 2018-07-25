import { Pipe, PipeTransform } from '@angular/core';
// import Prism from 'prismjs';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
// import 'prismjs/components/prism-typescript';

// syntax hightlighter
import '!style-loader!css-loader!prismjs/themes/prism.css';

import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the HighlightPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }
  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}