import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { addHouseholdMember } from './helpers';

const CreateHouseholdMember = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [favoriteFruit, setFavoriteFruit] = useState("");

  const onSubmit = () => {
    console.log('adding new member!')
    addHouseholdMember({ first_name: firstName, last_name: lastName, description, favorite_fruit: favoriteFruit });
    props.history.push("/");
  }

  return (
    <div className="ds-u-padding--4">
      <p className="ds-u-font-size--2xl">Add a new household member</p>
      <Form id="createHouseholdMember">
        <FormGroup className="ds-u-margin--2" row>
          <Label for="input_first_name" sm={2}>First Name: </Label>
          <Col sm={10}>
            <Input type="text" name="firstName" id="input_first_name" onChange={e => setFirstName(e.target.value)} placeholder="First Name"></Input>
          </Col>
        </FormGroup>
        <FormGroup className="ds-u-margin--2" row>
          <Label for="input_last_name" sm={2}>Last Name: </Label>
          <Col sm={10}>
            <Input type="text" name="lastName" id="input_last_name" onChange={e => setLastName(e.target.value)} placeholder="Last Name"></Input>
          </Col>
        </FormGroup>
        <FormGroup className="ds-u-margin--2" row>
          <Label for="input_description" sm={2}>Description: </Label>
          <Col sm={10}>
            <Input type="text" name="description" id="input_description" onChange={e => setDescription(e.target.value)} placeholder="Description"></Input>
          </Col>
        </FormGroup>
        <FormGroup className="ds-u-margin--2" row>
          <Label for="input_favorite_fruit" sm={2}>Favorite fruit: </Label>
          <Col sm={10}>
            <Input type="text" name="favoriteFruit" id="input_favorite_fruit" onChange={e => setFavoriteFruit(e.target.value)} placeholder="Favorite Fruit"></Input>
          </Col>
        </FormGroup>
        <Button className="ds-c-button ds-u-margin--1">Cancel</Button>
        <Button className="ds-c-button ds-c-button--inverse" onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  )
}

export default withRouter(CreateHouseholdMember);
