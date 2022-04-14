import { Request, Response, Router } from 'express';
import { CategoryService } from '../services/category.service';
import { Category } from '../entity/Category';

export class CategoryController {
  public router: Router;
  private categoryService: CategoryService;

  constructor() {
    this.router = Router();
    this.categoryService = new CategoryService();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const categories = await this.categoryService.index();
    res.send(categories);
  }

  public create = async (req: Request, res: Response) => {
    const category = req.body as Category;
    const newCategory = await this.categoryService.create(category);
    res.send(newCategory);
  }

  public update = async (req: Request, res: Response) => {
    const category = req.body as Category;
    const id = Number(req.params.id);
    await this.categoryService.update(category, id);
    const updatedCategory = await this.getCategory(id);
    res.send(updatedCategory[0]);
  }

  public delete = async (req: Request, res: Response) => {
    res.send(this.categoryService.delete());
  }

  public routes() {
    this.router.get('/', this.index);
    this.router.post('/', this.create);
    this.router.patch('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }

  private getCategory = async (id: number) => {
    return await this.categoryService.getCategory(id);
  }
}