import ButtonValue from "./ButtonValue";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe('<ButtonValue />',()=>{
    it('should render',()=>{
        render(<ButtonValue />);

        expect(screen.getByRole('button',{name:'+'})).toBeInTheDocument()
        expect(screen.getByRole('button',{name:'-'})).toBeInTheDocument()
        expect(screen.getByText('0')).toBeInTheDocument()
    });

    it('should increase the number value if plus button was clicked',async ()=>{
        render(<ButtonValue />);

        expect(screen.getByText('0')).toBeInTheDocument()

        await userEvent.click(screen.getByRole('button',{name:'+'}))

        expect(screen.getByText('1')).toBeInTheDocument()
        expect(screen.queryByText('0')).not.toBeInTheDocument()
    });

    it('should decrease the number value if minus button was clicked',async ()=>{
        render(<ButtonValue />);

        expect(screen.getByText('0')).toBeInTheDocument()

        await userEvent.click(screen.getByRole('button',{name:'-'}))

        expect(screen.getByText('-1')).toBeInTheDocument()
        expect(screen.queryByText('0')).not.toBeInTheDocument()
    })
})
