<template>
    <div>
        <div id="nav">
            <router-link to="/cart_checkout">我的訂單</router-link>|
            <router-link to="/admin/products">後台產品列表</router-link>|
            <hr>
        </div>
        <!-- sidebar -->
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand d-lg-block d-none" href="index.html">
                    <div class="logoTop d-flex align-items-center">
                        <img class="navbarIcon" src="../../static/img/clover.png" style="width: 40px;" alt="">
                        <h1>芳草小舖</h1>
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="logo navbar-brand d-lg-none d-block" href="index.html">
                    <img class="navbarIcon" src="../../static/img/clover.png" style="width: 35px;" alt="">芳草小舖
                </a>
                <router-link to="/cart" class="d-flex align-items-center order-lg-1">
                    <a class="nav-link" href="#">
                    <i class="fas fa-cart-plus"></i>
                    </a>
                </router-link>

                <div class="sidebar navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <router-link to="/"><a class="nav-link">
                              <i class="fas fa-home"></i>首頁
                              <span class="sr-only">(current)</span></a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/products"><a class="nav-link">
                              <i class="fab fa-product-hunt"></i>周邊商品</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login"><a class="nav-link" href="login.html">
                              <i class="fas fa-user"></i>後台登入</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
