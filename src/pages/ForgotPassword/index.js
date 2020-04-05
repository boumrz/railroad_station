import { ForgotPasswordView as ForgotPassword } from './view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
    return {
        //todo
    }
}

export default connect(mapStateToProps)(withRouter(ForgotPassword));