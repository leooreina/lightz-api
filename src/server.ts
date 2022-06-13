import "reflect-metadata"
import 'dotenv/config'
import express from 'express';
import { CategoryController } from './controllers/category.controller';
import { AppDataSource } from "./data-source";
import { FoursquareController } from "./controllers/foursquare.controller";

class Server {
  private categoryController: CategoryController;
  private foursquareController: FoursquareController;
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
  }

  public configuration() {
    this.app.set('port', 3000);
    this.app.set('host', "0.0.0.0");
    this.app.use(express.json());
  }

  public async routes() {
    AppDataSource.initialize()
    this.categoryController = new CategoryController();
    this.foursquareController = new FoursquareController();
    
    this.app.use(`/api/categories/`, this.categoryController.router);
    this.app.use(`/api/fsq/`, this.foursquareController.router);
  }

  public start() {
    this.app.listen(this.app.get('port'), this.app.get('host'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    })
  }
}

const server = new Server();
server.start();
