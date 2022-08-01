import React, { PureComponent } from 'react';
import { inject } from '../../services';
import { AppVersionNo } from '../../constants/common';

const style = { minWidth: 'calc(100% + 16px)', minHeight: 'calc(100vh - 46px)', marginLeft: '-8px', overflow: 'auto', border: 0 };

class FeedbackView extends PureComponent {
    constructor(props) {
        super(props);
        inject(this, "SessionService", "AppBrowserService");
        this.state = {};
    }

    UNSAFE_componentWillMount() {
        const cUser = this.$session.CurrentUser;
        this.$jaBrowserExtn.getAppVersion().then((version) => {
            const siteVersionNumber = (version || AppVersionNo);
            const feedbackUrl = cUser.feedbackUrl.format([
                encodeURIComponent(cUser.displayName),
                encodeURIComponent(cUser.emailAddress),
                encodeURIComponent(siteVersionNumber),
                encodeURIComponent(navigator.userAgent)
            ]);
            this.setState({ feedbackUrl });
        });
    }

    render() {
        return (
            <iframe src={this.state.feedbackUrl} title="Contact Us" style={style} />
        );
    }
}

export default FeedbackView;