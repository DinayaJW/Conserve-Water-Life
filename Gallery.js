// Selecting all the elements with the class 'image-wrapper' which are the thumbnail images.
const thumbnails = document.querySelectorAll('.image-wrapper');
// getting the popup feature
const popup = document.getElementById('imagePopup');
// getting the expanded images
const expandedImage = document.getElementById('expandedImage');
// getting the image descriptions 
const imageDescription = document.getElementById('imageDescription');


// Array of URLs for the expanding images that appear when a thumnbail is clicked.
const customImageUrl = [
    'Images/ocean pollution - effects2.jpg',
    'Images/overfishing4.jpg',
    'Images/Great barrier reef_polluted.jpg',
    'Images/corals_polluted.jpg',
    'Images/turtle.jpg',
    'Images/seals_after.jpg',        
];

// array of descriptions that appear with the expanded image when a thumbnail is clicked 
const desciption=[
    'Ocean Pollution, a common issue in the current time concerning health as well as the extinction of marine life. This is a major problem and is in need of urgent attnetion as ocean pollution basically sums up most of the issues of life below water.',
    'Overfishing has lead to many species to be below balanced levels and as much as 60% to be almost extinct. The main cause being unsustainable methods during modern fishing.',
    'The prized UNESCO World Heritage Site, which is known as the biggest living structure on planet Earth is under destruction due to climate change and other human interventions.',
    'Corals are believed to be in jeopardy as a result of many complex interactions on land as well as at sea. This marine feature known as "rainforests of the sea" are in a constant vulnerable state as they are forced to be accustomed to acidic and polluted water.',
    'Turtles are exposed to pollution at all stages of life and is harshly affected by this cruel toxicity as these materials directly attack their livers and kidneys, thus posing a threat to their existence.',
    'Playful and curious animals by nature, seals tend to play around with plastics and various other ocean pollution materials, leading them to be entrapped or even injured, thus causing them their untimely and inevitable death.',
];

// implementing click event listeners for the thumbnails 
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', (event) => {
        // setting the source of expanded image to corresponding image URL 
        expandedImage.src=customImageUrl[index];
        // Setting the text content of the image description to corresponding description.
        imageDescription.textContent=desciption[index];    

        // displaying popup 
        popup.style.display = 'block';
    });
});

// colour picker element 
var colorPicker = document.getElementById("color-picker");
// font select element 
var fontSelect = document.getElementById("font-picker");

colorPicker.addEventListener("change", function(){
    // getting the selected colour. 
    var colourSelected = colorPicker.value;
    // changing the popup background colour to the selcted colour 
    popup.style.backgroundColor=colourSelected;
})

fontSelect.addEventListener("change", function(){
    // getting the selected font 
    var fontSelected=fontSelect.value;
    // changing the image description to the selcted font. 
    imageDescription.style.fontFamily=fontSelected;
})

// function to close popup 
function closePopup() {
    // putting display style to 'none' to hide popup 
    popup.style.display = 'none';
}