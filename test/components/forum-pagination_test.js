import { renderComponent , expect } from '../test_helper';
import ForumPagination from '../../src/components/forum-pagination';

describe('ForumPagination' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(ForumPagination);
  });

  it('renders forum pagination', () => {
    expect(component).to.exist;
  });
});
