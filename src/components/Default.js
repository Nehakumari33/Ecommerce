import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';
export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>the request URL <span className="text-danger">
                            {this.props.location.pathname}</span>{" "}
        was  not found</h3>
            <h3>This  is default page please click on PRODUCTS to view website</h3>
                    </div>
                </div>

            </div>
        );

        ;
    }
}
