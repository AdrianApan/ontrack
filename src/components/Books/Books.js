import React from "react"
import { Row, Col } from "react-bootstrap"

import "./Books.scss"
import useBooks from "./hooks/useBooks"
import Grid from "../Grid"
import Search from "../Search"
import Pagination from "../Pagination"

function Books() {
  const {
    ITEMS_PER_PAGE,
    data,
    query,
    isLoading,
    handleChange,
    handleSubmit,
    currentPage,
    loadTime,
    navigate,
    totalCount,
    error,
    errorMessage
  } = useBooks()

  return (
    <>
      <Row style={{ height: "40px" }}>
        <Col xs="12" sm="12" lg="12">
          <Search
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            query={query}
          />
        </Col>
      </Row>
      {!error ? (
        <>
          <Row className="mt-4">
            <Col xs="12" sm="6" lg="6" className="meta">
              <span className="text-small">
                Page {currentPage} of {data.count} results ({loadTime} seconds)
              </span>
            </Col>
            <Col xs="12" sm="6" lg="6">
              <Pagination
                navigate={navigate}
                currentPage={currentPage}
                count={totalCount}
                itemsPerPage={ITEMS_PER_PAGE}
              />
            </Col>
          </Row>
          <Grid data={data} loading={isLoading} />
        </>
      ) : (
        <Row className="mt-4">
          <Col xs="12" sm="12" lg="12">
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          </Col>
        </Row>
      )}
    </>
  )
}

export default Books
