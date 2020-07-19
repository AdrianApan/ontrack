import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Card, Spinner } from "react-bootstrap"

import "./Grid.scss"

function Grid({ data, loading }) {
  return (
    <Row className="mt-4">
      {data.books && !loading ? (
        data.books.map((book) => (
          <Col
            key={book.id}
            xs="12"
            sm="6"
            lg="4"
            style={{ marginBottom: "30px" }}
          >
            <Card border="primary" className="w-100 h-100">
              <Card.Body>
                <Card.Title className="text-primary">
                  {book.book_title}
                </Card.Title>
                <Card.Text className="mb-1">
                  <span className="label">
                    {book.book_author.length > 1
                      ? `Book authors: `
                      : `Book author: `}
                  </span>
                  {book.book_author.map((bookAuthor) => bookAuthor)}
                </Card.Text>
                <Card.Text className="mb-1">
                  <span className="label">Publication country: </span>
                  {book.book_publication_country}
                </Card.Text>
                <Card.Text className="mb-1">
                  <span className="label">Publication city: </span>
                  {book.book_publication_city}
                </Card.Text>
                <Card.Text className="mb-1">
                  <span className="label">Publication year: </span>
                  {book.book_publication_year}
                </Card.Text>
                <Card.Text className="mb-1">
                  <span className="label">Book pages: </span> {book.book_pages}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Col>
          <Spinner animation="border" variant="primary" />
        </Col>
      )}

      {data.books && !loading && data.books.length <= 0 && (
        <Col>
          <div className="alert alert-info" role="alert">
            No results found. Please try a different query.
          </div>
        </Col>
      )}
    </Row>
  )
}

Grid.propTypes = {
  data: PropTypes.any.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Grid
