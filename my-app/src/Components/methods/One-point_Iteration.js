import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs';

const OnePoint = () => {
    const print = () => {
        console.log(data);
        setValueIter(data.map((x) => x.iteration));
        setValueX0(data.map((x) => x.x0));
        setValueXOld(data.map((x) => x.xold));
        return (
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">X0</th>
                            <th width="30%">XOld</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.iteration}</td>
                                    <td>{element.X}</td>
                                    <td>{element.Xold}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        );
    };

    const error = (xold, xnew) => Math.abs((xnew - xold) / xnew) * 100;

    const CalOnePoint = (x0) => {
        var xold, ea, scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj = {};
        do {
            xold = x0;
            scope = {x:xold}
            x0 = evaluate(Equation, scope);
            iter++;
            ea = error(xold, x0);
            obj = {
                iteration: iter,
                X: x0,
                Xold: xold
            }
            data.push(obj);
        } while (ea > e && iter < MAX);
        setX(x0);
    };

    const data = [];
    const [valueIter, setValueIter] = useState([]);
    const [valueX0, setValueX0] = useState([]);
    const [valueXOld, setValueXOld] = useState([]);
  
    const [html, setHtml] = useState(null);
    const [Equation, setEquation] = useState("(1/86)+(x/2)");
    const [X, setX] = useState(0);
    const [X0, setX0] = useState(0);

    const inputEquation = (event) => {
        setEquation(event.target.value);
    };

    const inputX0 = (event) => {
        setX0(event.target.value);
    };

    const calculateRoot = () => {
        const xnum = parseFloat(X0);

        CalOnePoint(xnum);

        setHtml(print());

        console.log(valueIter);
        console.log(valueX0);
        console.log(valueXOld);
    };

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                    <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{ width: "30%", margin: "0 auto" }} className="form-control"></input>
                    <Form.Label>Input X0</Form.Label>
                    <input type="number" id="X0" onChange={inputX0} style={{ width: "30%", margin: "0 auto" }} className="form-control"></input>
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

export default OnePoint;