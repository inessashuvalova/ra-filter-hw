import React from 'react';
import filters from '../Filter';
import projects from '../Projects';
import shortid from 'shortid'
import ProjectList from './Portfolio/ProjectList/ProjectList';
import Toolbar from './Portfolio/Toolbar/Toolbar';

const INITIAL_STATE = { filters: filters, projects: projects, selected: 'All' }

export default class Portfolio extends React.Component {
    projectsIndex = INITIAL_STATE.projects.map((project) => (
        { ...project, id: shortid.generate() }))

    state = { ...INITIAL_STATE, projects: this.projectsIndex }

    onSelectFilter(e) {
        const filter = e.target.id;

        if (filter !== 'All')
            this.setState({ projects: this.projectsIndex.filter(project => project.category === filter), selected: filter });

        else this.setState({ ...INITIAL_STATE, projects: this.projectsIndex })
    }

    render() {
        return (
            <div className="Portfolio">
                <Toolbar filters={this.state.filters} selected={this.state.selected} onSelectFilter={this.onSelectFilter.bind(this)} />
                <ProjectList projects={this.state.projects} />
            </div>

        )
    }

}