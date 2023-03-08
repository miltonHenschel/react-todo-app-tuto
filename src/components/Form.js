/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
    isChecked: false,
    gender: '',
    price: 0,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setState({
      ...state,
      [e.target.name]: e.target.value,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const carBrands = ['Mercedes', 'BMW', 'Maserati', 'Infinity', 'Audi'];

  const carBrandOptions = carBrands.map((carBrand, key) => (
    <option value={carBrand} key={key}>
      {carBrand}
    </option>
  ));

  return (
    <>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          {' '}
          <input
            type="text"
            value={state.fname}
            onChange={handleChange}
            name="fname"
          />
        </label>
        &nbsp; &nbsp;
        <label>
          Last Name:
          {' '}
          <input
            type="text"
            value={state.lname}
            onChange={handleChange}
            name="lname"
          />
        </label>
        &nbsp; &nbsp;
        <label>
          Your Message:
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        &nbsp; &nbsp;
        <label>
          Car brand:
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChange}
          >
            <option value="" disabled>
              --Pick a car brand--
            </option>
            {carBrandOptions}
          </select>
        </label>
        &nbsp; &nbsp;
        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange}
          />
          Is Checked?
        </label>
        &nbsp; &nbsp;
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === 'male'}
            onChange={handleChange}
          />
          {' '}
          Male
        </label>
        &nbsp; &nbsp;
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === 'female'}
            onChange={handleChange}
          />
          {' '}
          Female
        </label>
        <label>
          Price (between 0 and 50):
          <input
            type="range"
            name="price"
            min="0"
            max="50"
            value={state.price}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h5>
        Name:
        {' '}
        {state.fname}
        {' '}
        {state.lname}
      </h5>
      <p>
        Message:
        {state.message}
      </p>
      <h5>
        Favorite car brand:
        {state.carBrand}
      </h5>
      <h5>
        Is it checked? :
        {state.isChecked ? 'Yes' : 'No'}
      </h5>
      <h5>
        Gender :
        {state.gender}
      </h5>
      <h5>
        Price : $
        {state.price}
      </h5>
    </>
  );
};

export default Form;
