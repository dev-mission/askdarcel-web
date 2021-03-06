import React, { Component } from 'react';
import PropTypes from 'prop-types';

const HOST_QUERY = 'https://askdarcel.org/search?query=';

class LandingPageResourceBlock extends Component {
  render() {
    return (
      <div className="landing-page-resource-block">
        <div className="landing-page-resource-block__resources">
          {this.props.children}
          <div className="landing-page-resource-block__resources-title">
            <h1>{this.props.config.TITLE.BEFORE_BLUE_WORD}</h1>
            <h1 className="blue-word">{this.props.config.TITLE.BLUE_WORD}</h1>
            <h1>{this.props.config.TITLE.AFTER_BLUE_WORD}</h1>
          </div>
          <div className="landing-page-resource-block__cards">
            <div className="landing-page-resource-block__cards-first-row">
              { this.props.config.FIRST_ROW.map(category => (
                <LandingPageCard
                  title={category.title}
                  content={category.content}
                  query={category.query ? HOST_QUERY + category.query : null}
                  imgClass={category.imgClass}
                  key={category.query || category.resource}
                  resource={category.resource}
                />
              ))}
            </div>
            <div className="landing-page-resource-block__cards-second-row">
              { this.props.config.SECOND_ROW.map(category => (
                <LandingPageCard
                  title={category.title}
                  content={category.content}
                  query={category.query ? HOST_QUERY + category.query : null}
                  imgClass={category.imgClass}
                  key={category.query || category.resource}
                  resource={category.resource}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingPageResourceBlock.props = {
  config: PropTypes.shape({
    TITLE: PropTypes.shape({
      BEFORE_BLUE_WORD: PropTypes.string,
      BLUE_WORD: PropTypes.string,
      AFTER_BLUE_WORD: PropTypes.string,
    }),
    FIRST_ROW: PropTypes.array,
    SECOND_ROW: PropTypes.array,
  }),
};

const LandingPageCard = props => (
  <a
    href={props.query || props.resource}
    className="landing-page-card"
  >
    <h1 className="landing-page-card__title">{props.title}</h1>
    <div className={`langing-page-card__image ${props.imgClass}`} />
    <h2 className="landing-page-card__content">{props.content}</h2>
  </a>
);

LandingPageResourceBlock.props = {
  query: PropTypes.string,
  title: PropTypes.string,
  imgClass: PropTypes.string,
  content: PropTypes.string,
};

export default LandingPageResourceBlock;
