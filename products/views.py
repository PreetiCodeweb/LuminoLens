from django.shortcuts import render

products = {
    1: {
        "name": "Vintage Round Frames",
        "description": "Classic round frames made with high-quality metal.",
        "certification": "Certified Blue Light Filter",
        "researchLink": "https://www.luminolens.org/research/round-frames",
        "micrositeUrl": "https://www.luminolens.org/product/round-frames"
    },
    2: {
        "name": "Modern Squared Frames",
        "description": "Sleek squared frames crafted from premium acetate.",
        "certification": "Certified Blue Light Filter",
        "researchLink": "https://www.luminolens.org/research/squared-frames",
        "micrositeUrl": "https://www.luminolens.org/product/squared-frames"
    },
    3: {
        "name": "Minimalist Metal Frames",
        "description": "Timeless aviator frames with high durability.",
        "certification": "Certified Blue Light Protection",
        "researchLink": "https://www.luminolens.org/research/aviators",
        "micrositeUrl": "https://www.luminolens.org/product/aviators"
    },
    4: {
        "name": "Rimless clearview",
        "description": "Sporty, ergonomic wrap-around frames for active lifestyles.",
        "certification": "Certified for Outdoor Blue Light Protection",
        "researchLink": "https://www.luminolens.org/research/sporty-wrap-arounds",
        "micrositeUrl": "https://www.luminolens.org/product/sporty-wrap-arounds"
    },
    5: {
        "name": "Crystal Clear Frames",
        "description": "Sporty, ergonomic wrap-around frames for active lifestyles.",
        "certification": "Certified for Outdoor Blue Light Protection",
        "researchLink": "https://www.luminolens.org/research/sporty-wrap-arounds",
        "micrositeUrl": "https://www.luminolens.org/product/sporty-wrap-arounds"
    },
    6: {
        "name": "Techwear Edge Frames",
        "description": "Sporty, ergonomic wrap-around frames for active lifestyles.",
        "certification": "Certified for Outdoor Blue Light Protection",
        "researchLink": "https://www.luminolens.org/research/sporty-wrap-arounds",
        "micrositeUrl": "https://www.luminolens.org/product/sporty-wrap-arounds"
    }
}

def index(request):
    return render(request, 'products/index.html')

def about(request):
    return render(request, 'products/about.html')

def product_detail(request, product_id=1):
    product = products.get(product_id)
    if not product:
        product = products[1]  

    return render(request, 'products/product_detail.html', {'product': product})
