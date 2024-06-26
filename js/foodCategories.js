$(document).ready(function() {
    function loadFoodCategories() {
        $.ajax({
            url: 'http://localhost:3000/api/foodCategories',
            method: 'GET',
            success: function(data) {
                console.log('Data fetched:', data); // Log the fetched data
                let categoriesHtml = '<div class="row">';
                data.forEach(category => {
                    categoriesHtml += `
                        <div class="col-md-4 mb-3">
                            <div class="card">
                                <img src="${category.image}" class="card-img-top" alt="${category.name}" style="width: 100%; height: 200px; object-fit: cover;">
                                <div class="card-body">
                                    <h5 class="card-title">${category.name}</h5>
                                    <p class="card-text">${category.description}</p>
                                    <button class="btn btn-primary" onclick="addToCart(${category.id})">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
                categoriesHtml += '</div>';
                $('#categoriesList').html(categoriesHtml);
            },
            error: function(error) {
                console.log('Error fetching food categories', error);
            }
        });
    }

    loadFoodCategories();
});
