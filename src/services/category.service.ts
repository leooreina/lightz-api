import { Response } from "express";
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

  public async update(categoryToUpdate: Category, id: number, res: Response) {
    const category = await this.getCategory(id);
    if (!category) return res.status(400).json({message: 'Category not found'});

    await this.categoryRepository.update(id, categoryToUpdate);
    res.send(category);
  }

  public async delete(id: number, res: Response) {
    const category = await this.getCategory(id);
    if (!category) return res.status(400).json({message: 'Category not found'});

    await this.categoryRepository.delete({ id: category.id });
    const allCategories = await this.index();
    res.send(allCategories);
  }

  private async getCategory(id: number) {
    return await this.categoryRepository.findOne({ where: { id }});
  }
}