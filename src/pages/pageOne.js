import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function PageOne() {
  const formStyle = {
    // margin: "-8px",
    maxWidth: "540px"
  };
  const formGroupStyle = {
    // margin: "8px"
  };
  return (
    <div className="page-transition">
      <h1>Basic Info</h1>
      <Form style={formStyle} className="input-wsrapper">
        <FormGroup style={formGroupStyle}>
          <Label for="company-name">Company name</Label>
          <Input
            type="text"
            name="company-name"
            id="company-name"
            placeholder="..."
          />
        </FormGroup>
        <FormGroup style={formGroupStyle}>
          <Label for="fleet-size">Fleet size</Label>
          <Input
            type="number"
            name="fleet-size"
            id="fleet-size"
            placeholder="..."
          />
        </FormGroup>
        <FormGroup style={formGroupStyle}>
          <Label for="subscription-package">Subscription package</Label>
          <Input
            type="text"
            name="subscription-package"
            id="subscription-package"
            placeholder="..."
          />
        </FormGroup>
        <FormGroup style={formGroupStyle}>
          <Label for="subscription-length">Subscription length</Label>
          <Input
            type="text"
            name="subscription-length"
            id="subscription-length"
            placeholder="..."
          />
        </FormGroup>
        <Button>NEXT PAGE</Button>
      </Form>
    </div>
  );
}
