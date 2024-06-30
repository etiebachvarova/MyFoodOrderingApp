document.addEventListener('DOMContentLoaded', function() {
    function loadFoodCategories() {
        fetch('http://localhost:3000/api/foodCategories')
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data);
                let categoriesHtml = '';
                data.forEach(category => {
                    categoriesHtml += `<div class="col-12"><h3>${category.name}</h3></div>`;
                    category.items.forEach(item => {
                        categoriesHtml += `
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.name}</h5>
                                        <p class="card-text">$${item.price.toFixed(2)}</p>
                                        <button class="btn btn-primary" onclick="addToCart(${category.id}, '${item.name}', ${item.price})">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                });
                document.getElementById('categoriesList').innerHTML = categoriesHtml;
            })
            .catch(error => {
                console.log('Error fetching food categories', error);
            });
    }

    loadFoodCategories();
});

