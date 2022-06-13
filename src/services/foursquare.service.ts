import axios, { AxiosRequestConfig } from 'axios';

export class FoursquareService {
  public async search(query?) {
    try {
      let options: AxiosRequestConfig = {
        headers: {
          Authorization: process.env.API_FSQ
        }
      }
      if (query) options.params = query
      console.log(options);
      const response = await axios.get(`${process.env.FOURSQUARE_URL}places/search`, options)
      response.data.results.forEach(element => {
        console.log(element.link);
        const categories: { id: number, name: string, icon: any }[] = element.categories;
        categories.map(category => console.log(category.name))
      });
      return response.data.results;
    } catch (error) {
      console.log(error.response.body);
    }
  }
}