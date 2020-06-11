<template>
    <div class="product">
        <div class="card shadow p-3 mb-5 bg-white rounded" >
            <img class="card-img-top img-fluid" :src="product.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <div class="scrollbar scrollbar-rare-wind">
                <div class="card-text force-overflow">{{ product.description }}</div>
                </div>
                <p class="price">£{{ product.price }}</p>
                <a href="#" class="btn btn-dark">Add to cart</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style scoped>
.card {
width: 100%;
height: 600px;
}
.card-img-top {
width: 100%;
height: 40%;
object-fit: cover;
}
.card-title{
width: 100%;
height: 15%;
}
.scrollbar {
float: left;
height: 50%;
width: 100%;
background: #fff;
overflow-y: scroll;
margin-bottom: 25px;
}
.force-overflow {
min-height: 450px;
}
.scrollbar-rare-wind::-webkit-scrollbar-track {
background-color: #F5F5F5;
border-radius: 10px; 
}
.scrollbar-rare-wind::-webkit-scrollbar {
width: 12px;
background-color: #F5F5F5; 
}
.scrollbar-rare-wind::-webkit-scrollbar-thumb {
border-radius: 10px;
background-image: -webkit-linear-gradient(bottom, #a8edea 0%, #fed6e3 100%);
background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%); 
}
.scrollbar-rare-wind {
scrollbar-color: #a8edea #F5F5F5;
}
.product {
border-radius: 5px;
box-shadow: 0px, 0px, 20px, 10px, rgba(0, 0, 0, 0.75);
}
</style>