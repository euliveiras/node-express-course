import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home", () => {
    beforeEach(() => render(<Home/>));
    it("should render a title with task manager text", () =>{
        expect(screen.getByText(/task manager/i)).toBeInTheDocument();
    });
    it("should render a input with given placeholder", () => {
        expect(screen.getByPlaceholderText(/e.g wash dishes/i)).toBeInTheDocument();
    })
})