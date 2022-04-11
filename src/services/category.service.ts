import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entity/Category";

export class CategoryService {
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = AppDataSource.getRepository(Category);
  }

  public index = async () => {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  public create = async (category: Category) => {
    const newCategory = await this.categoryRepository.save(category);
    return newCategory;
  }

  public update = () => {
    return 'update from service';
  }

  public delete = () => {
    return 'delete from service';
  }
}