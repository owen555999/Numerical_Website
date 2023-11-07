import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { derivative, evaluate } from 'mathjs';

const Newton = () => {
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
    const diff = (add) => {
        return derivative(Equation, "x").evaluate({x:add});
    }

    const CalNewton = (x) => {
        var xold, ea;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj = {};
        do {
            xold = x;
            x = xold - (addfx(xold)/diff(xold));
            console.log(diff(xold));
            iter++;
            ea = error(xold, x);
            obj = {
                iteration: iter,
                Xnew: x,
                Xold: xold
            }
            data.push(obj);
        } while (ea > e && iter < MAX);
        setX(x);
    };

    const data = [];
    const [valueIter, setValueIter] = useState([]);
    const [valueXNew, setValueXNew] = useState([]);
    const [valueXOld, setValueXOld] = useState([]);
  
    const [html, setHtml] = useState(null);
    const [Equation, setEquation] = useState("(x^2)-7");
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

        CalNewton(xnum);

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

export default Newton;