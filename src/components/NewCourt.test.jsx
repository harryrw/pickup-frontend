import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/react"
import { getByLabelText } from "@testing-library/dom"
import NewCourt from "./NewCourt"
import userEvent from "@testing-library/user-event"

describe('NewCourt component', () => {
    let container

    beforeEach(function () { 
        container = render(
            <NewCourt />
        ).container
    })

    it('shows the New Court heading', () => {
        expect(container.querySelector("h5")).toBeDefined()
        expect(container.querySelector("h5")).toHaveTextContent("Register a new court")
    })


    // insert validation form error?

})