import React from "react";
import { Form, FormField, Input, Label, Segment } from "semantic-ui-react";

type SearchBarPropType = {
  onSearch: (term: string) => void;
};

type SearchBarStateType = {
  term: string;
};

class SearchBar extends React.Component<SearchBarPropType, SearchBarStateType> {
  state: SearchBarStateType = { term: "" };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, term: event.target.value });
  };

  onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <Segment className="search-bar">
        <Form onSubmit={this.onSearch}>
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
