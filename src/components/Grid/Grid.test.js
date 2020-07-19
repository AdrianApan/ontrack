import React from "react"
import { shallow } from "enzyme"

import Grid from "./Grid"

const setup = (
  props = {
    data: {
      books: [
        {
          id: 1,
          book_author: ["Author"],
          book_title: "Title",
          book_publication_city: "City",
          book_publication_country: "Country",
          book_publication_year: 1900
        }
      ],
      count: 10
    },
    loading: false
  }
) => {
  const component = shallow(<Grid {...props} />)
  return component
}

describe("Grid component", () => {
  describe("Should render without errors", () => {
    let component

    beforeEach(() => {
      component = setup()
    })

    it("Should render Row element", () => {
      const elem = component.find("Row")
      expect(elem.length).toBe(1)
    })

    it("Should render Col element", () => {
      const elem = component.find("Col")
      expect(elem.length).toBe(1)
    })

    it("Should render Card element", () => {
      const elem = component.find("Card")
      expect(elem.length).toBe(1)
    })
  })

  describe("Should render without errors while loading", () => {
    it("Should render Spinner element", () => {
      const component = shallow(
        <Grid data={{ books: [], count: 0 }} loading={true} />
      )
      const elem = component.find("Spinner")
      expect(elem.length).toBe(1)
    })
  })

  describe("Should render without errors with no results", () => {
    it("Should render no results found text", () => {
      const component = shallow(
        <Grid data={{ books: [], count: 0 }} loading={false} />
      )
      const elem = component.find("div.alert-info")
      const text = "No results found. Please try a different query."
      expect(elem.text()).toEqual(text)
    })
  })
})
