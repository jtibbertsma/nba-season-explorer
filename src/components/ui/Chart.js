import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import teamHexes from '../../util/teamHexes';

class Chart extends Component {
  _mapTeamToLine = team => (
    <Line
      key={team}
      type="monotone"
      connectNulls={true}
      dataKey={team}
      stroke={teamHexes[team]}
    />
  );

  renderLines() {
    return this.props.selectedTeams.map(this._mapTeamToLine);
  }

  render() {
    return (
      <ResponsiveContainer height={500} width="100%">
        <LineChart
          data={this.props.data}
          margin={{top: 50, right: 30, left: 20, bottom: 30}}
        >
          <XAxis dataKey="date" />
          <YAxis domain={[60, 160]}/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          {this.renderLines()}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default connect(
  state => ({
    data: state.data[state.filters.showType],
    selectedTeams: state.filters.selectedTeams
  })
)(Chart);
