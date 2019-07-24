import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OpenFolder(props) {
  return (
    <div className='btn-group mr-2'>
      <button type='button' className='btn btn-primary btn-xs' onClick={props.onOpenFolderClick}>
        <FontAwesomeIcon icon={props.icon} />
      </button>
    </div>
  );
}

export default OpenFolder;
