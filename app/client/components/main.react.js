/* @flow */
var React = require('react');
var mui = require('material-ui');
var request = require('../request');
var Spinner = require('./spinner.react');
var Code = require('./code.react');

var Input = mui.Input;
var Paper = mui.Paper;
var DropDownIcon = mui.DropDownIcon;
var DropDownMenu = mui.DropDownMenu;
var Icon = mui.Icon;
var RaisedButton = mui.RaisedButton;
var Toolbar = mui.Toolbar;
var ToolbarGroup = mui.ToolbarGroup;

var Main = React.createClass({

  getInitialState: function() {
    return { source: '', loading: false, target: ''};
  },

  updateOutput: function(sourceCode) {
    this.setState ({ loading: true, target: this.state.target});
    request.post('/flow_check', {source: sourceCode }, (err, res) => {
      this.setState ({ loading: false, target: res});
      console.log(err);
    });
  },

  render: function() {
    var filterOptions = [
        { payload: '1', text: 'All Broadcasts' },
      { payload: '2', text: 'All Voice' },
      { payload: '3', text: 'All Text' },
      { payload: '4', text: 'Complete Voice' },
      { payload: '5', text: 'Complete Text' },
      { payload: '6', text: 'Active Voice' },
      { payload: '7', text: 'Active Text' },
      ],
      iconMenuItems = [
      { payload: '1', text: 'Download' },
      { payload: '2', text: 'More Info' }
      ];

    var defaultValue = "function length (a) {\n  return a.length;\n}\na(1);"

    return (
      <div>

        <Toolbar>
          <ToolbarGroup key={0} float="left">
          <DropDownMenu menuItems={filterOptions} />
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right">
          <Icon icon='mui-icon-pie' />
          <Icon icon='mui-icon-sort' />
          <DropDownIcon icon="navigation-expand-more" menuItems={iconMenuItems}
          onChange={this._onDropDownMenuChange} />
          <span className="mui-toolbar-separator">&nbsp;</span>
          <RaisedButton label="Create Broadcast" primary={true} onClick={this._handleTouchTap} />
          </ToolbarGroup>
        </Toolbar>

        <div className="raw-code-area">
          <Paper zDepth={5} >
            <Input className="textarea" ref="phones" multiline={true}
              type="text" name="source" placeholder="Javascript" onChange={this._onChange}
              onKeyDown={this._onKeyDown} defaultValue={defaultValue} description="start writing javascript code here" />
          </Paper>
        </div>
        <div className="output-area">
          <Paper zDepth={5} >
            <Code html={this.state.target} placeholder="Compiled Javascript"/>
          </Paper>
        </div>

        <Spinner visible={this.state.loading} />

      </div>
    );
  },

  _onChange: function(event) {
    var value = event.target.value;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.updateOutput(value);
    }, 3000);
  },

  _handleTouchTap: function() {
    alert('1-2-3-4-5');
  }

});

module.exports = Main;
