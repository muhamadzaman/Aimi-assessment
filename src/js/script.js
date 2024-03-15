document.addEventListener('DOMContentLoaded', () => {
  const imageGrid = document.getElementById('image-grid')
  const imageUrls = [
    'https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
    'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
    'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
    'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
    'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg'
  ]

  const createImageContainer = (imgUrl, index) => `
  <div class="col-lg-3 col-md-6 col-12 image-container" data-img="${imgUrl}">
    <input type="checkbox" id="img${index}" class="image-checkbox"/>
    <label for="img${index}" class="image-label">
      <span class="bottom-left-corner"></span>
      <span class="bottom-right-corner"></span>
    </label>
  </div>
`

  imageGrid.innerHTML = Array.from({ length: 20 }, (_, i) =>
    createImageContainer(imageUrls[i % imageUrls.length], i + 1)
  ).join('')

  document.querySelectorAll('.image-container').forEach(container => {
    const checkbox = container.querySelector('.image-checkbox')
    const label = container.querySelector('.image-label')

    checkbox.addEventListener('change', () => {
      label.style.outline = checkbox.checked ? '5px solid red' : 'none'
    })
  })
})
