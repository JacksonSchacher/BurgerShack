import { BurgerShackDB } from '../db/BurgerShackDB.js'
import { menuService } from '../services/MenuService.js'
import BaseController from '../utils/BaseController.js'

export class BurgerController extends BaseController {
  constructor() {
    super('api/menu')
    this.router
      .get('', this.getMenu)
      .get('/:id', this.getItem)
  }

  async getMenu(req, res, next) {
    res.send(BurgerShackDB.menu)
  }

  async getItem(req, res, next) {
    try {
      const id = req.params.id
      const foundItem = await menuService.getItem(id)
      res.send(foundItem)
    } catch (error) {
      next(error)
    }
  }
}
