import React from "react";
import {Link, withSiteData} from 'react-static';
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser'
import '../../css/modules/contentArea.css';

export default withSiteData(class ContentArea extends React.Component {

    constructor(props) {
        super(props);
    }

    convertLink(url){
        var words = url.split('/');
        if (words[4] == ""){
          return words[3]
        } else {
          if (words[3] == "events") {
            return "/events/" + words[4]
          } else if (words[3] == "sales"){
            return "/sales/" + words[4]
          }  else if (words[3] == "stores"){
            return "/shopping/" + words[4]
          } else if (words[3] == "blog"){
            return "/blogs/" + words[4]
          }
        }
      }
    
      getTitleFromUrl(url){
        var words = url.split('/');
        if (words[4] == ""){
          return words[3].replace(/-/g, ' ')
        } else {
          return words[4].replace(/-/g, ' ')
        }
      }

    render() {
        const section = this.props.section

        return (
            <div className='contentArea'>
                {(section.display_options == "fullwidth") ? 
                <div className={(section.header_button_alignment) ? 'heading-button-align-' + section.header_button_alignment : ''}>
                {(section.heading) ? <h4 className='column-heading'>{section.heading}</h4> : ""}
                {(section.content) ? <div>{ReactHtmlParser(section.content)}</div> : ""}
                {(section.button) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button.url)}>{(section.button.title) ? <div>{ReactHtmlParser(section.button.title)}</div>: <div>{this.getTitleFromUrl(section.button.url)}</div>}</Link></div> : ""} 
                </div>: ""}
                {(section.display_options == "50-50") ? 
                <Row>
                    <Col sm={6} className={(section.header_button_alignment) ? 'heading-button-align-' + section.header_button_alignment : ''}>
                    {(section.heading) ? <h4 className='column-heading'>{section.heading}</h4> : ""}
                    {(section.content) ? <div>{ReactHtmlParser(section.content)}</div> : ""}
                    {(section.button) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button.url)}>{(section.button.title) ? <div>{ReactHtmlParser(section.button.title)}</div>: <div>{this.getTitleFromUrl(section.button.url)}</div>}</Link></div> : ""} 
                    </Col>
                    <Col sm={6} className={(section.header_button_alignment_2) ? 'heading-button-align-' + section.header_button_alignment_2 : ''}>
                    {(section.heading_2) ? <h4 className='column-heading'>{section.heading_2}</h4> : ""}
                    {(section.content_2) ? <div>{ReactHtmlParser(section.content_2)}</div> : ""}
                    {(section.button_2) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button_2.url)}>{(section.button_2.title) ? <div>{ReactHtmlParser(section.button_2.title)}</div>: <div>{this.getTitleFromUrl(section.button_2.url)}</div>}</Link></div> : ""} 
                    </Col>
                </Row>
                : ""}
                {(section.display_options == "two-third-one-third") ? 
               <Row>
                    <Col sm={8} className={(section.header_button_alignment) ? 'heading-button-align-' + section.header_button_alignment : ''}>
                    {(section.heading) ? <h4 className='column-heading'>{section.heading}</h4> : ""}
                    {(section.content) ? <div>{ReactHtmlParser(section.content)}</div> : ""}
                    {(section.button) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button.url)}>{(section.button.title) ? <div>{ReactHtmlParser(section.button.title)}</div>: <div>{this.getTitleFromUrl(section.button.url)}</div>}</Link></div> : ""} 
                    </Col>
                    <Col sm={4} className={(section.header_button_alignment_2) ? 'heading-button-align-' + section.header_button_alignment_2 : ''}>
                    {(section.heading_2) ? <h4 className='column-heading'>{section.heading_2}</h4> : ""}
                    {(section.content_2) ? <div>{ReactHtmlParser(section.content_2)}</div> : ""}
                    {(section.button_2) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button_2.url)}>{(section.button_2.title) ? <div>{ReactHtmlParser(section.button_2.title)}</div>: <div>{this.getTitleFromUrl(section.button_2.url)}</div>}</Link></div> : ""} 
                    </Col>
                </Row>
                : ""}
                {(section.display_options == "one-third-two-third") ? 
                <Row>
                    <Col sm={4} className={(section.header_button_alignment) ? 'heading-button-align-' + section.header_button_alignment : ''}>
                    {(section.heading) ? <h4 className='column-heading'>{section.heading}</h4> : ""}
                    {(section.content) ? <div>{ReactHtmlParser(section.content)}</div> : ""}
                    {(section.button) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button.url)}>{(section.button.title) ? <div>{ReactHtmlParser(section.button.title)}</div>: <div>{this.getTitleFromUrl(section.button.url)}</div>}</Link></div> : ""} 
                    </Col>
                    <Col sm={8} className={(section.header_button_alignment_2) ? 'heading-button-align-' + section.header_button_alignment_2 : ''}>
                    {(section.heading_2) ? <h4 className='column-heading'>{section.heading_2}</h4> : ""}
                    {(section.content_2) ? <div>{ReactHtmlParser(section.content_2)}</div> : ""}
                    {(section.button_2) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button_2.url)}>{(section.button_2.title) ? <div>{ReactHtmlParser(section.button_2.title)}</div>: <div>{this.getTitleFromUrl(section.button_2.url)}</div>}</Link></div> : ""} 
                    </Col>
                </Row>
                : ""}
                {(section.display_options == "33-33-33") ? 
                <Row>
                    <Col sm={4} className={(section.header_button_alignment) ? 'heading-button-align-' + section.header_button_alignment : ''}>
                    {(section.heading) ? <h4 className='column-heading'>{section.heading}</h4> : ""}
                    {(section.content) ? <div>{ReactHtmlParser(section.content)}</div> : ""}
                    {(section.button) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button.url)}>{(section.button.title) ? <div>{ReactHtmlParser(section.button.title)}</div>: <div>{this.getTitleFromUrl(section.button.url)}</div>}</Link></div> : ""} 
                    </Col>
                    <Col sm={4} className={(section.header_button_alignment_2) ? 'heading-button-align-' + section.header_button_alignment_2 : ''}>
                    {(section.heading_2) ? <h4 className='column-heading'>{section.heading_2}</h4> : ""}
                    {(section.content_2) ? <div>{ReactHtmlParser(section.content_2)}</div> : ""}
                    {(section.button_2) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button_2.url)}>{(section.button_2.title) ? <div>{ReactHtmlParser(section.button_2.title)}</div>: <div>{this.getTitleFromUrl(section.button_2.url)}</div>}</Link></div> : ""} 
                    </Col>
                    <Col sm={4} className={(section.header_button_alignment_3) ? 'heading-button-align-' + section.header_button_alignment_3 : ''}>
                    {(section.heading_3) ? <h4 className='column-heading'>{section.heading_3}</h4> : ""}
                    {(section.content_3) ? <div>{ReactHtmlParser(section.content_3)}</div> : ""}
                    {(section.button_3) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button_3.url)}>{(section.button_3.title) ? <div>{ReactHtmlParser(section.button_3.title)}</div>: <div>{this.getTitleFromUrl(section.button_3.url)}</div>}</Link></div> : ""} 
                    </Col>
                </Row>
                : ""}
                {(section.display_options == "25-25-25-25") ? 
                <Row>
                    <Col sm={6} md={3} className={(section.header_button_alignment) ? 'heading-button-align-' + section.header_button_alignment : ''}>
                    {(section.heading) ? <h4 className='column-heading'>{section.heading}</h4> : ""}
                    {(section.content) ? <div>{ReactHtmlParser(section.content)}</div> : ""}
                    {(section.button) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button.url)}>{(section.button.title) ? <div>{ReactHtmlParser(section.button.title)}</div>: <div>{this.getTitleFromUrl(section.button.url)}</div>}</Link></div> : ""} 
                    </Col>
                    <Col sm={6} md={3} className={(section.header_button_alignment_2) ? 'heading-button-align-' + section.header_button_alignment_2 : ''}>
                    {(section.heading_2) ? <h4 className='column-heading'>{section.heading_2}</h4> : ""}
                    {(section.content_2) ? <div>{ReactHtmlParser(section.content_2)}</div> : ""}
                    {(section.button_2) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button_2.url)}>{(section.button_2.title) ? <div>{ReactHtmlParser(section.button_2.title)}</div>: <div>{this.getTitleFromUrl(section.button_2.url)}</div>}</Link></div> : ""} 
                    </Col>
                    <Col sm={6} md={3} className={(section.header_button_alignment_3) ? 'heading-button-align-' + section.header_button_alignment_3 : ''}>
                    {(section.heading_3) ? <h4 className='column-heading'>{section.heading_3}</h4> : ""}
                    {(section.content_3) ? <div>{ReactHtmlParser(section.content_3)}</div> : ""}
                    {(section.button_3) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button_3.url)}>{(section.button_3.title) ? <div>{ReactHtmlParser(section.button_3.title)}</div>: <div>{this.getTitleFromUrl(section.button_3.url)}</div>}</Link></div> : ""} 
                    </Col>
                    <Col sm={6} md={3} className={(section.header_button_alignment_4) ? 'heading-button-align-' + section.header_button_alignment_4 : ''}>
                    {(section.heading_4) ? <h4 className='column-heading'>{section.heading_4}</h4> : ""}
                    {(section.content_4) ? <div>{ReactHtmlParser(section.content_4)}</div> : ""}
                    {(section.button_4) ? <div className='button-wrapper'><Link className="halcyon-button" to={this.convertLink(section.button_4.url)}>{(section.button_4.title) ? <div>{ReactHtmlParser(section.button_4.title)}</div>: <div>{this.getTitleFromUrl(section.button_4.url)}</div>}</Link></div> : ""} 
                    </Col>
                </Row>
                : ""}
            </div>    
        )
  }
})