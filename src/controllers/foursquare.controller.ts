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
    const { status, data } = await this.foursquareService.search(req);
    res.status(status).send(data)
  }

  public routes() {
    this.router.get('/places/search', this.search)
  }
}