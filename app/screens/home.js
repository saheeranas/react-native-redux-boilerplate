"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Pressable,
  TouchableOpacity
} from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "../store/actions"; //Import your actions

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };  
  }

  componentDidMount() {
    this.props.getData(); //call our action
  }  

  render() { 
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 0.95, backgroundColor: "#F5F5F5", paddingTop: 20 }}>

          {/* Tasks Listing starts here */}
          <FlatList
            ref="listRef"
            data={this.props.data}
            renderItem={({ item, index }) => (
              <Card item={item} index={index} onPress={id => this.props.markAsDone(id)} />
            )} 
            keyExtractor={(item, index) => `${index}`}
          /> 
          {/* Tasks Listing ends here */}

          {/* TextInput and InputButton starts here */}
          <View style={styles.inputBtnWrapper}>
            <TextInput 
              value={this.state.text}
              placeholder="New Task"
              style={styles.input}
              onChangeText={text => this.setState({ text })}
            />
            <Pressable
              onPress={() => {
                this.props.addData({ id: 0, task: this.state.text })
                this.setState({ text: '' })
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? 'rgb(210, 230, 255)'
                    : '#0087f6'
                },
                styles.btnAdd
              ]}
            >
              <Text>Add</Text>
            </Pressable>
          </View>
          {/* TextInput and InputButton ends here */}

        </View>
      );
    }
  } 
} 

// List Item component
export const Card = ({item, index, onPress}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={() => onPress(item.id)}>
      <Text style={[styles.title, { textDecorationLine: item.done ? 'line-through' : 'none' }]}>
        {item.task}
      </Text>
    </TouchableOpacity>
  )
}  

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    loading: state.dataReducer.loading,
    data: state.dataReducer.data
  };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },

  row: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10
  },

  title: {
    fontSize: 15,
    fontWeight: "600"
  },

  description: {
    marginTop: 5,
    fontSize: 14
  },

  inputBtnWrapper: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 16, 
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 0.65
  },

  btnAdd: {
    borderRadius: 5,
    padding: 6,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
});
