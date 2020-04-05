import { LoginView as Login } from './view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { checkUser } from '../../components/actions/login';

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkUser: (user) => dispatch(checkUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));