import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import App from "./App"

describe('App component', () => {
    let container

    beforeEach(function () { 
        container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ).container
    })

    // home page test
    it('shows the Pick Up heading', () => {
        expect(container.querySelector("h2")).toBeDefined()
        expect(container.querySelector("h2")).toHaveTextContent("Pick Up")

    })

    // games page test
    it('Shows the game listing page when the user clicks on the games link.', async () => {
        await userEvent.click(screen.getByText("Games"))
        expect(container.querySelector("h1")).toBeDefined()
        expect(container.querySelector("h1")).toHaveTextContent("Games")
    })

    // courts page test
    it('Shows the court listing page when the user clicks on the courts link.', async () => {
        await userEvent.click(screen.getByText("Courts"))
        expect(container.querySelector("h2")).toBeDefined()
        expect(container.querySelector("h2")).toHaveTextContent("All Courts")
    })

    // courts page test, changes available courts based on state
    it('Shows the the name of the selected state when a state has been selected on the court listing page.', async () => {
        await userEvent.click(screen.getByText("Courts"))
        await userEvent.click(screen.getByRole("link", { name: "VIC" }))
        expect(container.querySelector("h2")).toBeDefined()
        expect(container.querySelector("h2")).toHaveTextContent("VIC")
    })
})

