import { HomeView as Home } from "./view";
import { connect } from 'react-redux';
import { initAuthenticationSuccess } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        isLoading: state.trains.stateTrains.isLoading,
        trains: state.trains.entity.trains,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthChange: () => {
            dispatch(initAuthenticationSuccess())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);