<template>
 <div id="main_div">

   <!-- Home Section start-->
   <section id="home" class="home">
     <div class="home-decor">
       <div class="home-circle1"><img :src='"../assets/images/main-banner3.png"' alt=""></div>
       <div class="home-circle2"><img :src='"../assets/images/main-banner12.png"' alt=""></div>
       <div class="home-circle3"><img :src='"../assets/images/main-banner1.png"' alt=""></div>
     </div>
     <div class="container">
       <div class="row">
         <div class="col-md-5">
           <div class="home-contain">
             <div>
               <h1>Welcome</h1>
               <p>Enhance your business ideas with our services.</p>
               <a href="#"><img :src='"../assets/images/appstore.png"' alt="appstore" class="store"></a>
               <a href="#"><img class="ml-10 store" :src='"../assets/images/play-store.png"' alt="play-store"></a>
             </div>
           </div>
         </div>
         <div class="col-sm-6 offset-md-1">
           <div class="home-right">
             <!-- Tile js start -->
             <Tile :image = '"mobile.png"'/>
             <!-- Tile js end -->
           </div>
         </div>
       </div>
     </div>
   </section>
   <!--Home Section End -->

   <!-- About Start  -->
   <About/>
   <!-- About End -->

   <!-- Feature Section start -->
   <Feature/>
   <!-- Feature Section End -->

   <!-- Screenshots Section Start -->
   <Screenshots/>
   <!-- Screenshots Section End -->

   <!-- Team Section Start -->
   <Team/>

   <!-- team Section End -->

   <!-- Price Section start-->
   <Price/>
   <!-- Price Section End -->

   <!-- testimonial Section start-->
   <Testimonial/>
   <!-- testimonial Section End -->

   <!-- Contact Section start -->
   <Contact_us/>
   <!-- Contact Section End -->

   <!--Map Section Start-->
   <Map/>
   <!--Map Section Ends-->

   <!-- Footer Section start -->
  <Footer/>
   <!-- Footer Section End -->

   <js/>

 </div>
</template>
<script>
export default {
  name: 'Home',
  beforeCreate: function () {
    document.body.className = ''
  }
}
</script>
<!--remove comment below line to set color -->
<!--<style lang="css">-->
  <!--@import '../public/assets/css/color/color-2.css';-->
<!--</style>-->
