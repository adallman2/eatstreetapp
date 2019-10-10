import React, { Component } from "react";
import "../App.css";
import "../index.js";
import backend from '../backend.js'
import ZipData from './ZipData.js'

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
            oNames: [],
            areaCodes: [],
            start: true,
            valid : false,
            distance: 0,
            unit: ""
        }
        this.clicked = this.clicked.bind(this);
        this.render = this.render.bind(this);
        this.stateUpdate = this.stateUpdate.bind(this);
    }

    async clicked() {
        this.setState((state,props) => {
            return {
            zipCode : [],
            city : [],
            st: [],
            lat: [],
            long: [],
            timezone: [],
            timezoneAbbr: [],
            offset: [],
            oNames: [],
            areaCodes: [],
            start: true,
            valid : false,
            distance: 0,
            unit: ""
            }
        } 
         )
        var zip1 = document.getElementById('zip1').value;
        var zip2 = document.getElementById('zip2').value;
        var dist = document.getElementById('dist').value;
        var mi = document.getElementById('inlineRadio1').checked;
        var km = document.getElementById('inlineRadio2').checked;
        let results = await backend.zipDistanceButton(zip1, zip2, dist, mi, km);
        if (results.length === 1) results = results[0];
        console.log(results);
        if (results == null || results.zip_code1 == null) {
            console.log(results.error_code);
            console.log(results.zip_code1);
            console.log("invalid input");
            this.setState((state, props) => {
                return {
                    valid : false
                }

            })
        } else {
            console.log("Valid input i guess");
            this.setState((state, props) => {
                return {
                    distance : results.distance,
                    unit : (mi === true) ? "miles" : "kilometers",
                    valid : true
                }

            })
            await this.stateUpdate(results.zip_code1);
            await this.stateUpdate(results.zip_code2);
        }
        this.setState((state, props) => {
            return {
                start : false
            }
        })
        this.render();

    }

    async stateUpdate(zip) {
        let zipJsonData = await backend.getZipInfo(zip);
        let cityNames = "";
        let areaCodes = "";
        for ( var i = 0; i < zipJsonData.area_codes.length; i++) {
            if (i !== 0) {
                areaCodes += " | ";
            }
            areaCodes += zipJsonData.area_codes[i];
        }
        for (i = 0; i < zipJsonData.acceptable_city_names.length; i++) {
            if (i !== 0) {
                cityNames += " | ";
            }

            let cityJson = zipJsonData.acceptable_city_names[i];

            cityNames += cityJson.city;
            cityNames += ', ';
            cityNames += cityJson.state;
        }
            this.state.zipCode.push(zipJsonData.zip_code);
            this.state.city.push(zipJsonData.city);
            this.state.st.push(zipJsonData.state);
            this.state.lat.push(zipJsonData.lat);
            this.state.long.push(zipJsonData.lng);
            this.state.timezone.push(zipJsonData.timezone.timezone_identifier);
            this.state.timezoneAbbr.push(zipJsonData.timezone.timezone_abbr);
            this.state.offset.push(zipJsonData.timezone.utc_offset_sec);
            this.state.oNames.push(zipJsonData.acceptable_city_names.length === 0 ? "No Other Names" : cityNames);
            this.state.areaCodes.push(areaCodes) 

    }
    

    render() {
        console.log(this.state.start + " | " + this.state.valid);
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
            return(
            <div>
            <div class="row justify-content-md-center">
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
                </form></div>
                <div class="row justify-content-md-center">
                    <div class="col">
                    <ZipData zipCode={this.state.zipCode[0]} city={this.state.city[0]} st={this.state.st[0]} lat={this.state.lat[0]} long={this.state.long[0]} timezone={this.state.timezone[0]} timezoneAbbr={this.state.timezoneAbbr[0]} offset={this.state.offset[0]} oNames={this.state.oNames[0]} areaCodes={this.state.areaCodes[0]}></ZipData>
                    </div>
                    <div class="col">
                    <ZipData zipCode={this.state.zipCode[1]} city={this.state.city[1]} st={this.state.st[1]} lat={this.state.lat[1]} long={this.state.long[1]} timezone={this.state.timezone[1]} timezoneAbbr={this.state.timezoneAbbr[1]} offset={this.state.offset[1]} oNames={this.state.oNames[1]} areaCodes={this.state.areaCodes[1]}></ZipData>
                    </div>
                </div>
                <p>{this.state.city[0]} is {this.state.distance} {this.state.unit} away from {this.state.city[1]}</p>
                
                </div>)
        } else {
            return(<div><form>
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
                <p>Please enter a set of valid zip codes within the supplied distance.</p></div>)
        }
        
    }
}

export default ZipDistance;