import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, percentual: number): number {

    if (typeof value !== 'number' || typeof percentual !== 'number' || percentual < 0 || percentual > 100 ) {
      return value;
    }

    const valor_com_desconto = value - (value * (percentual / 100)); 
    return valor_com_desconto;

    // Esse dá certo também
    // const desconto = value * (percentual / 100);
    // return value - desconto;

  }

}
