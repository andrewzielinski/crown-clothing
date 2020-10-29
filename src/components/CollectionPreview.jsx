import React from 'react';
import './CollectionPreview.styles.scss'
import CollectionItem from "./CollectionItem"

export const CollectionPreview = ({title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items
            .filter((_, idx) => idx < 4)
            .map(({id, ...otherProps}) => (
              <CollectionItem key={id} {...otherProps} />
            ))
        }
      </div>
    </div>
  );
};


export default CollectionPreview;
