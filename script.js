const products = {
    1: {
        name: "Vintage Round Frames",
        description: "Classic round frames made with high-quality metal.",
        certification: "Certified Blue Light Filter",
        researchLink: "https://www.luminolens.org/research/round-frames",  
        micrositeUrl: "https://www.luminolens.org/product/round-frames"   
    },
    2: {
        name: "Modern Squared Frames",
        description: "Sleek squared frames crafted from premium acetate.",
        certification: "Certified Blue Light Filter",
        researchLink: "https://www.luminolens.org/research/squared-frames",  
        micrositeUrl: "https://www.luminolens.org/product/squared-frames"   
    },
    3: {
        name: "Minimalist Metal Frames",
        description: "Timeless aviator frames with high durability.",
        certification: "Certified Blue Light Protection",
        researchLink: "https://www.luminolens.org/research/aviators", 
        micrositeUrl: "https://www.luminolens.org/product/aviators"   
    },
    4: {
        name: "Rimless clearview",
        description: "Sporty, ergonomic wrap-around frames for active lifestyles.",
        certification: "Certified for Outdoor Blue Light Protection",
        researchLink: "https://www.luminolens.org/research/sporty-wrap-arounds",  
        micrositeUrl: "https://www.luminolens.org/product/sporty-wrap-arounds"   
    },
    5: {
        name: "Crystal Clear Frames",
        description: "Sporty, ergonomic wrap-around frames for active lifestyles.",
        certification: "Certified for Outdoor Blue Light Protection",
        researchLink: "https://www.luminolens.org/research/sporty-wrap-arounds",  
        micrositeUrl: "https://www.luminolens.org/product/sporty-wrap-arounds"   
    },
    6: {
        name: "Techwear Edge Frames",
        description: "Sporty, ergonomic wrap-around frames for active lifestyles.",
        certification: "Certified for Outdoor Blue Light Protection",
        researchLink: "https://www.luminolens.org/research/sporty-wrap-arounds",  
        micrositeUrl: "https://www.luminolens.org/product/sporty-wrap-arounds"   
    }
};

function loadProductDetails(productId) {
    const product = products[productId];

    if (!product) {
        alert("Product not found!");
        return;
    }

    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;

    if (product.researchLink) {
        document.getElementById("research-link").setAttribute("href", product.researchLink);
        document.getElementById("research-link").textContent = "Verified Research on Blue Light";
    } else {
        document.getElementById("research-link").style.display = "none";  
    }

    document.getElementById("certification").textContent = product.certification;

    generateQRCode(product.micrositeUrl);
}

function generateQRCode(url) {
    const qrCodeElement = document.getElementById("qr-code");
    qrCodeElement.innerHTML = ''; 
    new QRCode(qrCodeElement, {
        text: url,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

loadProductDetails(1);

document.getElementById("product-dropdown").addEventListener("change", function() {
    loadProductDetails(this.value);
});
