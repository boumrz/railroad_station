import { TicketsPopupView as TicketsPopup } from './view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ticketPurchaseInit } from '../actions/purchaseTicket';

const mapStateToProps = (state) => {
    return {
        trains: state.trains.entity.trains,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        purchaseTicket: (data) => {
            dispatch(ticketPurchaseInit(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TicketsPopup));