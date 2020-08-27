'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../store/actions'; //Import your actions

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.props.getData(); //call our action
  }

  addNewTask = () => {
    let text = this.state.text.trim();
    if (text !== '') this.props.addData({task: this.state.text});
    this.setState({text: ''});
  };

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true} />
        </View>
      );
    } else {
      return (
        <View style={{flex: 0.95, backgroundColor: '#F5F5F5', paddingTop: 20}}>
          {/* Tasks Listing starts here */}
          <FlatList
            ref="listRef"
            data={this.props.data}
            renderItem={({item, index}) => (
              <Card
                item={item}
                index={index}
                onPress={(id) => this.props.markAsDone(id)}
              />
            )}
            keyExtractor={(item, index) => `${index}`}
          />
          {/* Tasks Listing ends here */}

          <Pressable
            style={styles.btnClear}
            onPress={() => this.props.clearAll()}>
            <Text style={styles.btnAddText}>Clear All</Text>
          </Pressable>

          {/* TextInput and InputButton starts here */}
          <View style={styles.inputBtnWrapper}>
            <TextInput
              value={this.state.text}
              placeholder="New Task"
              style={styles.input}
              onChangeText={(text) => this.setState({text})}
            />
            <Pressable onPress={() => this.addNewTask()} style={styles.btnAdd}>
              <Text style={styles.btnAddText}>ADD</Text>
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
    <TouchableOpacity
      style={[styles.row, {opacity: item.done ? 0.8 : 1}]}
      onPress={() => onPress(item.id)}>
      <Text
        style={[
          styles.title,
          {textDecorationLine: item.done ? 'line-through' : 'none'},
        ]}>
        {item.task}
      </Text>
      <Image
        source={require('../assets/images/tick.png')}
        style={[styles.tickIcon, {tintColor: item.done ? '#00d258' : 'gray'}]}
      />
    </TouchableOpacity>
  );
};

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    loading: state.dataReducer.loading,
    data: state.dataReducer.data,
  };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  row: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4d505b',
  },

  tickIcon: {
    width: 22,
    height: 22,
  },

  inputBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 0.72,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },

  btnAdd: {
    borderRadius: 5,
    padding: 6,
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5855d6',
    color: '#fff',
    fontSize: 18,
  },

  btnAddText: {
    color: '#fff',
  },

  btnClear: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff2c55',
    color: '#fff',
    fontSize: 18,
  },
});
