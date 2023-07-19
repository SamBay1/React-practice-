import {useState} from 'react';

function Form() {
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({lname: name});
  };
  return (
    <div>
      <h4>form</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input id='name' value={name} onChange={handleChange} type='text' />
        <button type='submit'>Submit </button>
      </form>
    </div>
  );
}

export default Form;
