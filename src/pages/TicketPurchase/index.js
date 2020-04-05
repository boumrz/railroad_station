import { TicketPurchaseView as TicketPurchase } from './view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ticketPurchaseInit } from '../../components/actions/purchaseTicket';
import { initTicketsAdd } from '../../components/actions/tickets';

const mapStateToProps = (state) => {
    return {
        targetTicket: state.purchaseTicket.statePurchaseTicket.targetTicket,
        isLoading: state.tickets.stateTickets.isLoading,
        isError: state.tickets.stateTickets.isError,
        isAuth: state.authReducer.isAuth,
        isPurchaseTicket: state.tickets.stateTickets.isPurchaseTicket,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        purchaseTicket: (data) => {
            dispatch(ticketPurchaseInit(data));
        },
        addTicket: (data) => {
            dispatch(initTicketsAdd(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TicketPurchase));