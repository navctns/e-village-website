app = Vue.createApp({
    data(){
      return{
        updates:[
            {
                id:1,
                content:'അഡ്മിഷൻ രെജിസ്ട്രേഷൻ ',

            },
            {
                id:2,
                content:'NEET Registrations',
            },
            {
                id:3,
                content:'PSC Registrations'
            }
        ]
      }
    },
    methods:{
      toggleDetails(){
        this.detailsAreVisible = !this.detailsAreVisible;
      }
    }
  });

  app.component('update-carousel', {
      template:`
      <div class="carousel-item carousel-image-1 active" v-for="update in updates">
        <div class="container">
            <div class="carousel-caption d-none d-sm-block  mb-5">
            <h1 class="display-3">{{heading}}</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, corporis!</p>
            <a href="" class="btn btn-danger btn-lg">Sign Up Now</a>
            </div>
        </div>
      </div>`,
      props:['heading']
  })
  app.mount('#showcase')