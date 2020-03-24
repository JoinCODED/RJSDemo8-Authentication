import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { fetchTreasure } from "./redux/actions";

class Treasure extends Component {
  componentDidMount() {
    this.props.getTreasure();
  }

  render() {
    if (!this.props.user) return <Redirect to="/" />;

    const rows = this.props.treasure.map(thing => (
      <tr key={thing.name} className="table-warning">
        <td>{thing.name}</td>
      </tr>
    ));

    return (
      <div className="mt-5 mx-auto col-6 text-center">
        <h1>Treasure</h1>
        <table style={{ width: "100%" }}>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  treasure: state.things.private,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getTreasure: () => dispatch(fetchTreasure())
});

export default connect(mapStateToProps, mapDispatchToProps)(Treasure);
