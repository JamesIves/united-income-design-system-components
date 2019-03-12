/** @module RadioButton */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const RadioButtons = ({
  name,
  disabled,
  table,
  options,
  required,
  value,
  onChange,
  className,
}) => (
  <div
    className={`mcgonagall-radio-button-container ${table ? 'table' : ''} ${
      className ? className : ''
    }`}
  >
    {options.map((option) => (
      <div className="mcgonagall-radio-button" key={option.value}>
        <label
          className={`${
            disabled || option.disabled ? 'disabled' : ''
          } radio-label`}
          key={option.value}
        >
          <input
            name={name}
            className="radio-input"
            type="radio"
            disabled={disabled || option.disabled}
            required={required}
            value={option.value}
            checked={option.value === value}
            onChange={() => onChange(option.value)}
          />
          <span className="radio" />
          <span className="label-value">{option.label}</span>

          {option.followup && option.value === value && (<div className="followup">{option.followup}</div>)}
            <div className="followup">{option.followup}</div>
          ) : null}
        </label>

        <span className="label-value-secondary">{option.secondaryLabel}</span>
      </div>
    ))}
  </div>
);

RadioButtons.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  table: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      followup: PropTypes.node,
      secondaryLabel: PropTypes.string,
    })
  ),
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButtons;
