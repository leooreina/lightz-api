import { Request, Response, Router } from "express";
import { FoursquareService } from "../services/foursquare.service";

export class FoursquareController {
  public router: Router;
  private foursquareService: FoursquareService;

  constructor() {
    this.router = Router();
    this.foursquareService = new FoursquareService();
    this.routes();
  }

  public search = async (req: Request, res: Response) => {
    const place = await this.foursquareService.search(req.query);
    res.send(place);
  }

  public routes() {
    this.router.get('/places/search', this.search)
  }
}