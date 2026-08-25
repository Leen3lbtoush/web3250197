//java script code//

function closeBanner() {
    const banner = document.getElementById('welcomeBanner');
    if (banner) {
        banner.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    
    const destinationSelect = document.getElementById('destination');
    const imageContainer = document.getElementById('destinationImageContainer');
    const previewImage = document.getElementById('previewImage');
    const imageCaption = document.getElementById('imageCaption');

    
    const destinationImages = {
        "Petra (Ma'an)": {
            url: "https://www.almamlakatv.com/images/articles/big/2025/7/686b5d99891b7.jpeg",
            title: " Petra - The Rose Red City (Ma'an)"
        },
        "Wadi Rum (Aqaba)": {
            url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/558785596.jpg?k=733619aac8c8d29a10759eb3883875f601f32b6e5f5c87480cc3817093c46826&o=",
            title: " Wadi Rum Desert (Aqaba)"
        },
        "Jerash Ruins (Jerash)": {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPxblr5yP-W7pmp3sxljYllgidVXdvbaHNRB3Xrvrv_TnIrAyqlqe2d0p&s=10",
            title: " Jerash Roman Ruins (Jerash)"
        },
        "Ajloun Forest (Ajloun)": {
            url: "https://museums.visitjordan.com/uploads/museums/images/c78458e6-3bb3-44e4-b363-0abc5869ef86.jpg",
            title: " Ajloun Nature Reserve (Ajloun)"
        },
        "Dead Sea (Balqa)": {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgfmiVxx4fWocMAuW7bNWhwaUmg4tSyF8PNrjZrZH9H6oZ05l02WjJQqo&s=10",
            title: " The Dead Sea (Balqa)"
        }
    };

    if (destinationSelect) {
        destinationSelect.addEventListener('change', function() {
            let selectedVal = this.value;
            if (destinationImages[selectedVal]) {
                previewImage.src = destinationImages[selectedVal].url;
                imageCaption.innerText = destinationImages[selectedVal].title;
                imageContainer.style.display = 'block';
            } else {
                imageContainer.style.display = 'none';
            }
        });
    }

    
    
    
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            let name = document.getElementById('fullName').value;
            let dest = destinationSelect.value;
            let date = document.getElementById('tripDate').value;
            
            let ticketResult = document.getElementById('ticketResult');
            let ticketDetails = document.getElementById('ticketDetails');
            
            
            ticketDetails.innerHTML = `
                <strong>Passenger:</strong> ${name} <br>
                <strong>Destination:</strong> ${dest} <br>
                <strong>Date:</strong> ${date} <br>
                <span style="color: #8A1C14; font-weight: bold;">Status: Confirmed Successfully! 🇯🇴</span>
            `;
            
            
            const passengerList = document.getElementById('passengerList');
            
            if (passengerList.innerHTML.includes("No bookings yet.")) {
                passengerList.innerHTML = "";
            }
            
            let listItem = document.createElement('li');
            listItem.style.background = "#FFFFFF";
            listItem.style.padding = "10px 15px";
            listItem.style.margin = "8px 0";
            listItem.style.borderRadius = "8px";
            listItem.style.border = "1px solid #C86D51";
            listItem.style.boxShadow = "0 2px 5px rgba(0,0,0,0.05)";
            listItem.innerHTML = `✅ <strong>${name}</strong> - <em>${dest}</em> (${date})`;
            
            passengerList.appendChild(listItem);
            
            
            bookingForm.reset();
            if (imageContainer) {
                imageContainer.style.display = 'none'; 
            }
            ticketResult.style.display = 'block';
            ticketResult.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
