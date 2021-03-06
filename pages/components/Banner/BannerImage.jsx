const BannerImage = ({ data }) => {
  const { id, url, alt } = data
  return (
    <div>
      <img loading='lazy' src={url} alt={alt} objectfit='contain' />
    </div>
  )
}

export default BannerImage
