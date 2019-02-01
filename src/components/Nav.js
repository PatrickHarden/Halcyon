// Packages
import React, {PropTypes, Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {ReactBootstrap, Grid, Row, Col, Button, Tooltip, OverlayTrigger} from 'react-bootstrap';
import $ from 'jquery';
import axios from 'axios';

let Entities = require('html-entities').AllHtmlEntities;
let entities = new Entities();
import moment from 'moment';

// Components
import Radium from 'radium';
import HoursToday from './HoursToday';
import Loader from '../components/Loader';
import SearchIcon from 'react-icons/lib/md/search';

// Endpoints
const SiteURL = window.location.protocol + '//' + document.location.hostname;
const MenuLocationsURL = SiteURL + '/wp-json/wp-api-menus/v2/menu-locations';
const Menus = SiteURL + '/wp-json/wp-api-menus/v2/menus/';
const PropertyOptions = SiteURL + '/wp-json/acf/v3/options/property_options';
const Images = SiteURL + "/wp-content/plugins/imaginuity-centers3/js/themes/Halcyon/lib/img/";

class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            data: false,
            siteName: '',
            logo: '',
            navItems: '',
            secondaryNav: '',
            topNav: '',
            primaryColor: '',
            secondaryColor: '',
            optionData: '',
            search_string: '',
        }
    }

    componentWillMount() {

        let component = this;
        let navItems;

        axios.all([
            axios.get(SiteURL + '/wp-json'),
            axios.get(PropertyOptions),
            axios.get(MenuLocationsURL),
        ])
            .then(axios.spread(function (site, options, menuLocations) {

                let primary = menuLocations.data.primary.ID;
                let secondaryNav = [];

                axios.all([
                    axios.get(Menus + primary),
                ])
                    .then(axios.spread(function (primary) {

                        navItems = primary.data.items.map((item, i) => {

                            let link;

                            if (item.children) {
                                secondaryNav.push(
                                    <ul
                                        className="dropdown-items background-color-setter-secondary"
                                        data-dropdown={i}
                                        key={i}
                                    >
                                        <li className="menu-item back-button" onClick={component.navBack.bind(this)}><p>
                                            <span>{entities.decode('&lt;')}</span> Back </p></li>
                                        {item.children.map((child, j) => {

                                            if (child.object === 'custom') {
                                                link = child.url.indexOf('.pdf') > -1 ? child.url : child.url + '/';
                                            }
                                            else {
                                                link = '/' + (child.object_slug === 'home' ? '' : child.object_slug)
                                            }

                                            return (
                                                <li key={j + '.' + i}>
                                                    <Link
                                                        to={link + '/'}
                                                        className="menu-item dropdown-item"
                                                        activeClassName="active"
                                                        onClick={component.menuCollapse.bind(this)}
                                                        target={(child.object === 'custom' ? "_blank" : "")}
                                                    >
                                                        {entities.decode(child.title)}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>);
                                return (
                                    <div className="dropdown background-color-setter" id={i}>
                                        <p className="menu-dropdown menu-item background-color-setter"
                                           data-dropdown={i}
                                           data-dropdownTitle={entities.decode(item.title)}
                                           onClick={component.dropdownActive.bind(this)}
                                        >
                                            {entities.decode(item.title)}
                                            <span>{entities.decode('>')}</span>
                                        </p>
                                        <ul className="dropdown-items med-screen-dropdown">
                                            {item.children.map((child, j) => {

                                                if (child.object === 'custom') {
                                                    link = child.url;
                                                }
                                                else {
                                                    link = '/' + (child.object_slug === 'home' ? '' : child.object_slug)
                                                }

                                                return (
                                                    <li>
                                                        <Link
                                                            to={link}
                                                            key={j + '.' + i}
                                                            className="menu-item dropdown-item"
                                                            activeClassName="active"
                                                            onClick={component.menuCollapse.bind(this)}
                                                            target={(child.object === 'custom' ? "_blank" : "")}
                                                        >
                                                            {entities.decode(child.title)}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )
                            }
                            else {

                                if (item.object === 'custom') {
                                    link = item.url.indexOf('.pdf') > -1 ? item.url : item.url + '/';
                                }
                                else {
                                    link = '/' + (item.object_slug === 'home' ? '' : item.object_slug + '/')
                                }

                                return (
                                    <Link
                                        to={link}
                                        key={i}
                                        className="menu-item background-color-setter"
                                        activeClassName="active"
                                        onClick={component.menuCollapse.bind(this)}
                                        target={(item.object === 'custom' ? "_blank" : "")}
                                    >
                                        {entities.decode(item.title)}
                                    </Link>
                                );
                            }
                        });


                        component.setState({
                            data: true,
                            siteName: site.data.name,
                            logo: options.data.acf.logo,
                            navItems: navItems,
                            secondaryNav: secondaryNav,
                            primaryColor: options.data.acf.primary_color ? options.data.acf.primary_color : '#dde9e9',
                            secondaryColor: options.data.acf.secondary_color ? options.data.acf.secondary_color : '#c9b99a',
                            optionsData: options.data,
                        })
                    }))
                    .catch((err) => {
                        console.log(err);
                    })
            }))
            .catch((err) => {
                console.log(err);
            });
    }

    LightenDarkenColor(col, amt) {

        var usePound = false;

        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }

        var num = parseInt(col, 16);
        var r = (num >> 16) + amt;
        if (r > 255) r = 255;
        else if (r < 0) r = 0;
        var b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255) b = 255;
        else if (b < 0) b = 0;
        var g = (num & 0x0000FF) + amt;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }

    hexToRGB(hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }

    menuIconAnimate = () => {
        if ($('.menu-icon-container').hasClass('open')) {
            this.navBack();
        }
        $(".menu-icon-container").toggleClass('open');
        $("#menu-icon").toggleClass('open');
        $('.nav-menu').toggleClass('active');

        if ($('#menu-icon').hasClass('open')) {
            $('.high-contrast-container').hide();
        } else {
            $('.high-contrast-container').show();
        }
    }

    dropdownActive = (e) => {

        let dropdownID = e.target.getAttribute('data-dropdown');
        let dropDownTitle = e.target.getAttribute('data-dropdowntitle');
        if ($('#secondary-nav').hasClass('active')) {
            $('#secondary-nav').removeClass('active');
            setTimeout(function () {
                $('.dropdown-items').removeClass('active')
            }, 500);
        }
        else {
            $('#secondary-nav').addClass('active');
            $('.dropdown-items[data-dropdown="' + dropdownID + '"]').addClass('active');
        }

        $('.nav-breadcrumb .current-page').removeClass('current-page');
        $('.nav-breadcrumb').append('<div class="second-level"><span class="current-page">' + dropDownTitle + '</span></div>');
    }

    navBack = () => {
        $('#secondary-nav').removeClass('active');
        setTimeout(function () {
            $('.dropdown-items').removeClass('active')
        }, 500);
        $('.nav-breadcrumb').html('');

        // $('.nav-breadcrumb').html('<span class="current-page home">Home</span>');
    }

    navigateHome = () => {
        browserHistory.push('/');
        this.menuCollapse();
    }

    menuCollapse = () => {
        $('.nav-menu').removeClass('active');
        $('#secondary-nav').removeClass('active');
        setTimeout(function () {
            $('.dropdown-items').removeClass('active')
        }, 500);
        $('#menu-icon').removeClass('open');
        $('.menu-icon-container').removeClass('open');
        $('.high-contrast-container').show();


        this.navBack();
    }

    handleChange = (e) => {
        this.setState({
            search_string: e.target.value
        });
    }

    handleSearch = (e) => {
        e.preventDefault();
        $('.search-container form').removeClass('open');
        browserHistory.push('/search?s=' + this.state.search_string);
        this.setState({
            search_string: ''
        });
        $('.search-form').removeClass('open');
        this.menuCollapse();
    }

    toggleSearch = () => {
        $('.search-form').toggleClass('open');
        if ($('.search-form').hasClass('open')) {
            $('.nav-container').addClass('search-open');
        } else {
            $('.nav-container').removeClass('search-open');
        }
    }

    toggleEye = () => {
        let eyeContainer = $('.high-contrast-container');
        let eyeSlash = $('.high-contrast-container .eye-slash');
        let eye = $('.high-contrast-container .eye');
        let highContrast = $('#root');
        let nav = $('.nav-container');

        eyeContainer.toggleClass('active');
        eye.toggle();
        eyeSlash.toggle();

        if (eyeContainer.hasClass('active')) {
            highContrast.addClass('high-contrast');
            nav.addClass('high-contrast')
        } else {
            highContrast.removeClass('high-contrast');
            nav.removeClass('high-contrast');
        }
    }

    componentDidMount = () => {
        let scrollPos = 0;

        // adding scroll event
        window.addEventListener('scroll', function () {
            let nav = $('.nav-container');
            if (scrollPos <= -200) {
                nav.addClass('scroll-down');
            } else {
                nav.removeClass('scroll-down');
            }
            scrollPos = (document.body.getBoundingClientRect()).top;

        });
    }

    render() {
        let loaderStyles = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 9999,
            background: '#e6e6e6',
        };

        if (this.state.data) {
            console.log(this.state.optionsData);
            return (
                <div>
                    {this.state.optionsData.acf.emergency_banner &&
                    <div className="emergency-banner">
                        <span className="text-center"
                              dangerouslySetInnerHTML={{__html: this.state.optionsData.acf.emergency_banner}}></span>
                    </div>
                    }
                    <div className="nav-container container">
                        <Row>
                            <a href="#content" className="sr-only sr-only-focusable">Skip to main content</a>
                            <Radium.Style
                                scopeSelector=".high-contrast .background-color-setter, .high-contrast .background-color-setter-secondary, .high-contrast .background-color-setter-lighter, .high-contrast .background-color-setter-lightest, .high-contrast .background-color-setter-lightest"
                                rules={{
                                    backgroundColor: 'white !important',
                                    color: 'black !important',
                                }}
                            />

                            <div className="info-bar mobile visible-xs">
                                <div className="info">
                                    <p><HoursToday optionsData={this.state.optionsData}/> | <Link
                                        to={'/hours-directions'}>View all Hours &#xbb;</Link><span
                                        className="visible-lg"> {this.state.optionsData.acf.phone ? '| Guest Services: ' + this.state.optionsData.acf.phone : ''} | <Link
                                        to={'/hours-directions'}>Directions &#xbb;</Link></span></p>
                                </div>

                            </div>

                            <div className="logo-container hidden-xs">
                                <img src={this.state.logo} alt={this.state.siteName + ' logo'}
                                     className="img-responsive logo" onClick={this.navigateHome.bind(this)}/>
                            </div>
                            <div className="inner-nav-container">
                                <div className="info-bar desktop hidden-xs">
                                    <div className="info">
                                        <p>
                                            <HoursToday optionsData={this.state.optionsData}/> | <Link to={'/hours-directions'}>View all Hours &#xbb;</Link> <span className="visible-lg"> {this.state.optionsData.acf.phone ? '| Guest Services: ' + this.state.optionsData.acf.phone : ''} | <Link to={'/hours-directions'}>Directions &#xbb;</Link></span>
                                        </p>
                                    </div>

                                </div>
                                <div className="social hidden-xs">
                                    {this.state.optionsData.acf.facebook_url &&
                                    <a href={this.state.optionsData.acf.facebook_url} target="_blank">
                                        <img
                                            src={Images + 'icon-liberty-facebook.png'}
                                            alt={'liberty facebook'}/>
                                    </a>
                                    }
                                    {this.state.optionsData.acf.twitter_url &&
                                    <a href={this.state.optionsData.acf.twitter_url} target="_blank">
                                        <img
                                            src={Images + 'icon-liberty-twitter.png'}
                                            alt={'liberty twitter'}/>
                                    </a>
                                    }
                                    {this.state.optionsData.acf.instagram_url &&
                                    <a href={this.state.optionsData.acf.instagram_url} target="_blank">
                                        <img
                                            src={Images + 'icon-liberty-instagram.png'}
                                            alt={'liberty instagram'}/>
                                    </a>
                                    }
                                </div>
                                <p
                                    className="menu-item search-large-screen hidden-lg"
                                    onClick={this.toggleSearch}
                                >
                                    <SearchIcon size={50}/>
                                </p>
                                <form className="search-form" onSubmit={this.handleSearch} autocomplete="on">
                                    <label htmlFor="search">
                                        <span className="sr-only">search</span>
                                        <input
                                            id="search"
                                            name="search"
                                            type="text"
                                            placeholder="Tell us what you're looking for"
                                            onChange={this.handleChange}
                                            value={this.state.search_string}
                                        />
                                    </label>
                                    <label htmlFor="search-submit">
                                        <span className="sr-only">submit</span>
                                        <input type="submit" id="search-submit"/>
                                    </label>
                                </form>

                                <div className="logo-container visible-xs">
                                    <img src={this.state.logo} alt={this.state.siteName + ' logo'}
                                         className="img-responsive logo" onClick={this.navigateHome.bind(this)}/>
                                </div>

                                <div className="menu-icon-container">
                                    <div className="menu-label" onClick={this.menuIconAnimate.bind(this)}>Menu</div>
                                    <img src={Images + 'icon-liberty-menu-mobile.png'} id="menu-icon"
                                         className="menu-icon-mobile hidden-lg"
                                         onClick={this.menuIconAnimate.bind(this)}/>
                                    <img src={Images + 'icon-liberty-menu-desktop.png'} id="menu-icon"
                                         className="menu-icon-desktop visible-lg"
                                         onClick={this.menuIconAnimate.bind(this)}/>
                                </div>
                                <span className="menu-placeholder">
                            <div className="nav-menu">
                                <div className="menu-item nav-breadcrumb background-color-setter">
                                    {/*<span className="current-page home">Home</span>*/}
                                </div>
                                {this.state.navItems}
                                <div id="secondary-nav" className="background-color-setter-secondary">
                                    {this.state.secondaryNav}
                                </div>
                            </div>
                        </span>
                            </div>
                            <div className="utility-links hidden-sm hidden-lg">
                                {this.state.optionsData.acf.floating_navigation.link_1 &&
                                <Link className="guest-services" to={this.state.optionsData.acf.floating_navigation.link_1.url} target={this.state.optionsData.acf.floating_navigation.link_1.target}>
                                    <img src={this.state.optionsData.acf.floating_navigation.icon_1 ? this.state.optionsData.acf.floating_navigation.icon_1 : Images + 'icon-liberty-guest-services.png'} alt={this.state.optionsData.acf.floating_navigation.link_1.title}/>
                                    <p>{this.state.optionsData.acf.floating_navigation.link_1.title}</p>
                                </Link>
                                }
                                {this.state.optionsData.acf.floating_navigation.link_2 &&
                                <Link className="directory-map" to={this.state.optionsData.acf.floating_navigation.link_2.url} target={this.state.optionsData.acf.floating_navigation.link_2.target}>
                                    <img src={this.state.optionsData.acf.floating_navigation.icon_2 ? this.state.optionsData.acf.floating_navigation.icon_2 : Images + 'icon-liberty-directory-map.png'} alt={this.state.optionsData.acf.floating_navigation.link_2.title}/>
                                    <p>{this.state.optionsData.acf.floating_navigation.link_2.title}</p>
                                </Link>
                                }
                                {this.state.optionsData.acf.floating_navigation.link_3 &&
                                <Link className="directory-map" to={this.state.optionsData.acf.floating_navigation.link_3.url} target={this.state.optionsData.acf.floating_navigation.link_3.target}>
                                    <img src={this.state.optionsData.acf.floating_navigation.icon_3 ? this.state.optionsData.acf.floating_navigation.icon_3 : Images + 'icon-liberty-whats-new.png'} alt={this.state.optionsData.acf.floating_navigation.link_3.title}/>
                                    <p>{this.state.optionsData.acf.floating_navigation.link_3.title}</p>
                                </Link>
                                }
                            </div>
                        </Row>
                    </div>
                </div>
            );
        }
        return <Loader type="balls" loaderStyles={loaderStyles}/>;
    }
}

export default Nav;