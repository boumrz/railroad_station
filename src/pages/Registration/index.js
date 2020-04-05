import { RegistrationView as Registration, RegistrationView } from './view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addUserInit, switchPageRegistration } from '../../components/actions/registration';

const mapStateToProps = (state) => {
    return {
        currentUser: state.users.stateUsers.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch(addUserInit(user));
        },
        switchPageRegistration: (user) => {
            dispatch(switchPageRegistration(user));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Registration));