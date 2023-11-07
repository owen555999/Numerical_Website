import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { derivative, evaluate } from 'mathjs';

const Secant = () => {
    const print = () => {
        console.log(data);
        setValueIter(data.map((x) => x.iteration));
        setValueXNew(data.map((x) => x.xnew));
        setValueXOld(data.map((x) => x.xold));
        return (
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XNew</th>
                            <th width="30%">XOld</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.iteration}</td>
                                    <td>{element.Xnew}</td>
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
    const addfx = (add) => {
        return evaluate(Equation, {x:add})
    }

    const CalSecant = (x1, x2) => {
        var x0, ea;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj = {};
        iter++;
        data.push(obj);
        do {
            x0 = x1;
            x1 = x2;
            x2 = x0 - ((addfx(x0) * (x0 - x1))/(addfx(x0)-addfx(x1)));
            iter++;
            ea = error(x1, x2);
            obj = {
                iteration: iter,
                Xnew: x2,
                Xold: x1
            }
            data.push(obj);
        } while (ea > e && iter < MAX);
        setX(x2);
    };

    const data = [];
    const [valueIter, setValueIter] = useState([]);
    const [valueXNew, setValueXNew] = useState([]);
    const [valueXOld, setValueXOld] = useState([]);
  
    const [html, setHtml] = useState(null);
    const [Equation, setEquation] = useState("(x^2)-7");
    const [X, setX] = useState(0);
    const [X1, setX1] = useState(0);
    const [X2, setX2] = useState(0);

    const inputEquation = (event) => {
        setEquation(event.target.value);
    };

    const inputX1 = (event) => {
        setX1(event.target.value);
    };

    const inputX2 = (event) => {
        setX2(event.target.value);
    };

    const calculateRoot = () => {
        const x1num = parseFloat(X1);
        const x2num = parseFloat(X2);

        CalSecant(x1num, x2num);

        setHtml(print());

        console.log(valueIter);
        console.log(valueXNew);
        console.log(valueXOld);
    };

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                    <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
                    <Form.Label>Input X0</Form.Label>
                    <input type="number" id="X1" onChange={inputX1} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
                    <Form.Label>Input X1</Form.Label>
                    <input type="number" id="X2" onChange={inputX2} style={{ width: "20%", margin: "0 auto" }} className="form-control"></input>
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

export default Secant;