import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  setSearchTerm: (searchTerm: string) => void;
}

function SearchBar({ setSearchTerm }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    setSearchTerm(searchValue);
    navigate(`/search?term=${searchValue}`);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <form onSubmit={ handleSearch }>
      <input
        type="text"
        placeholder="Digite o termo de pesquisa"
        value={ searchValue }
        onChange={ handleInputChange }
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
