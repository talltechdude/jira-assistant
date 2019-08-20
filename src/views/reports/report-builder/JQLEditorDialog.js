import React from 'react';
import BaseDialog from '../../../dialogs/BaseDialog';
import { Button } from '../../../controls';
import QueryEditor from '../custom-report/QueryEditor';

class JQLEditorDialog extends BaseDialog {
    constructor(props) {
        super(props, "Select dataset fields");
        this.style = { width: "900px" };
        const { filterQuery } = props;
        this.state = { showDialog: true, filterQuery };
    }

    onDone = () => {
        this.onHide(this.state.filterQuery);
    }

    queryChanged = (filterQuery) => this.setState({ filterQuery })

    getFooter() {
        return <>
            <Button type="default" icon="fa fa-times" onClick={this.onHide} label="Cancel" />
            <Button type="primary" icon="fa fa-check" onClick={this.onDone} label="Add" />
        </>;
    }

    render() {
        const { state: { filterQuery } } = this;

        return super.renderBase(
            <QueryEditor builderOnly={true} query={filterQuery} onChange={this.queryChanged} />
        );
    }
}

export default JQLEditorDialog;