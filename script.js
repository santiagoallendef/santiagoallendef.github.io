const changeImage = function() {
  // 1. Logging the image
  const imageEl = document.querySelector('#coord-image');
  console.log(imageEl);
  console.log('Old image: ' + imageEl.src);

  // 2. Getting the x & y coordinate
  const xInputEl = document.querySelector('#x-changer');
  const yInputEl = document.querySelector('#y-changer');

  // 3. Reading the x & y value
  const xCoord = xInputEl.value;
  const yCoord = yInputEl.value;

  // 4. Creating the image path with the coordinates
  // const imageSrc = 'images/out256_' + xCoord + '_' + yCoord + '.jpg';
  const imageSrc = `images/out256_${xCoord}_${yCoord}.jpg`;

  // 5. Changing the image element's src
  imageEl.src = imageSrc;
  console.log('New image: ' + imageEl.src);
}



// Getting the button element and
// associating the click event with
// changeImage function
const buttonEl = document.querySelector('#image-changer');
buttonEl.addEventListener('click', changeImage);

// Getting the input elements and
// associating the input event with
// changeImage function
const xInputEl = document.querySelector('#x-changer');
xInputEl.addEventListener('input', changeImage);
const yInputEl = document.querySelector('#y-changer');
yInputEl.addEventListener('input', changeImage);