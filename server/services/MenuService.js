import { BurgerShackDB } from '../db/BurgerShackDB.js'
import { NotFound } from '../utils/Errors'

class MenuService {
  async getItem(id) {
    const found = BurgerShackDB.menu.find(i => i.id.toString() === id)
    if (!found) {
      throw new NotFound('Menu Item not Found' + id)
    }
    return found
  }
}

export const menuService = new MenuService()
