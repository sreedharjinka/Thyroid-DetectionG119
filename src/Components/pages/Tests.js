// Test.jsx
import React, { useState } from 'react';
import './Test.css'; // Import your CSS file for styling

const Tests = () => {
  const [thyroidResults, setThyroidResults] = useState({
    sex: '',
    age: '',
    pregnant: false,
    tsh: '',
    t4: '',
    t3: '',
    t4u: '',
    onThyroxine: false,
    onAntithyroidMedication: false,
    thyroidSurgery: false,
    lithium: false,
    goitre: false,
    tumor: false,
    fti: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setThyroidResults((prevResults) => ({ ...prevResults, [name]: newValue }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic (e.g., send data to server or store in state)
    console.log('Thyroid test results submitted:', thyroidResults);
  };

  return (
    <div className="thyroid-form-container tests-page">
      <h2>Enter Thyroid Test Results</h2>
      <form onSubmit={handleSubmit} className="thyroid-form">
      <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={thyroidResults.age}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Sex:</label>
          <select
            name="sex"
            value={thyroidResults.sex}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>On Thyroxine:</label>
          <div>
            <label>
              <input
                type="radio"
                name="onThyroxine"
                value="true"
                checked={thyroidResults.onThyroxine}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="onThyroxine"
                value="false"
                checked={!thyroidResults.onThyroxine}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>On Antithyroid Medication:</label>
          <div>
            <label>
              <input
                type="radio"
                name="onAntithyroidMedication"
                value="true"
                checked={thyroidResults.onAntithyroidMedication}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="onAntithyroidMedication"
                value="false"
                checked={!thyroidResults.onAntithyroidMedication}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>        
        <div className="form-group">
          <label>Pregnant:</label>
          <input
            type="checkbox"
            name="pregnant"
            checked={thyroidResults.pregnant}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Thyroid Surgery:</label>
          <div>
            <label>
              <input
                type="radio"
                name="thyroidSurgery"
                value="true"
                checked={thyroidResults.thyroidSurgery}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="thyroidSurgery"
                value="false"
                checked={!thyroidResults.thyroidSurgery}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Lithium:</label>
          <div>
            <label>
              <input
                type="radio"
                name="lithium"
                value="true"
                checked={thyroidResults.lithium}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="lithium"
                value="false"
                checked={!thyroidResults.lithium}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Goitre:</label>
          <div>
            <label>
              <input
                type="radio"
                name="goitre"
                value="true"
                checked={thyroidResults.goitre}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="goitre"
                value="false"
                checked={!thyroidResults.goitre}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>


        <div className="form-group">
          <label>Tumor:</label>
          <div>
            <label>
              <input
                type="radio"
                name="tumor"
                value="true"
                checked={thyroidResults.tumor}
                onChange={handleChange}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="tumor"
                value="false"
                checked={!thyroidResults.tumor}
                onChange={handleChange}
              />{' '}
              No
            </label>
          </div>
        </div>


        <div className="form-group">
          <label>TSH:</label>
          <input
            type="text"
            name="tsh"
            value={thyroidResults.tsh}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>T4:</label>
          <input
            type="text"
            name="t4"
            value={thyroidResults.t4}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>T3:</label>
          <input
            type="text"
            name="t3"
            value={thyroidResults.t3}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>T4U:</label>
          <input
            type="text"
            name="t4u"
            value={thyroidResults.t4u}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>FTI:</label>
          <input
            type="text"
            name="fti"
            value={thyroidResults.fti}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" buttonStyle="btn--primary" 
        buttonSize="btn--large">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tests;
