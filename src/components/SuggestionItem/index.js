import './index.css'

const SuggestionItem = props => {
  const {searchDetails, updateSearchInput} = props
  const {suggestion} = searchDetails

  const onClickSuggestions = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="search-items">
      <p className="topic">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={onClickSuggestions}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
