import { PurchasePopupView as PurchasePopup } from './view';
import { connect } from 'react-redux';
import { initTrainsFound } from '../actions/trains';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
    return {
        isLoading: state.trains.stateTrains.isLoading,
        isError: state.app.isError,
        trains: state.trains.entity.trains,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadingDateTrains: (query) => {
            dispatch(initTrainsFound(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PurchasePopup));