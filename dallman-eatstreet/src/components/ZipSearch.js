import React, { Component } from "react";
import "../App.css";
import "../index.js";
import backend from "../backend.js"
import ZipData from "./ZipData.js"

class ZipSearch extends React.Component {
    // zipCode;
    // city;
    // st;
    // lat;
    // long;
    // timezone;
    // timezoneAbbr;
    // offset;
    // oNames;
    // areaCodes;
    // start;
    // valid;
    constructor(props) {
        super(props);
        this.state = {
            zipCode : 0,
            city : "",
            st: "",
            lat: 0,
            long: 0,
            timezone: "",
            timezoneAbbr: "",
            offset: 0,
            oNames: "",
            areaCodes: "",
            start: true,
            valid : false
        }
    this.clicked = this.clicked.bind(this);
    this.render = this.render.bind(this);

    }

        async clicked() {
        if (this.state.start) {
            this.setState((state, props) => {
                return {
                    start : false
                }
            })
        }
        let zip = document.getElementById('zipcode').value;
        let zipJsonData = await backend.getZipInfo(zip);
        if (zipJsonData.error_code != null) {
            this.setState((state, props) => {
                return {
                    valid : false
                }
            })
            this.render();
        } else {
            this.setState((state, props) => {
                return {
                    valid : true
                }
            })
        }
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
            this.setState((state, props) => {
                return {zipCode : zipJsonData.zip_code,
                city : zipJsonData.city,
                st : zipJsonData.state,
                lat : zipJsonData.lat,
                long : zipJsonData.lng,
                timezone : zipJsonData.timezone.timezone_identifier,
                timezoneAbbr : zipJsonData.timezone.timezone_abbr,
                offset : zipJsonData.timezone.utc_offset_sec,
                oNames : zipJsonData.acceptable_city_names.length === 0 ? "No Other Names" : cityNames,
                areaCodes : areaCodes }
            });

            this.render();

    }

    // render() {
    //     return (
    //         <form>
    //         <div class="row justify-content-md-center">
    //         <div class="col col-lg-2">
    //             <div class="active-pink-3 active-pink-4 mb-4">
    //             <input class="form-control" type="number" min="10000" max="99999" placeholder="Enter a Zip Code" aria-label="Search" id="zipcode"></input>
    //         </div>
    //         </div>
    //         <div class="col-md-auto">
    //             <button type="button" class="btn btn-primary" onClick={this.clicked}>Submit</button>
    //         </div>
    //         </div>
    //         </form>
    //     )
    // }

    render() {
        if (this.state.start) {
            return (
                <form>
            <div class="row justify-content-md-center">
            <div class="col col-lg-2">
                <div class="active-pink-3 active-pink-4 mb-4">
                <input class="form-control" type="number" min="10000" max="99999" placeholder="Enter a Zip Code" aria-label="Search" id="zipcode"></input>
            </div>
            </div>
            <div class="col-md-auto">
                <button type="button" class="btn btn-primary" onClick={this.clicked}>Submit</button>
            </div>
            </div>
            </form>
            )
        }
        if (this.state.valid) {
            return (<div>
            <form>
            <div class="row justify-content-md-center">
            <div class="col col-lg-2">
                <div class="active-pink-3 active-pink-4 mb-4">
                <input class="form-control" type="number" min="10000" max="99999" placeholder="Enter a Zip Code" aria-label="Search" id="zipcode"></input>
            </div>
            </div>
            <div class="col-md-auto">
                <button type="button" class="btn btn-primary" onClick={this.clicked}>Submit</button>
            </div>
            </div>
            </form>
            <ZipData zipCode={this.state.zipCode} city={this.state.city} st={this.state.st} lat={this.state.lat} long={this.state.long} timezone={this.state.timezone} timezoneAbbr={this.state.timezoneAbbr} offset={this.state.offset} oNames={this.state.oNames} areaCodes={this.state.areaCodes}></ZipData>
            </div>);
        } else {
            return (
            <div>
            <form>
            <div class="row justify-content-md-center">
            <div class="col col-lg-2">
                <div class="active-pink-3 active-pink-4 mb-4">
                <input class="form-control" type="number" min="10000" max="99999" placeholder="Enter a Zip Code" aria-label="Search" id="zipcode"></input>
            </div>
            </div>
            <div class="col-md-auto">
                <button type="button" class="btn btn-primary" onClick={this.clicked}>Submit</button>
            </div>
            </div>
            </form>
            <p>Invalid Input: Please try again.</p>            
            </div>)
            }
    }
}

export default ZipSearch;