import { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import queryString from "query-string"

import { fetchBooks } from "../../../lib/useApi"

const ITEMS_PER_PAGE = 9

function useBooks() {
  const history = useHistory()
  const location = useLocation()
  const path = window.location.pathname
  const initialQueryString = queryString.parse(location.search)
  const initialQuery = initialQueryString.query || ""
  const initialPageString = queryString.parse(location.search)
  const initialPageNumber = parseInt(initialPageString.page) || 1

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(initialPageNumber)
  const [searchTerm, setSearchTerm] = useState(initialQuery)
  const [query, setQuery] = useState(initialQuery)
  const [totalCount, setTotalCount] = useState(null)
  const [loadTime, setLoadTime] = useState(null)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    history.push(`${path}?query=${searchTerm}&page=${currentPage}`)
  }, [currentPage, history, path, searchTerm])

  useEffect(() => {
    setIsLoading(true)

    const searchOptions = {
      page: currentPage,
      itemsPerPage: ITEMS_PER_PAGE,
      filters: searchTerm ? [{ type: "all", values: [searchTerm] }] : []
    }

    fetchBooks(searchOptions).then((res) => {
      if (res.error) {
        setError(true)
        setErrorMessage(res.response.message)
        setIsLoading(false)
      } else {
        setData(res.response)
        setTotalCount(res.response.count)
        setIsLoading(false)
        setLoadTime((Date.now() - res.timerStart) / 1000)
      }
    })
  }, [currentPage, searchTerm])

  useEffect(() => {
    query === "" && setSearchTerm("")
  }, [query])

  const handleChange = (event) => {
    const { value } = event.target
    setQuery(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCurrentPage(1)
    setSearchTerm(query)
  }

  const navigate = (direction) => {
    direction === "next"
      ? setCurrentPage((prevCurrentPage) => prevCurrentPage + 1)
      : setCurrentPage((prevCurrentPage) => prevCurrentPage - 1)
  }

  return {
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
  }
}

export default useBooks
