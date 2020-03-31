import React from 'react';
import PurchaseTicket from '../../components/PurchaseTicket';
import { Field } from 'redux-form';
import {
    RegisterTicket,
} from './styles';

export class TicketPurchaseView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isRegister: false,
        }
    }

    handleClickRegister = () => {
        this.setState({
            isRegister: true,
        });
    }

    handleSubmitRegister = (values) => {
        values.preventDefault();
        console.log('values', values);
    }

    renderRegisterTicket = () => {
        return (
            <RegisterTicket>
                <form onSubmit={this.handleSubmitRegister}>
                    <Field name="firstName" component="input" type="text" />
                    <button type="submit">fdfdfd</button>
                </form>
            </RegisterTicket>
        )
    }

    componentDidMount() {
        this.props.purchaseTicket(localStorage.getItem('purchaseTicket'));
    }

    render() {
        return (
            <PurchaseTicket 
                isRegister={this.state.isRegister} 
                handleClickRegister={this.handleClickRegister} 
                renderRegisterTicket={this.renderRegisterTicket}
            />
        );  
    }
}