import { TodoList } from './TodoList';

describe('TodoList', () => {
  it(('does nothing and fails'), () => {
    // sut = System Under Test
    const sut = new TodoList()
    expect(true).toBe(false)
  })
})
