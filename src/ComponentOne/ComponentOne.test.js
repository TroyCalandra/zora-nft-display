import { render, screen } from '@testing-library/react';
import ComponentOne from './ComponentOne';

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders static status text', () => {
  render(<ComponentOne />);
  const linkElement = screen.getByText(/status/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a successful health endpoint response', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({message: 'success'})
  })
  const container = await render(<ComponentOne />);
  const healthResponse = await container.findByText('success')
  expect(healthResponse).toBeInTheDocument();
});

test('renders failure on health endpoint failure', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockRejectedValue(new Error('Async error'))
  })
  const container = await render(<ComponentOne />);
  const healthResponse = await container.findByText('failure')
  expect(healthResponse).toBeInTheDocument();
});