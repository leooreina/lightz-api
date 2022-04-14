import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entity/Category";

export class CategoryService {
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = AppDataSource.getRepository(Category);
  }

  public async index() {
    return await this.categoryRepository.find();
  }

  public async create(category: Category) {
    return await this.categoryRepository.save(category);
  }

  public async update(category: Category, id: number) {
    return await this.categoryRepository.update(id, category);
  }

  public async delete() {
    return 'delete from service';
  }

  public async getCategory(id: number) {
    return await this.categoryRepository.findBy({ id });
  }
}