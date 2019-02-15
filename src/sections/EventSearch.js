import React from 'react'
import { withSiteData, Link } from 'react-static'

//
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

var eventResults = [];

export default withSiteData(class EventSearch extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        term : '',
        pageExist: false,
        eventExist: false,
        storeExist: false,
    };
  }


  render() {

      return (
        <article id="searchPage">
        <h4>Events:</h4>
        {(this.props.searchResult != '') ? 
          <div className="eventCount">
            {this.props.events.map(event => (
              (event.slug.includes(this.props.searchResult.toLowerCase())) ? 
              <div>
              <Card key={event.id} className={"card-" + event.id}>
                <Link to={`/events/${event.slug}/`}>
                </Link>
                  <CardBody>
                    <Link to={`/events/${event.slug}/`}>
                      <CardTitle>{(event.title.rendered) ? <div>{event.title.rendered}</div>: ""}</CardTitle>
                    </Link>
                    <CardText>{ReactHtmlParser(event.acf.post_copy)}</CardText>
                    <CardText><small>{event.date}</small></CardText>
                  </CardBody>
              </Card>
              </div>
            : ""))}</div> : <p>Content</p>
            }
        </article>
      )

  }
})
