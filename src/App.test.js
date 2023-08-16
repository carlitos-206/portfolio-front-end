import { render, screen } from '@testing-library/react';
import TopMenu from './components/global_components/navbar';

describe("Navbar Test", () => {
  
  test('Test full name is displayed', () => {
    render(<TopMenu />);
    const linkElement = screen.getByText(/Carlos R. Cáceres Martínez/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('Test navbar items exist', () => {
    render(<TopMenu />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Test navbar items exist', () => {
    render(<TopMenu />);
    const linkElement = screen.getByText(/Projects/i);
    expect(linkElement).toBeInTheDocument();
  }
  );
  test('Test navbar items exist', () => {
    render(<TopMenu />);
    const linkElement = screen.getByText(/Resume/i);
    expect(linkElement).toBeInTheDocument();
  }
  );
  test('Test navbar items exist', () => {
    render(<TopMenu />);
    const linkElement = screen.getByText(/Community/i);
    expect(linkElement).toBeInTheDocument();
  }
  );
  test('Test navbar items exist', () => {
    render(<TopMenu />);
    const linkElement = screen.getByText(/Contact/i);
    expect(linkElement).toBeInTheDocument();
  }
  );
  // test('nav items exist in projects', () => {
  //   render(<TopMenu />);
  //   const linkElement = screen.getByText(/Portfolio/i);
  //   expect(linkElement).toBeInTheDocument();

  // }
  // );
});
