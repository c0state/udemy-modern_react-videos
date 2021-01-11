import React, { FormEventHandler } from "react";
import {
  Divider,
  Form,
  FormField,
  Input,
  Label,
  Segment,
} from "semantic-ui-react";

type SearchBarPropType = {};

type SearchBarStateType = {
  term: string;
};

class SearchBar extends React.Component<SearchBarPropType, SearchBarStateType> {
  state: SearchBarStateType = { term: "" };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, term: event.target.value });
  };

  onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  render() {
    return (
      <Segment className="search-bar">
        <Form onSubmit={this.onFormSubmit}>
          <FormField>
            <Label>Video Search</Label>
            <Input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </FormField>
        </Form>
      </Segment>
    );
  }
}

export default SearchBar;
