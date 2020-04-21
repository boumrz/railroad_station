import { PrivateOfficeView as PrivateOffice } from './view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { initAuthenticationFailed, initAuthenticationSuccess } from '../../components/actions';
import { checkUserOffice } from '../../components/actions/checkUserOffice';

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        responseUsers: state.checkUserOffice.stateCheckUserOffice.responseUsers,
        responseTickets: state.checkUserOffice.stateCheckUserOffice.responseTickets,
        //todo: информация о купленном билете (то, что ушло в пост)
        //todo: информация о всех станциях по маршруту
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(initAuthenticationFailed()),
        isAuthAction: () => dispatch(initAuthenticationSuccess()),
        compareUsersTickets: () => dispatch(checkUserOffice())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PrivateOffice));

