import PropTypes from 'prop-types';
import { Input, Button, Form } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(e.target.film.value);
    e.target.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Input type="text" name="film" />
      <Button type="submit">Search</Button>
    </Form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
