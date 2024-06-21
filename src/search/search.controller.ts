import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { City2 } from 'src/schemas/cities.schema';
import { Country } from 'src/schemas/country.schema';

@Controller('locations')
export class SearchController {
    constructor(private readonly searchService: SearchService) {}
//http://localhost:3000/locations/search?q=Casablanca
//http://localhost:3000/locations/search?q=Vietnam
//or search by other languages 
////C
//if u didnt enter any thing : Please enter a city or country to search. for exemple if u clic
// on the input and u clic send it gives you this response in a pop up
//if u enter a city or country that didnt exsist : http://localhost:3000/locations/search?q=USA :
//"We couldn't find any cities or countries matching \"Korea\". Try searching for another location or discover top travel destinations."
//this will  shown in a pop up also 
    @Get('search')
    async searchLocations(@Query('q') query: string): Promise<{ message?: string, cities?: City2[], countries?: Country[] }> {
        if (!query) {
            return { message:  'Please enter a city or country to search.' };
        }

        const result = await this.searchService.search(query);

        if (result.message) {
            return { message: result.message };
        }

        return { cities: result.cities, countries: result.countries };
    }
}
