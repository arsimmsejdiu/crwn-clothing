import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import { Subscribe } from '../subscribe/subscribe.component';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map((
        { id, ...otherSectionProps } // otherSectionProps is all the key values in the this.state
      ) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}

      <Subscribe sections={sections}/>
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
