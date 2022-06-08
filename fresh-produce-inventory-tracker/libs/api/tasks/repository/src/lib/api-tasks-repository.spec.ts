import { apiTasksRepository } from './api-tasks-repository';

describe('apiTasksRepository', () => {
  it('should work', () => {
    expect(apiTasksRepository()).toEqual('api-tasks-repository');
  });
});
