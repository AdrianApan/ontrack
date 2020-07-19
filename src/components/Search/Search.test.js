import React from "react"
import { shallow } from "enzyme"

import Search from "./Search"

const setup = (
  props = {
    handleSubmit: function handleSubmit() {},
    handleChange: function handleChange() {},
    query: "Search query"
  }
) => {
  const component = shallow(<Search {...props} />)
  return component
}

describe("Pagination component", () => {
  let component

  beforeEach(() => {
    component = setup()
  })

  describe("Should render without errors", () => {
    it("Should render Form elements", () => {
      const elem = component.find("Form")
      expect(elem.length).toBe(1)
    })

    it("Should render InputGroup element", () => {
      const elem = component.find("InputGroup")
      expect(elem.length).toBe(1)
    })

    it("Should render FormControl element", () => {
      const elem = component.find("FormControl")
      expect(elem.length).toBe(1)
    })

    it("Should render Button element", () => {
      const elem = component.find("Button")
      expect(elem.length).toBe(1)
    })

    describe("Should render different UI states", () => {
      it("Should render button disabled if Query is empty", () => {
        const props = {
          handleSubmit: function handleSubmit() {},
          handleChange: function handleChange() {}
        }
        const component = shallow(<Search {...props} query={""} />)
        const elem = component.find("Button")
        const isDisabled = elem.props().disabled
        expect(isDisabled).toBe(true)
      })
    })
  })
})
