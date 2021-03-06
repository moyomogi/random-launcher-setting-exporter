// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import "semantic-ui-css/semantic.min.css";
// import App from './App';
import { createRoot } from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";

// semantic-ui
// https://semantic-ui.com/introduction/getting-started.html
class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.onChange({ key: this.props.name, value: event.target.value });
  }

  render() {
    return (
      <div className="field">
        <label>
          {this.props.label}
          <div className="ui left pointing label">{this.props.desc}</div>
        </label>
        <input
          type="text"
          placeholder={this.props.holder}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

class JSONForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { json: {} };

    this.post = this.post.bind(this);
  }

  post(item) {
    console.log(this.state.json, "//", item);
    let json = this.state.json;
    json[item.key] = item.value;
    this.setState({ json: json });
    console.log(JSON.stringify(this.state.json));
  }

  render() {
    return (
      <div className="ui container centered padded">
        {/* TODO: ????????????????????? CDN ???????????? */}
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>

        <div className="ui segment">
          <div className="ui header dividing large">Setting Exporter</div>
          <form className="ui fluid form">
            <div className="ui header block">Requirement</div>
            <div className="two fields">
              <TextForm
                name="name"
                onChange={this.post}
                desc="???????????????"
                label="Product Name"
                holder="MyProductName"
              />
              <TextForm
                name="developer"
                onChange={this.post}
                desc="?????????"
                label="Developer Organization"
                holder="(c) MyTeam.inc"
              />
            </div>

            <div className="ui header block small">Path</div>
            <div className="three fields">
              <TextForm
                name="exec"
                onChange={this.post}
                desc="???????????????????????????"
                label="Exe Path"
                holder="MyApp.exe"
              />
              <TextForm
                name="snapshot"
                onChange={this.post}
                desc="????????????????????????????????????"
                label="Snapshot"
                holder="MyScreenShot.png"
              />
              <TextForm
                name="readme"
                onChange={this.post}
                desc="???????????????????????????"
                label="Readme"
                holder="README.md"
              />
            </div>

            <div className="ui header block small">Option</div>
            <div className="three fields">
              <TextForm
                name="tags"
                onChange={this.post}
                desc="?????????????????? (?????????????????????????????????)"
                label="Tags"
                holder="Game Unity Action RPG"
              />
              <TextForm
                name="time"
                onChange={this.post}
                desc="????????????????????? (??????)"
                label="Time"
                holder="10 min ~ 30 min"
              />
              <TextForm
                name="difficulty"
                onChange={this.post}
                desc="????????????????????? (??????)"
                label="Difficulty"
                holder="very Easy"
              />
            </div>

            <div className="ui header block inverted">Export</div>
            <div className="field">
              <textarea
                rows="4"
                value={JSON.stringify(this.state.json)}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class SwitchRender extends React.Component {
  constructor(props) {
    super(props);
    // ???????????? true ???????????????
    // this.state = { isRender: false };
    this.state = { isRender: true };

    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.$trigger = $(this.props.target);
  //   this.$trigger.on("click", this.handleClick);
  // }

  componentWillUnmount() {
    this.$trigger.off("click", this.handleClick);
  }

  handleClick(e) {
    this.setState({ isRender: !this.state.isRender });
    // if jQuery,
    // $(window).scrollTop(0);
    // if React,
    window.scrollTo(0, 0);
  }

  render() {
    if (this.state.isRender) {
      return this.props.content;
    }
    return <div><p>Loading...</p></div>;
  }
}

console.log(React, ReactDOM);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <SwitchRender target=".ForEditor" content={<JSONForm />} />
  </React.StrictMode>
);
reportWebVitals();
