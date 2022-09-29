import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onChangingImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickImage = () => {
    onChangingImage(id)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
