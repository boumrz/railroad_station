import { TicketPurchaseView as TicketPurchase } from './view';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { ticketPurchaseInit } from '../../components/actions/purchaseTicket';

const mapStateToProps = (state) => {
    return {
        targetTicket: state.purchaseTicket.statePurchaseTicket.targetTicket,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        purchaseTicket: (data) => {
            dispatch(ticketPurchaseInit(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(reduxForm({
    form: 'ticketPurchase',
})(TicketPurchase)));