import React from 'react';
import MenuItem from "./MenuItem"
import './Directory.styles.scss'
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectDirectorySections} from "../redux/directory/Directory.selectors"

const Directory = ({sections}) => (
  <div className="directory-menu">
    {
      sections.map(({id, ...sectionProps}) => (
        <MenuItem
          key={id}
          {...sectionProps}
        />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);