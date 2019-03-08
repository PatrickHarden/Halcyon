import React from 'react'
import { Link, withSiteData } from 'react-static'
import MenuList from 'MenuItems'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container, } from 'reactstrap';
import navLogo from './images/halcyon-nav-logo.png';
import navToggle from './images/nav-toggle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import AccessibilityIcon from './images/eyeball-dark.png';
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '@fortawesome/fontawesome-svg-core/styles.css'
import helpers from './helpers'


var isContrast = false;

 export default withSiteData(class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  changeContrast(){
    if (!isContrast) {
        document.getElementById("footerCopyright").style.background = "#000"
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#fff"
        document.getElementsByTagName("footer")[0].style.borderTop = "1px inset #000"
        document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "grayscale(100%)"
        isContrast = true;
    } else {
        document.getElementById("footerCopyright").style.background = "#4E5859"
        document.getElementsByTagName("footer")[0].style.backgroundColor = "#EDECE2"
        document.getElementsByTagName("footer")[0].style.borderTop = "none"
        document.getElementsByClassName("navWrapper")[0].style.webkitFilter = "none"
        isContrast = false;
    }
  }
  toggle() {
    var width = document.body.clientWidth;
    if (width <= 767) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  searchToggle() {
    var x = document.getElementById("searchComponent");
    if (x.style.display === "none" || x.style.display == '') {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  // componentDidMount(){
  //   var element = document.getElementsByTagName("header")[0]
  //   setTimeout(helpers.unfade(element), 200)
  // }

  render() {
    const logo = this.props.centerInfo.companyLogo

    return (
<div class="navWrapper" id="unfade">
    <nav class="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
        <div class="container">
            <div class="navRow">
                <div class="nav-inner">
                    <div class="left visible-xs">
                        <div class="search-toggle">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </div><img class="eyeball" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAVCAMAAABmKa5TAAAAWlBMVEUAAABNSkZIRURMSUZNSEVNSUdNSEZNSUZNSUZNSUdIQj9LR0VGQ0NBPz1NSUZNSUZMSUZMSEZJQUFEPj4+PjJMSUhMSUZNSEVKQUFLRkU4NTJLRkJIRkNNSEYa+AGyAAAAHnRSTlMAliSIXoVnjYFuFkEpEpF9dEwZEAZZV1QeRws1L3g/I+Z9AAAA+klEQVQoz53R2W6EMAwFUEM2J0z2MOz//5vN1mkHVX0YS0jEB11jBf6ukcM/9RDDdmvt4+Epl9wreJCB3tKoI4MhiEQcRW+jhHB+VTFFFas+fulE2KxK/jmFlsyFfyk1UtcMNtTkGSDKV7407S9XwSZdtCUK96bAyQpNu5fdt2Fqx2gpjEW57m48AGf9FPAcWVZPQv+e8QQKZfNdZX0CyGtv6q6yjUbXvOo+mzZMOwytjfb4Vm7NUpunxRX6VCl8qrpxetQdn0Jm7ZWWtWh5y486Kbm21O1nLqVLuTM0bglw0wWmy6K1TtJTwbti1pwcVdB7gnsFm/WT+gKSdQzGTzZ5IAAAAABJRU5ErkJggg==" /></div>
                    <a class="active" aria-current="page" href="/">
                        <div class="nav-logo visible-xs"><img src="data:image/png;base64,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" alt="halcyon logo" /></div>
                    </a>
                    <button type="button" class="visible-xs navbar-toggler"><span>MENU</span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOAgMAAAC9aL9dAAAACVBMVEUAAABOS0dPS0iPnR6RAAAAAnRSTlMAgnUlLzQAAAAYSURBVAjXY1gFAg4wCg8AK2mAUfgAqpkA+ZsUmRUZpSAAAAAASUVORK5CYII=" /></button>
                    <div class="collapse navbar-collapse">
                        <ul class="ml-auto navbar-nav">
                            <div>
                                <li class="nav-item">
                                    <a class="nav-link" href="/hours-directions">
                                        <div class="nav-icon directions">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 162.5 195">
                                                <g>
                                                    <path class="st0" d="M127.6,47.8c0-11.3-9.2-20.4-20.4-20.4c-11.3,0-20.4,9.2-20.4,20.4c0,11.3,9.2,20.4,20.4,20.4 C118.5,68.2,127.6,59.1,127.6,47.8z M95.3,47.8c0-6.6,5.3-11.9,11.9-11.9s11.9,5.3,11.9,11.9s-5.3,11.9-11.9,11.9 C100.6,59.7,95.3,54.4,95.3,47.8z"></path>
                                                    <path class="st0" d="M152.3,61.2h-5.7c2.7-7.4,4.1-13.3,4.1-17.7c0-24-19.5-43.5-43.5-43.5S63.7,19.5,63.7,43.5 c0,4.3,1.4,10.3,4.1,17.7H10.2C4.6,61.2,0,65.8,0,71.4v113.4c0,5.6,4.6,10.2,10.2,10.2h142.1c5.6,0,10.2-4.6,10.2-10.2V71.4 C162.5,65.8,157.9,61.2,152.3,61.2z M92.5,152.7h34.2v33.8H92.5V152.7z M84,186.5H40.1v-33.8H84V186.5z M40.1,144.2v-22.5h24.8 c1.1,0,2.2-0.4,3-1.2l19.2-19.2c8.6,15.4,16.4,27.8,16.5,27.9c0.8,1.2,2.1,2,3.6,2s2.8-0.7,3.6-2c0.1-0.1,9.1-14.3,18.4-31.3V98 H154v46.2H40.1z M31.6,144.2H8.5v-22.5h23.1V144.2z M152.3,69.7c1,0,1.7,0.8,1.7,1.7v18.1h-20.4c3.8-7.3,7-13.9,9.6-19.8H152.3z M107.2,8.5c19.3,0,35,15.7,35,35c0,15.1-22.7,55.2-35,75.4c-12.3-20.1-35-60.3-35-75.4C72.2,24.2,87.9,8.5,107.2,8.5z M82.9,93.5 l-19.7,19.7H40.1V69.7h31.1C74.2,76.6,78.1,84.6,82.9,93.5z M10.2,69.7h21.4v43.5H8.5V71.4C8.5,70.5,9.3,69.7,10.2,69.7z M8.5,184.8v-32.1h23.1v33.8H10.2C9.3,186.5,8.5,185.7,8.5,184.8z M152.3,186.5h-17.1v-33.8H154v32.1 C154,185.7,153.2,186.5,152.3,186.5z"></path>
                                                </g>
                                            </svg>
                                        </div>Directions</a>
                                </li>
                            </div>
                            <div>
                                <li class="nav-item">
                                    <a class="nav-link" href="/cinebistro">
                                        <div class="nav-icon cmx">
                                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 281.49 88.68">
                                                <title>CMX Logo</title>
                                                <polygon class="cls-1" points="111.3 85.11 111.32 85.11 111.32 85.1 111.3 85.11"></polygon>
                                                <polygon class="cls-2" points="264.56 3.78 234.27 3.78 249.69 25.82 264.56 3.78"></polygon>
                                                <path class="cls-3" d="M49,135.88A39.23,39.23,0,1,1,81.66,75l4.08-3.15a44.36,44.36,0,1,0,.69,48.49l-4.18-3A39.24,39.24,0,0,1,49,135.88Z" transform="translate(-4.63 -52.32)"></path>
                                                <path class="cls-3" d="M49,116.41A19.76,19.76,0,1,1,66.17,87L80.65,75.8a38,38,0,1,0,.56,40.82L66.38,106A19.75,19.75,0,0,1,49,116.41Z" transform="translate(-4.63 -52.32)"></path>
                                                <polygon class="cls-3" points="176.02 85.11 150.1 85.11 176.04 43.61 176.02 85.11"></polygon>
                                                <rect class="cls-3" x="89.24" y="3.8" width="5.11" height="81.3"></rect>
                                                <polygon class="cls-3" points="151.84 3.8 132.44 35.27 113.05 3.8 95.62 3.8 95.62 85.11 111.65 85.11 111.65 38.41 132.44 70.24 132.81 70.24 175.66 4.34 176.03 3.8 151.84 3.8"></polygon>
                                                <polygon class="cls-4" points="265.42 85.11 208.53 3.78 202.7 3.78 258.59 85.11 265.42 85.11"></polygon>
                                                <polygon class="cls-4" points="181.15 3.78 207.89 43.77 180.02 85.11 208.64 85.11 222.62 63.16 236.49 85.11 257.05 85.11 201.16 3.78 181.15 3.78"></polygon>
                                                <path class="cls-4" d="M279.24,136.08c0,.58.43.81.95.81s.8-.28.8-.57a.45.45,0,0,0-.31-.46c-.26-.1-.61-.17-1.12-.31a1,1,0,0,1-.83-1c0-.75.69-1.1,1.37-1.1s1.44.41,1.44,1.2h-.65c0-.48-.36-.66-.82-.66-.3,0-.69.11-.69.49s.18.41.45.48l1.09.29a1,1,0,0,1,.73,1c0,.84-.75,1.18-1.5,1.18s-1.55-.41-1.57-1.35Z" transform="translate(-4.63 -52.32)"></path>
                                                <path class="cls-4" d="M282.21,133.58h.93l1,2.94h0l1-2.94h.92v3.76h-.63v-2.9h0l-1,2.9h-.55l-1-2.9h0v2.9h-.63Z" transform="translate(-4.63 -52.32)"></path>
                                            </svg>
                                        </div>Cinebistro</a>
                                </li>
                            </div>
                            <div>
                                <li class="nav-item">
                                    <a class="nav-link" href="/dining">
                                        <div class="nav-icon dining">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200.8 165.2">
                                                <g>
                                                    <path class="st0" d="M196.5,5.4c0-1.6-0.8-3-2.1-4c-1.3-0.9-2.9-1.1-4.4-0.7c-2.7,0.9-6.4,2.9-9.2,7.7c-4.5,7.7-8.1,28.2-11,62.6 c-0.5,5.5,2.2,10.7,6.8,13.6l2.7,1.7c0.8,0.5,1.4,1.5,1.3,2.5l-1.1,65.3c0,2.8,1,5.5,3,7.5s4.6,3.1,7.4,3.1c2.8,0,5.5-1.1,7.5-3.2 c2-2,3-4.7,2.9-7.5L196.5,5.4L196.5,5.4z M193.4,157.5c-1.7,1.8-4.8,1.8-6.6,0c-0.9-0.9-1.3-2.1-1.3-3.3l1.1-65.3 c0.1-3-1.5-5.9-4.1-7.5l-2.7-1.7c-2.8-1.7-4.4-4.9-4.1-8.1c3.5-41.2,7.5-55.4,10.2-60.2c1.5-2.6,3.3-3.9,4.8-4.6l3.9,147.4 C194.7,155.4,194.2,156.6,193.4,157.5z"></path>
                                                    <path class="st0" d="M33.4,82.6c0,36.8,29.9,66.7,66.7,66.7s66.7-29.9,66.7-66.7s-29.9-66.7-66.7-66.7 C63.3,15.9,33.4,45.8,33.4,82.6z M160.9,82.6c0,33.6-27.3,60.9-60.9,60.9s-60.9-27.3-60.9-60.9S66.4,21.7,100,21.7 C133.6,21.7,160.9,49,160.9,82.6z"></path>
                                                    <path class="st0" d="M55.5,82.6c0,24.6,20,44.5,44.5,44.5c24.6,0,44.5-20,44.5-44.5s-20-44.5-44.5-44.5 C75.5,38.1,55.5,58,55.5,82.6z M100.1,43.9c21.3,0,38.7,17.4,38.7,38.7s-17.4,38.7-38.7,38.7c-21.4,0-38.7-17.4-38.7-38.7 C61.4,61.3,78.7,43.9,100.1,43.9z"></path>
                                                    <path class="st0" d="M9.4,161.5c2,2,4.6,3.1,7.4,3.1s5.4-1.1,7.4-3.1s3-4.7,2.9-7.5l-2.4-94.5c4.9-1.3,8.5-5.8,8.5-11.1v-8.1V3.6 c0-1.6-1.3-2.9-2.9-2.9S27.4,2,27.4,3.6v33.9h-3.5V3.6c0-1.6-1.3-2.9-2.9-2.9S18.1,2,18.1,3.6v33.9h-2.5V3.6c0-1.6-1.3-2.9-2.9-2.9 S9.8,2,9.8,3.6v33.9H6.3V3.6C6.3,2,5,0.7,3.4,0.7S0.5,2,0.5,3.6v36.8v8.1c0,5.3,3.6,9.7,8.5,11.1l-2.5,94.5 C6.4,156.9,7.5,159.5,9.4,161.5z M6.3,48.5v-5.2h21.1v5.2c0,3.1-2.5,5.6-5.6,5.6c-0.8,0-1.5,0.3-2.1,0.9c-0.5,0.6-0.8,1.3-0.8,2.1 l2.5,97.1c0,1.2-0.4,2.4-1.3,3.3c-1.7,1.8-4.8,1.8-6.5,0c-0.9-0.9-1.3-2-1.3-3.3l2.5-97.1c0-0.8-0.3-1.5-0.8-2.1s-1.3-0.9-2.1-0.9 C8.8,54.1,6.3,51.6,6.3,48.5z"></path>
                                                </g>
                                            </svg>
                                        </div>Dining</a>
                                </li>
                            </div>
                            <div>
                                <li class="nav-item">
                                    <a class="nav-link" href="/events">
                                        <div class="nav-icon events">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 189.7 184.2">
                                                <path class="st0" d="M182.4,137.4l6.9-18.4l-5.6,1.7c-0.6,0.2-1.1,0.3-1.6,0.5c-0.1,0-0.2,0.1-0.2,0.1c-2.3-5.2-5.2-9.5-8.9-13.1 c-9.2-9.1-19.7-13.8-31.4-13.8c-4.1,0-8.3,0.6-12.6,1.7c-10.9,2.9-20.2,9.7-26.1,19.2c-5.9,9.4-8,20.7-6.1,31.9 c1.8,10.2,7.2,19.6,15.4,26.4c8.1,6.7,18.2,10.4,28.5,10.4c1.8,0,3.7-0.1,5.5-0.3c11.5-1.5,21.2-6.7,28.8-15.5 c3.1-3.6,5.5-7.5,7.1-11.6c0.5-1.4,0.4-3.7-0.9-4.9c-1-0.9-2.5-1.3-3.5-1.3c-0.4,0-0.8,0.1-1.2,0.1c-1.7,0.5-2.7,2.1-3.1,3.1 c-5.7,12.9-18.5,21.2-32.6,21.2c-2.3,0-4.6-0.2-6.8-0.7c-9.4-1.9-17.5-7.3-22.7-15.3c-5.3-8-7.1-17.6-5.1-27.1 c3.2-15.2,16.5-26.9,31.6-27.9c1-0.1,2-0.1,3-0.1c11.2,0,20.6,4.6,28,13.5c1.8,2.1,3.2,4.4,4.3,7l-7.1,2.5L182.4,137.4z"></path>
                                                <path class="st1" d="M159.5,154.5c0,1-0.3,2-1,2.8s-1.8,1.3-2.9,1.3l0,0c-1,0-1.9-0.3-2.6-1l-10-8.2c-0.6,0.1-1.3,0.2-1.9,0.2 c-4.8,0-8.7-3.9-8.7-8.7c0-2.8,1.4-5.5,3.7-7.1l1.1-17.9c0-2.1,1.8-3.8,3.9-3.8c2.1,0,3.9,1.7,3.9,3.8l1.1,17.9 c2.3,1.6,3.7,4.3,3.7,7.1c0,0.4,0,0.8-0.1,1.3l8.6,9.7C159,152.6,159.4,153.5,159.5,154.5z"></path>
                                                <path class="st1" d="M110.8,24.8c0,0.3,0,0.6,0,0.9c0,1.8,0.8,3.2,2.2,4.2c1.9,1.5,4,1.7,6.2,0.8c2.5-1.1,3.6-3.3,3.6-6 c0-5.7,0-11.4,0-17.1c0-0.9-0.2-1.9-0.5-2.7c-0.9-2.5-3.7-4.2-6.2-3.8c-2.9,0.4-5.2,2.6-5.3,5.5c-0.1,2.2-0.1,4.4,0,6.6 c-15.7,0-51.1,0.1-51.7,0.2c0,0.7,0,1.3,0,1.8c0,3.2,0,6.4,0,9.6C74.4,24.8,94.9,24.8,110.8,24.8z"></path>
                                                <path class="st2" d="M159,90.9c0-19.7,0-39.4,0-59.1c0-0.5,0-0.9,0-1.4c-0.4-8.4-6.3-15.3-14.5-16.9c-2.6-0.5-5.4-0.4-8.1-0.4 c-2.5-0.1-1.8,0-4.5,0V15c0,3.2,0,6.4,0,9.6c0,0.1,0,0.1,0,0.2h8.1c4.6,0,7.1,2.5,7.1,7.1v11.7h-134V31.8c0-4.6,2.5-7.1,7.1-7.1 h17.1c0,0.8,0.1,1.7,0.4,2.4c0.9,2.7,3.5,4.3,6.5,4c2.7-0.3,4.9-2.6,5-5.4c0.1-3.2,0-6.5,0-9.7s0.1-6.4,0-9.6 C49.1,4,47.3,2,44.9,1.3c-4.1-1.2-7.7,1.8-7.7,6.4c0,1.8,0,3.7,0,5.5c-2.6,0-10.1,0-12,0c-3,0.1-6.1-0.2-9.1,0.3C7,15.1,1,22.5,1,32 c0,36,0,72.1,0,108.1c0,10.9,7.9,18.8,18.8,18.8c24.5,0,49,0,73.5,0c-1.4-3.4-2.4-6.9-3.1-10.6c-0.1-0.5-0.2-1-0.2-1.5 c-23.3,0-46.6,0-69.9,0c-4.6,0-7.1-2.5-7.1-7.1c0-18,0-36,0-54c0-10.8,0-21.6,0-32.4h133.9c0,10.8,0,21.6,0,32.4V88 C151.1,88.5,155.1,89.4,159,90.9z"></path>
                                            </svg>
                                        </div>Events</a>
                                </li>
                            </div>
                            <div>
                                <li class="nav-item">
                                    <a class="nav-link" href="/shopping">
                                        <div class="nav-icon shopping">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 160.4 182">
                                                <g>
                                                    <g>
                                                        <path class="st0" d="M131.1,156.6H27.5c-2,0-3.7-1.7-3.7-3.7s1.7-3.7,3.7-3.7h103.6c2,0,3.7,1.7,3.7,3.7S133.1,156.6,131.1,156.6z "></path>
                                                    </g>
                                                    <path class="st0" d="M54.8,66c0,4.5-3.6,8.1-8.1,8.1c-4.5,0-8.1-3.6-8.1-8.1c0-4.5,3.6-8.1,8.1-8.1C51.2,57.9,54.8,61.5,54.8,66z"></path>
                                                    <path class="st0" d="M105.5,66c0,4.5,3.6,8.1,8.1,8.1c4.5,0,8.1-3.6,8.1-8.1c0-4.5-3.6-8.1-8.1-8.1C109.1,57.9,105.5,61.5,105.5,66 z"></path>
                                                    <g>
                                                        <path class="st0" d="M113.6,69.7c-2,0-3.7-1.7-3.7-3.7V38.6c0-16.4-13.3-29.7-29.7-29.7c-16.4,0-29.7,13.3-29.7,29.7V66 c0,2-1.7,3.7-3.7,3.7c-2,0-3.7-1.7-3.7-3.7V38.6c0-20.5,16.6-37.1,37.1-37.1c20.5,0,37.1,16.6,37.1,37.1V66 C117.3,68,115.6,69.7,113.6,69.7z"></path>
                                                    </g>
                                                    <rect x="59.7" y="39" class="st0" width="50.2" height="7.4"></rect>
                                                    <path class="st0" d="M158.8,167.3L147.6,51.5C147,44.3,141,39,133.9,39h-7.3v7.4h7.3c3.3,0,6.1,2.5,6.4,5.8L151.5,168 c0.1,1.3-0.3,2.6-1.2,3.6c-0.9,1-2.1,1.5-3.5,1.5H13.6c-1.3,0-2.6-0.5-3.5-1.5c-0.9-1-1.3-2.3-1.2-3.6L20.1,52.2 c0.3-3.3,3.1-5.8,6.4-5.8h16.6V39H26.5c-7.2,0-13.1,5.4-13.8,12.5L1.6,167.3c-0.3,3.4,0.8,6.8,3.1,9.3c2.3,2.5,5.5,4,8.9,4h133.2 c3.4,0,6.7-1.4,8.9-4C158,174,159.1,170.7,158.8,167.3z"></path>
                                                </g>
                                            </svg>
                                        </div>Shopping</a>
                                </li>
                            </div>
                            <div>
                                <li class="nav-item">
                                    <a class="nav-link" href="/sign-up">
                                        <div class="nav-icon sign-up">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200" enable-background="new 0 0 200 200">
                                                <g id="_x32_">
                                                    <path fill="none" stroke="#58595B" stroke-width="9" stroke-linecap="square" stroke-miterlimit="10" d="M125.2,62.6 c0,0-23.9-18.6-46.9,0.6c-8,6.7-11.9,15.6-15.4,26.1c-6.3,19.1-8.9,60.2,19.2,60.2c12.1,0,28.4-6.6,38.4-32.9L125.2,62.6z"></path>
                                                    <path fill="none" stroke="#58595B" stroke-width="9" stroke-linecap="square" stroke-miterlimit="10" d="M120.7,120.8 c0.6,10.3,4.6,34.8,30,26.2c37.5-12.8,42.8-114.4-15.4-134.9C79.3-7.7,12.8,24.2,12.8,107.7c0,83.5,71.4,97.7,112.4,78.9"></path>
                                                </g>
                                            </svg>
                                        </div>Sign-up</a>
                                </li>
                            </div>
                            <li href="/" class="hidden-xs logo nav-item">
                                <a class="active" aria-current="page" href="/"><img src="data:image/png;base64,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" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
    );
  }
})
