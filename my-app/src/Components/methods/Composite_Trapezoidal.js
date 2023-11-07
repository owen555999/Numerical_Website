import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { derivative, evaluate } from 'mathjs';

const Composite_Trapezoidal = () => {
    const print = () => {
        console.log(data);
        setValueI(data.map((x) => x.i));
        return (
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="30%">I</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.I}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        );
    };
    
    //const error = (xold, xnew) => Math.abs((xnew - xold) / xnew) * 100;
    const addfx = (add) => {
        return evaluate(Equation, {x:add})
    }
    

    const CalComTrape = (lower, upper, n) => {
        var i, ea;
        let total = 0;
        var obj = {};
        let h = (upper-lower)/n;
        for(i = 0; i < n+1; i++){
            if(i !== n && i !== n-n){
                total = total + (2 * addfx(lower+(i*h)));
            }
            else{
                total = total + addfx(lower+(i*h));
            }
        }

        i = (h/2)*(total);

        obj = {
            I: i,
        }
        data.push(obj);
        setX(i);
    };

    const data = [];
    const [valueI, setValueI] = useState([]);
  
    const [html, setHtml] = useState(null);
    const [Equation, setEquation] = useState("((4*(x^5))-(3*(x^4))+(x^3)-(6*x)+2)");
    const [Lower, setLower] = useState(0);
    const [Upper, setUpper] = useState(0);
    const [N, setN] = useState(0);
    const [X, setX] = useState(0);

    const inputEquation = (event) => {
        setEquation(event.target.value);
    };

    const inputLower = (event) => {
        setLower(event.target.value);
    };

    const inputUpper = (event) => {
        setUpper(event.target.value);
    }

    const inputN = (event) => {
        setN(event.target.value);
    }

    const calculateRoot = () => {
        const lownum = parseFloat(Lower);
        const upnum = parseFloat(Upper);
        const nnum = parseFloat(N);

        CalComTrape(lownum, upnum, nnum);

        setHtml(print());

        console.log(valueI);
    };

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                    <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{ width: "25%", margin: "0 auto" }} className="form-control"></input>
                    <Form.Label>Input Lower</Form.Label>
                    <input type="number" id="LOWER" onChange={inputLower} style={{ width: "25%", margin: "0 auto" }} className="form-control"></input>
                    <Form.Label>Input Upper</Form.Label>
                    <input type="number" id="UPPER" onChange={inputUpper} style={{ width: "25%", margin: "0 auto" }} className="form-control"></input>
                    <Form.Label>Input N</Form.Label>
                    <input type="number" id="N" onChange={inputN} style={{ width: "25%", margin: "0 auto" }} className="form-control"></input>
                </Form.Group>
                <Button variant="dark" onClick={calculateRoot}>
                    Calculate
                </Button>
            </Form>
            <br></br>
            <h3>Answer = {X.toPrecision(7)}</h3>
            <Container>
                {html}
            </Container>
        </Container>
    );
};

export default Composite_Trapezoidal;