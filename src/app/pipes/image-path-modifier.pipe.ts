import {Pipe, PipeTransform} from '@angular/core';
import {environment} from "../../environments/environment.prod";

@Pipe({
  name: 'imagePathModifier'
})

export class ImagePathModifierPipe implements PipeTransform {

  transform(resort: Resort, imageType: string): string {

    let link: string = environment.path_image;

    switch (imageType) {
      case"main":
        link += resort.id + ".jpg";
        break;
      case"weather":
        link += "b" + resort.id + ".jpg";
        break;
      case"resort-item-main":
        link += "r" + resort.id + ".jpg";
        break;
      case"resort-item-weather":
        link += "res" + resort.id + ".jpg";
        break;
      case"stars":
        link += "star.png";
        break;
      default:
    }
    return link;
  }

}
