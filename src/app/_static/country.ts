import { Injectable }   from '@angular/core';
import { Country }      from '../_models/index';

@Injectable()
export class CountryData {
    static getCountries() {
        return [
            {'idCountry': 'ES', 'country': 'Spain'},
            {'idCountry': 'AD', 'country': 'Andorra'},
            {'idCountry': 'PT', 'country': 'Portugal'},
            {'idCountry': 'IL', 'country': 'Israel'}
        ];
    }
    
    static getCountryName(idCountry: string) {
        return CountryData.getCountries().filter((item)=> item.idCountry == idCountry)[0].country;
    }
}