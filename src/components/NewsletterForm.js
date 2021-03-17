import React, { Component } from 'react';

export default class NewsletterForm extends Component {
   render() {
      return (
        <div className="centered-iframe">
          <h3>Desactivado por el momento!</h3>
          <iframe
            width="480"
            height="150"
            src="https://yonycalsin.substack.com/embed"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      );
   }
}
