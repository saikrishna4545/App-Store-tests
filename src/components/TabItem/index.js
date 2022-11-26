// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }
  const tabButtonClassName = isActive
    ? 'tab-button active-button'
    : 'tab-button'
  return (
    <li className="tab-item">
      <button type="button" className={tabButtonClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
