import React, { useState } from 'react';

import { Switch } from 'cloudhub-components/dist/mui/core';

export default function LivePreviewExample() {
  const [checked, setChecked] = useState(true);

  const toggle = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-primary"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-danger"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-warning"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-success"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-info"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-second"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-first"
          />
        </div>
      </div>

      <div className="divider my-4" />

      <div className="d-flex justify-content-center">
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-square toggle-switch-primary"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-square toggle-switch-danger"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-square toggle-switch-warning"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-square toggle-switch-success"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-square toggle-switch-info"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-square toggle-switch-second"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-square toggle-switch-first"
          />
        </div>
      </div>

      <div className="divider my-4" />

      <div className="d-flex justify-content-center">
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-small toggle-switch-square toggle-switch-line toggle-switch-primary"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-medium toggle-switch-square toggle-switch-line toggle-switch-danger"
          />
        </div>
        <div className="m-2">
          <Switch
            checked={checked}
            onClick={toggle}
            className="switch-large toggle-switch-square toggle-switch-line toggle-switch-warning"
          />
        </div>
      </div>
    </>
  );
}
