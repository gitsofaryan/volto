/**
 * TextWidget component.
 * @module components/manage/Widgets/TextWidget
 */

import React, { PropTypes } from 'react';

/**
 * TextWidget component class.
 * @function TextWidget
 * @returns {string} Markup of the component.
 */
const TextWidget = ({ id, title, required, description, error, value, onChange }) =>
  <div className={`field${error ? ' error' : ''}`}>
    <label htmlFor={`field-${id}`} className="horizontal">
      {title}
      {description && <span className="formHelp">{description}</span>}
      {required && <span className="required horizontal" title="Required">&nbsp;</span>}
    </label>
    {error && <div className="fieldErrorBox">{error}</div>}
    <input
      id={`field-${id}`}
      name={id}
      type="text"
      className="text-widget"
      value={value || ''}
      onChange={({ target }) => onChange(id, target.value === '' ? undefined : target.value)}
    />
  </div>;

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
TextWidget.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
TextWidget.defaultProps = {
  description: null,
  required: false,
  error: null,
  value: null,
};

export default TextWidget;
