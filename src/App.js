import React, { Component } from 'react';
import './App.css';
import CategoryCheckbox from './component/category';
import FinishedTime from './component/finishedTime';
import MileCheckbox from './component/mileage';
import ShortenBlock from './component/shortname';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="title">筛选条件</div>
          <div className="clear" />
          <div className="category">
              <span className="subtitle">设施类别</span>
              <span className="checkbox">
              <MuiThemeProvider  >
                    <CategoryCheckbox />
              </MuiThemeProvider>
              </span>
          </div>
          <div className="finished-time">
              <span className="subtitle">竣工时间</span>
              <span className="finishedT">
              <MuiThemeProvider  >
                    <FinishedTime />
              </MuiThemeProvider>
              </span>
          </div>
          <div className="mileage">
              <span className="subtitle1">里程（KM）</span>
              <span className="checkbox">
              <MuiThemeProvider>
                    <MileCheckbox />
              </MuiThemeProvider>
              </span>
          </div>
          <div className="shortened">
              <span className="subtitle">设施简称</span>
              <span className="shorten">
              <MuiThemeProvider>
                    <ShortenBlock />
              </MuiThemeProvider>
              </span>
          </div>
          <div className="department">
              <span className="subtitle">养护单位</span>
          </div>
      </div>
    );
  }
}

injectTapEventPlugin();
export default App;