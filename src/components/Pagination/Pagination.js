import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

function Pagination({ navigate, currentPage, count, itemsPerPage }) {
  return (
    <div className="d-flex">
      <Button
        className="mr-3 flex-fill prev"
        onClick={() => navigate("prev")}
        disabled={currentPage === 1}
      >
        Prev Page
      </Button>
      <Button
        className="flex-fill next"
        onClick={() => navigate("next")}
        disabled={
          currentPage === Math.ceil(count / itemsPerPage) || count === 0
        }
      >
        Next Page
      </Button>
    </div>
  )
}

Pagination.propTypes = {
  navigate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
}

export default Pagination
