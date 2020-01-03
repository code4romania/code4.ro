function partners() {
    if (typeof URLSearchParams == 'function') {

        var path_elements = location.pathname.split('/');

        // the city is the second to last element in path_elements
        path_elements.pop();
        var city_in_url = path_elements.pop();

        var cities = ["bucuresti", "iasi", "cluj", "timisoara"];

        if (!city_in_url) {
            cities.forEach(function (city_name) {
                if (document.getElementById('partners_' + city_name)) {
                    document.getElementById('partners_' + city_name).style.display = 'none';
                }
            });
        } else {
            cities.forEach(function (city_name) {
                if (city_in_url != city_name) {
                    if (document.getElementById('sponsors_' + city_name)) {
                        document.getElementById('sponsors_' + city_name).parentElement.parentElement.style.display = 'none';
                    }
                    if (document.getElementById('partners_' + city_name).style) {
                        document.getElementById('partners_' + city_name).style.display = 'none';
                    }
                }
            });
        }
    }
}

module.exports = partners;
