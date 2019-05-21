import PropTypes from 'prop-types'

export const notePropType = PropTypes.shape({
  id: PropTypes.id,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
})