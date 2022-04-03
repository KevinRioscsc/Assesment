import React from 'react'

const Tag = ({tagTitle}) => {
  return (
    <div>
        <div className="tagWrapper">
            {tagTitle}
        </div>
    </div>
  )
}

export default Tag