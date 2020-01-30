import React, { Component } from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import { fetchUsers } from "../../actions/user-actions";

class List extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>Users</h2>
        {!users.length && <p>No users found!!</p>}
        <div style={{ display: "flex" }}>
          {users.map(u => (
            <ListItem key={u.id} user={u} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list
  };
}

export default connect(mapStateToProps, { fetchUsers })(List);
