import React from "react"
import PropTypes from "prop-types"
import { Button, Form, FormControl, InputGroup } from "react-bootstrap"

function Search({ handleSubmit, handleChange, query }) {
  return (
    <Form inline className="mb-4" onSubmit={(event) => handleSubmit(event)}>
      <InputGroup style={{ width: "100%" }}>
        <FormControl
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => handleChange(event)}
        />
        <InputGroup.Prepend>
          <Button
            variant="primary"
            type="submit"
            disabled={!query ? true : false}
          >
            Search
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </Form>
  )
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default Search
