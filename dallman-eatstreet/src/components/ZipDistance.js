import React, { Component } from "react";
import "../App.css";
import "../index.js";
import backend from '../backend.js'

class ZipDistance extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            zipCode : [],
            city : [],
            st: [],
            lat: [],
            long: [],
            timezone: [],
            timezoneAbbr: [],
            offset: [],
            start: true,
            valid : false
        }
        this.clicked = this.clicked.bind(this);
        this.render = this.render.bind(this);
        this.stateUpdate = this.stateUpdate.bind(this);
    }

    clicked() {
        var zip1 = document.getElementById('zip1').value;
        var zip2 = document.getElementById('zip2').value;
        var dist = document.getElementById('dist').value;
        var mi = document.getElementById('inlineRadio1').checked;
        var km = document.getElementById('inlineRadio2').checked;
        let results = backend.zipDistanceButton(zip1, zip2, dist, mi, km);
        console.log(results);
        //document.getElementById('display').innerHTML = input_value;
    }

    stateUpdate() {

    }
    

    render() {
        if (this.state.start) {
            return (
                <form>
                <div class="row justify-content-md-center">
                <div class="col-md-auto">
                <div class="row">
                    <div class="col">
                        <input type="number" min="10000" max="99999" class="form-control" placeholder="Zip Code #1" id="zip1" ></input>
                    </div>
                    <div class="col">
                        <input type="number" min="10000" max="99999" class="form-control" placeholder="Zip Code #2" id="zip2"></input>
                    </div>
                    <div class="col">
                        <input type="number" min="0" class="form-control" placeholder="Distance" id="dist"></input>
                    </div>
                    </div>
                    <div class="row justify-content-md-center">
                    <div class="col">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="distanceUnit" id="inlineRadio1" value="checked" required defaultChecked></input>
                            <label class="form-check-label" for="inlineRadio1">Miles</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="distanceUnit" id="inlineRadio2"></input>
                            <label class="form-check-label" for="inlineRadio2">Kilometers</label>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="col-md-auto">
                            <button type="button" id="submit" class="btn btn-primary" onClick={this.clicked}>Submit</button>
                        </div>
                        </div>
                </form>
            )
            
        }

        if (this.state.valid) {
            return(<p>S</p>)
        } else {
            return(<p>S</p>)
        }
        
    }
}

export default ZipDistance;