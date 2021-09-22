import React, {useState}  from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

 const FormSubmit = event => {
   event.preventDefault();

   onFormSubmit(term);
 };

 return (
  <div className="search-bar ui segment">
    <form onSubmit={FormSubmit} className="ui form">
      <div className="field">
        <label>Not YouTube</label>
        <input
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </div>
    </form>
  </div>
);
};
export default SearchBar;