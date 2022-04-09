import React from 'react';

export default class Toolbar extends React.Component {

    onSelectFilter = (filter) => {
        this.props.onSelectFilter(filter);
    }

    render() {

        const filters = this.props.filters.map(filter => (
            <div
                className={this.props.selected === filter ? "Toolbar-Filter-active" : "Toolbar-Filter"}
                key={filter}
                id={filter}
                onClick={this.onSelectFilter}>
                {filter}
            </div>
        ));
        return <div className="Toolbar">{filters}</div>
    }
}