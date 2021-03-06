import React, {Component} from "react"
import {Consumer} from "../../context"
import TextInputGroup from "../layout/TextInputGroup"
import axios from "axios"

class AddContact extends Component {

    state ={
        name: "",
        email: "",
        phone: "",
        errors: {},
        showAddContactInfo: true
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        if(name === ""){
            this.setState({errors: {name: "Name is required!"}})
            return;
        }
        if(email === ""){
            this.setState({errors: {email: "Email is required!"}})
            return;
        }
        if(phone === ""){
            this.setState({errors: {phone: "Phone number is required!"}})
            return;
        }

        const newContact = {
            name,
            email,
            phone
        }
        const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newContact)
        dispatch({type: "ADD_CONTACT", payload: res.data})

        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {},
            showAddContactInfo: false
        })
        this.props.history.push("/")
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    render(){
        const {name, email, phone, showAddContactInfo, errors} = this.state;
        
        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card mb-3">
                            <div className="card-header">Add contact  <h4 style={{float: "right"}}><i onClick={() => {
                                    this.setState({showAddContactInfo: !this.state.showAddContactInfo})
                                    }} 
                                    className="fas fa-sort-down" style={{cursor: "pointer"}}/></h4></div>
                                    {showAddContactInfo ? (
                                        <div className="card-body">
                                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                                <TextInputGroup label="Name" name="name" placeholder="Enter Name" value={name} onChange={this.onChange} error={errors.name}/>
                                                <TextInputGroup type="email" label="Email" name="email" placeholder="Enter Email" value={email} onChange={this.onChange} error={errors.email}/>
                                                <TextInputGroup type="phone" label="Phone" name="phone" placeholder="Enter Phone Number" value={phone} onChange={this.onChange} error={errors.phone}/>
                                                <input type="submit" value="Add Contact" className="btn btn-block btn-light mt-3"/>
                                            </form>
                                        </div>
                                    ) : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact