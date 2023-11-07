import React, {Component} from "react";
import "./App.css";
import { Layout, Menu, Icon } from "antd";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Bisection from "./Components/methods/Bisection";
import Composite_Simpson from "./Components/methods/Composite_Simpson";
import Composite_Trapezoidal from "./Components/methods/Composite_Trapezoidal";
import Conjugate from "./Components/methods/Conjugate";
import Cramer from "./Components/methods/Cramer";
import Cubic_Spline from "./Components/methods/Cubic_Spline";
import False_position from "./Components/methods/False_position";
import Gauss_Elimination from "./Components/methods/Gauss_Elimination";
import Gauss_Jordan from "./Components/methods/Gauss_Jordan";
import Gauss_Seidel from "./Components/methods/Gauss_Seidel";
import Jacobi from "./Components/methods/Jacobi";
import Lagrange_Linear from "./Components/methods/Lagrange_Linear";
import Lagrange_Polynomial from "./Components/methods/Lagrange_Polynomial";
import Lagrange_Quadratic from "./Components/methods/Lagrange_Quadratic";
import Linear_Regression from "./Components/methods/Linear_Regression";
import Linear_Spline from "./Components/methods/Linear_Spline";
import LU from "./Components/methods/LU";
import Matrix_Inversion from "./Components/methods/Matrix_Inversion";
import Multiple_Linear_Regression from "./Components/methods/Multiple_Linear_Regression";
import Newton from "./Components/methods/Newton";
import Newton_Linear from "./Components/methods/Newton_Linear";
import Newton_Quadratic from "./Components/methods/Newton_Quadratic";
import Newton_Polynomial from "./Components/methods/Newton_Polynomial";
import OnePoint_Iteration from "./Components/methods/One-point_Iteration";
import Polynomial_Regression from "./Components/methods/Polynomial_Regression";
import Quadratic_Spline from "./Components/methods/Quadratic_Spline";
import Secant from "./Components/methods/Secant";
import Simpson from "./Components/methods/Simpson";
import Taylor from "./Components/methods/Taylor";
import Trapezoidal from "./Components/methods/Trapezoidal";
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Header className = "header">
                        <div className = "logo"/>
                        <Menu
                            theme = "dark"
                            mode = "horizontal"
                            defaultSelectedKeys = {['2']}
                            style = {{ lineHeight: '64px'}}
                        >
                            <Menu.Item key = "0"><Link to="/">Home</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width = {200} style = {{ background: '#fff' }}>
                            <Menu
                                mode = "inline"
                                defaultSelectedKeys = {['1']}
                                defaultOpenKeys = {['sub1']}
                                style = {{ height: '100%', borderRight: 0}}
                            >
                                <SubMenu
                                    key = "sub1"
                                    title = {
                                        <span>
                                            Roots of Equations
                                        </span>
                                    }
                                >
                                    <Menu.Item key = "1"><Link to ="/Bisection">Bisection Method</Link></Menu.Item>
                                    <Menu.Item key = "2"><Link to ="/False_position">False-Position Method</Link></Menu.Item>
                                    <Menu.Item key = "3"><Link to ="/OnePoint_Iteration">One-Point Iteration Method</Link></Menu.Item>
                                    
                                    <Menu.Item key = "5"><Link to ="/Newton">Newton-Raphson Method</Link></Menu.Item>
                                    <Menu.Item key = "6"><Link to ="/Secant">Secant Method</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key = "sub2"
                                    title = {
                                        <span>
                                            Solution Techniques
                                        </span>
                                    }
                                >
                                    <Menu.Item key = "7"><Link to ="/Cramer">Cramer's Rule</Link></Menu.Item>
                                    <Menu.Item key = "8"><Link to ="/Gauss_Elimination">Gauss Elimination Method</Link></Menu.Item>
                                    <Menu.Item key = "9"><Link to ="/Gauss_Jordan">Gauss-Jordan Method</Link></Menu.Item>
                                    <Menu.Item key = "10"><Link to ="/Matrix_Inversion">Matrix Inversion Method</Link></Menu.Item>
                                    <Menu.Item key = "11"><Link to ="/LU">LU Decomposition Method</Link></Menu.Item>
                                    <Menu.Item key = "12"><Link to ="/Jacobi">Jacobi Iteration Method</Link></Menu.Item>
                                    <Menu.Item key = "13"><Link to ="/Gauss_Seidel">Gauss-Seidel Iteration Method</Link></Menu.Item>
                                    <Menu.Item key = "14"><Link to ="/Conjugate">Conjugate Gradient Method</Link></Menu.Item>   
                                </SubMenu>
                                <SubMenu
                                    key = "sub3"
                                    title = {
                                        <span>
                                            Interpolation Techniques
                                        </span>
                                    }
                                >
                                    <Menu.Item key = "15"><Link to ="/Newton_Linear">Newton Linear Interpolation</Link></Menu.Item>
                                    <Menu.Item key = "16"><Link to ="/Newton_Quadratic">Newton Quadratic Interpolation</Link></Menu.Item>
                                    <Menu.Item key = "17"><Link to ="/Newton_Polynomial">Newton Polynomial Interpolation</Link></Menu.Item>
                                    <Menu.Item key = "18"><Link to ="/Lagrange_Linear">Lagrange Linear Interpolation</Link></Menu.Item>
                                    <Menu.Item key = "19"><Link to ="/Lagrange_Quadratic">Lagrange Quadratic Interpolation</Link></Menu.Item>
                                    <Menu.Item key = "20"><Link to ="/Lagrange_Polynomial">Lagrange Polynomial Interpolation</Link></Menu.Item>
                                    <Menu.Item key = "21"><Link to ="/Linear_Spline">Linear Spline</Link></Menu.Item>
                                    <Menu.Item key = "22"><Link to ="/Quadratic_Spline">Quadratic Spline</Link></Menu.Item>
                                    <Menu.Item key = "23"><Link to ="/Cubic_Spline">Cubic Spline</Link></Menu.Item>   
                                </SubMenu>
                                <SubMenu
                                    key = "sub4"
                                    title = {
                                        <span>
                                            Least-Square Regression
                                        </span>
                                    }
                                >
                                    <Menu.Item key = "24"><Link to ="/Linear_Regression">Linear Regression</Link></Menu.Item>
                                    <Menu.Item key = "25"><Link to ="/Polynomial_Regression">Polynomial Regression</Link></Menu.Item>
                                    <Menu.Item key = "26"><Link to ="/Multiple_Linear_Regression">Multiple Linear Regression</Link></Menu.Item>  
                                </SubMenu>
                                <SubMenu
                                    key = "sub5"
                                    title = {
                                        <span>
                                            Integration and Differentiation
                                        </span>
                                    }
                                >
                                    <Menu.Item key = "27"><Link to ="/Trapezoidal">Trapezoidal Rule</Link></Menu.Item>
                                    <Menu.Item key = "28"><Link to ="/Composite_Trapezoidal">Composite Trapezoidal Rule</Link></Menu.Item>
                                    <Menu.Item key = "29"><Link to ="/Simpson">Simpson Rule</Link></Menu.Item>
                                    <Menu.Item key = "30"><Link to ="/Composite_Simpson">Composite Simpson Rule</Link></Menu.Item>  
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <div>
                            <Routes>
                                    <Route path = "/Bisection" element = {<Bisection />} />
                                    <Route path = "/False_position" element = {<False_position/>} />
                                    <Route path = "/OnePoint_Iteration" element = {<OnePoint_Iteration/>} />
                                    <Route path = "/Newton" element = {<Newton/>} />
                                    
                                    <Route path = "/Secant" element = {<Secant/>} />
                                    <Route exact path = "/Cramer" component = {Cramer} />
                                    <Route exact path = "/Gauss_Elimination" component = {Gauss_Elimination} />
                                    <Route exact path = "/Gauss_Jordan" component = {Gauss_Jordan} />
                                    <Route exact path = "/Matrix_Inversion" component = {Matrix_Inversion} />
                                    <Route exact path = "/LU" component = {LU} />
                                    <Route exact path = "/Jacobi" component = {Jacobi} />
                                    <Route exact path = "/Gauss_Seidel" component = {Gauss_Seidel} />
                                    <Route exact path = "/Conjugate" component = {Conjugate} />
                                    <Route exact path = "/Newton_Linear" component = {Newton_Linear} />
                                    <Route exact path = "/Newton_Quadratic" component = {Newton_Quadratic} />
                                    <Route exact path = "/Newton_Polynomial" component = {Newton_Polynomial} />
                                    <Route exact path = "/Lagrange_Linear" component = {Lagrange_Linear} />
                                    <Route exact path = "/Lagrange_Quadratic" component = {Lagrange_Quadratic} />
                                    <Route exact path = "/Lagrange_Polynomial" component = {Lagrange_Polynomial} />
                                    <Route exact path = "/Linear_Spline" component = {Linear_Spline} />
                                    <Route exact path = "/Quadratic_Spline" component = {Quadratic_Spline} />
                                    <Route exact path = "/Cubic_Spline" component = {Cubic_Spline} />
                                    <Route exact path = "/Linear_Regression" component = {Linear_Regression} />
                                    <Route exact path = "/Polynomial_Regression" component = {Polynomial_Regression} />
                                    <Route exact path = "/Multiple_Linear_Regression" component = {Multiple_Linear_Regression} />
                                    <Route path = "/Trapezoidal" element = {<Trapezoidal/>} />
                                    <Route path = "/Composite_Trapezoidal" element = {<Composite_Trapezoidal/>} />
                                    <Route path = "/Simpson" element = {<Simpson/>} />
                                    <Route path = "/Composite_Simpson" element = {<Composite_Simpson/>} />
                            </Routes>
                        </div>
                    </Layout>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App;