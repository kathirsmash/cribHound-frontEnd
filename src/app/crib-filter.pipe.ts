import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'cribFilter'
})

export class CribFilterPipe implements PipeTransform {
    transform(cribs: Array<any>, searchCrib: String): Array<any> {
        if(!cribs || !searchCrib) {
            return cribs;
        }

        return cribs.filter(crib => 
            crib.name.toLowerCase().indexOf(searchCrib.toLowerCase()) !== -1
        );
    }
}
