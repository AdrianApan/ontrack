import React from "react"
import { shallow } from "enzyme"

import Pagination from "./Pagination"

const props = {
  navigate: function navigate() {},
  count: 20,
  itemsPerPage: 10
}

describe("Pagination component", () => {
  describe("Should render without errors", () => {
    it("Should render two Button elements", () => {
      const component = shallow(<Pagination {...props} currentPage={1} />)
      const elem = component.find("Button")
      expect(elem.length).toBe(2)
    })
  })

  describe("Should render different UI states", () => {
    it("Should disable previous button on first page", () => {
      const component = shallow(<Pagination {...props} currentPage={1} />)
      const elem = component.find("Button.prev")
      const isDisabled = elem.props().disabled
      expect(isDisabled).toBe(true)
    })

    it("Should disable next button on last page", () => {
      const component = shallow(<Pagination {...props} currentPage={2} />)
      const elem = component.find("Button.next")
      const isDisabled = elem.props().disabled
      expect(isDisabled).toBe(true)
    })
  })
})
