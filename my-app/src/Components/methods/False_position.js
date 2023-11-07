import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs';

const FalsePos = () => {
    const print = () => {
        console.log(data);
        setValueIter(data.map((x) => x.iteration));
        setValueXl(data.map((x) => x.Xl));
        setValueX1(data.map((x) => x.X1));
        setValueXr(data.map((x) => x.Xr));
        return (
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">X1</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.iteration}</td>
                                    <td>{element.Xl}</td>
                                    <td>{element.X1}</td>
                                    <td>{element.Xr}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        );
    };

    const error = (xold, xnew) => Math.abs((xnew - xold) / xnew) * 100;

    const CalFalse = (xl, xr) => {
        var x1, fX1, fXl, fXr, ea, scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj = {};
        do {
            scope = { x: xl };
            fXl = evaluate(Equation, scope);

            scope = { x: xr };
            fXr = evaluate(Equation, scope);

            x1 = ((xl * fXr) - (xr * fXl)) / (fXr - fXl);
            scope = { x: x1 };
            fX1 = evaluate(Equation, scope);

            iter++;
            if (fX1 * fXr > 0) {
                ea = error(xr, x1);
                obj = {
                    iteration: iter,
                    Xl: xl,
                    X1: x1,
                    Xr: xr
                };
                data.push(obj);
                xr = x1;
            } else if (fX1 * fXr < 0) {
                ea = error(xl, x1);
                obj = {
                    iteration: iter,
                    Xl: xl,
                    X1: x1,
                    Xr: xr
                };
                data.push(obj);
                xl = x1;
            }
        } while (ea > e && iter < MAX);
        setX(x1);
    };

    const data = [];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueX1, setValueX1] = useState([]);
    const [valueXr, setValueXr] = useState([]);

    const [html, setHtml] = useState(null);
    const [Equation, setEquation] = useState("(x^4)-13");
    const [X, setX] = useState(0);
    const [XL, setXL] = useState(0);
    const [XR, setXR] = useState(0);

    const inputEquation = (event) => {
        setEquation(event.target.value);
    };

    const inputXL = (event) => {
        setXL(event.target.value);
    };

    const inputXR = (event) => {
        setXR(event.target.value);
    };

    const calculateRoot = () => {
        const xlnum = parseFloat(XL);
        const xrnum = parseFloat(XR);
        CalFalse(xlnum, xrnum);

        setHtml(print());

        console.log(valueIter);
        console.log(valueXl);
    };

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                    <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
                    <Form.Label>Input XL</Form.Label>
                    <input type="number" id="XL" onChange={inputXL} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
                    <Form.Label>Input XR</Form.Label>
                    <input type="number" id="XR" onChange={inputXR} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
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

export default FalsePos;