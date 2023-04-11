import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';


class PostForm extends Component {


    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            location:'',
            city:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            name: this.state.name,
            location: this.state.location,
            city: this.state.city

        }
/*
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data)); */

        // call action
        this.props.createPost(post);
    }



  render() {

    return (
      <div>
        
      </div>
    )
  }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost} )(PostForm);