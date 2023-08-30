import './index.css'

const DestinationItem = props => {
  const {list, del} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = list

  const deleteId = () => {
    del(id)
  }

  return (
    <li>
      <div className="li-container">
        <div className="logo-container">
          <p className="timeAccessed">{timeAccessed}</p>
          <img src={logoUrl} alt={title} className="logos" />
          <p className="domain">{domainUrl}</p>
        </div>
        <button data-testid="delete" type="button" onClick={deleteId}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default DestinationItem
