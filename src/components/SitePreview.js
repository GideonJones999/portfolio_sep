import { Component } from "react";
import * as Icon from "react-feather";

export class SitePreview extends Component {
  render() {
    return (
      <div className="portfolio-container">
        {this.props.img ? (
          <img
            src={`/photos/${this.props.img}`}
            alt={this.props.title}
          />
        ) : (
          <iframe src={this.props.site} title={this.props.title}></iframe>
        )}
        <div>
          <span>
            <a href={this.props.site} target="_blank" rel="noreferrer">
              <h3>{this.props.title}</h3>
            </a>
            <a href={this.props.gitLink} target="_blank" rel="noreferrer">
              <Icon.GitHub />
            </a>
          </span>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
