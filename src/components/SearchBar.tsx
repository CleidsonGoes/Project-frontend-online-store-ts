import { useState, ChangeEvent, FormEvent } from 'react';

interface SearchBarProps {
  setSearchTerm: (searchTerm: string) => void;
}

function SearchBar({ setSearchTerm }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    setSearchTerm(searchValue);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <form onSubmit={ handleSearch }>
      <input
        data-testid="query-input"
        type="text"
        placeholder="Digite o termo de pesquisa"
        value={ searchValue }
        onChange={ handleInputChange }
      />
      <button type="submit" data-testid="query-button">Buscar</button>
    </form>
  );
}

export default SearchBar;
