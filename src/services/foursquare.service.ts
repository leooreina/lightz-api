import axios, { AxiosRequestConfig } from 'axios';
import { Request } from 'express';

export class FoursquareService {
  public async search({ query }: Request) {
    let options: AxiosRequestConfig = { headers: { Authorization: process.env.API_FSQ }}
    if (query) options.params = query
    try {
      const response = await axios.get(`${process.env.FOURSQUARE_URL}places/search`, options)
      response.data.results.forEach(element => {
        console.log(element.link)
        const categories: { id: number, name: string, icon: any }[] = element.categories
        categories.map(category => console.log(category.name))
      });
      const { data, status } = response
      return { status, data: data.results }
    } catch (error) {
      const { data, status } = error.response
      return { status, data }
    }
  }
}