import { UsersFilterPipe } from './users-filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new UsersFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
