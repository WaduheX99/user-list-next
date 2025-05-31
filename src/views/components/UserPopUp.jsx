import { useState } from 'react';
import homeStyles from './homeStyles';

export default function UserPopUp({
  title,
  formData,
  setFormData,
  onSubmit,
  onCancel,
  isUpdateMode,
}) {
  const [focusField, setFocusField] = useState('');

  return (
    <div style={homeStyles.popupOverlay}>
      <div style={homeStyles.popupBox}>
        <h3 style={homeStyles.popupTitle}>{title}</h3>
        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onFocus={() => setFocusField('name')}
          onBlur={() => setFocusField('')}
          style={{
            ...homeStyles.input,
            ...(focusField === 'name' ? homeStyles.inputFocus : {}),
          }}
        />
        <input
          placeholder="Job"
          value={formData.job}
          onChange={(e) => setFormData({ ...formData, job: e.target.value })}
          onFocus={() => setFocusField('job')}
          onBlur={() => setFocusField('')}
          style={{
            ...homeStyles.input,
            ...(focusField === 'job' ? homeStyles.inputFocus : {}),
          }}
        />
        <div style={homeStyles.popupActionsCentered}>
          <button onClick={onSubmit} style={homeStyles.submitButton}>
            {isUpdateMode ? 'Update' : 'Create'}
          </button>
          <button onClick={onCancel} style={homeStyles.cancelButtonCustom}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
