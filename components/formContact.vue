<template>
    <div class="modal-contact | flex | fade">
         <button type="button" class="btn-secondary | btn-h | btn-close | fadeContact" aria-label="closeForm" @click="$emit('close')">
          <svg v-for="svg in 2" :key="svg" xmlns="http://www.w3.org/2000/svg" class="center-absolute translate" width="24" height="20" viewBox="0 0 22 22">
            <path id="Tracé_13" data-name="Tracé 13" d="M4490.127,9591.369l20.573,20.658" transform="translate(-4489.678 -9591.369)" fill="none" stroke="#F2A800" stroke-width="2"/>
            <path id="Tracé_14" data-name="Tracé 14" d="M4510.7,9591.369l-21.022,20.863" transform="translate(-4489.678 -9591.369)" fill="none" stroke="#F2A800" stroke-width="2"/>
          </svg>
        </button> 
      <div class="modal-contact__left | d-flex">
        <div class="bg-imgForm bg-img"></div>
        <form
          class="form-contact"
          method="POST"
        >
          <fieldset>
            <div
              class="form-contact__wrapper-name | form-field | d-flex-between | space-div"
            >
              <div class="form-contact__lastName">
                <label class="lbl fadeContact" for="last-name">Nom</label>
                <input
                  class="input-requiered txt-primary"
                  v-model.trim="lastName"
                  type="text"
                  name="last-name"
                  id="last-name"
                />
                <div class="line-input hide"></div>
              </div>
              <div class="form-contact__firstName form-field">
                <label class="lbl fadeContact" for="first-name">Prénom</label>
                <input
                  class="input-requiered txt-primary"
                  v-model.trim="firstName"
                  type="text"
                  name="first-name"
                  id="first-name"
                />
                <div class="line-input hide"></div>
              </div>
            </div>
            <div class="form-contact__email form-field space-div">
              <label class="lbl fadeContact" for="email">Email</label>
              <input
                class="input-requiered txt-primary"
                v-model.trim="email"
                type="email"
                name="email"
                id="email"
              />
              <div class="line-input hide"></div>
            </div>
            <div class="form-contact__message | form-field | space-div">
              <label class="lbl fadeContact" for="message">Votre message</label>
              <textarea
                class="input-requiered txt-primary"
                v-model.trim="message"
                name="message"
                id="message"
                cols="30"
                rows="5"
              ></textarea>
              <div class="line-input hide"></div>
            </div>
            <div class="form-contact__btn-error d-flex-align-item">
              <p ref="message" class="error-message">{{ errors }}</p>
              <button v-on:click="form($event)" type="submit" class="btn-secondary btn-h fadeContact">
                <span
                  v-for="txtSpan in 2"
                  :key="txtSpan"
                  class="btn-primary__txt translate"
                  >Envoyer</span
                >
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="contact-info d-flex">
          <div class="contact-info__container">
              <p class="txt-secondary | contact-info__txt | fadeContact">2-4 rue Royale - 1000 Brussels</p>
              <p class="txt-secondary | contact-info__txt | fadeContact">+ 32 (0)2 513 89 40</p>
              <a class="txt-secondary | contact-info__txt | fadeContact mail" href="mailto:hello@Bruvisite.com">hello@Bruvisite.com</a>
              <div class="contact-info__social fadeContact">
            <a
              href="https://www.facebook.com/visitbrussels"
              aria-label="facebook"
              class="social-contact btn-tertiary btn-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg v-for="(i, social) in 2" :key="social"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="22"
                viewBox="0 0 14.856 27.738"
                class="center-absolute translate"
              >
                <path
                  data-name="Icon awesome-facebook-f"
                  d="M15.492,15.6l.77-5.02H11.446V7.325a2.51,2.51,0,0,1,2.83-2.712h2.19V.339A26.7,26.7,0,0,0,12.579,0c-3.967,0-6.56,2.4-6.56,6.757v3.826H1.609V15.6H6.019V27.738h5.427V15.6Z"
                  transform="translate(-1.609)"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/visitbrussels"
              aria-label="instagram"
              class="social-contact btn-tertiary btn-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg v-for="(i, social) in 2" :key="social"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24.285 24.279"
                class="center-absolute translate"
              >
                <path
                  data-name="Icon awesome-instagram"
                  d="M12.14,8.152a6.225,6.225,0,1,0,6.225,6.225A6.215,6.215,0,0,0,12.14,8.152Zm0,10.272a4.047,4.047,0,1,1,4.047-4.047,4.054,4.054,0,0,1-4.047,4.047ZM20.071,7.9a1.452,1.452,0,1,1-1.452-1.452A1.449,1.449,0,0,1,20.071,7.9Zm4.123,1.474a7.185,7.185,0,0,0-1.961-5.087,7.233,7.233,0,0,0-5.087-1.961c-2-.114-8.013-.114-10.017,0A7.222,7.222,0,0,0,2.041,4.279,7.209,7.209,0,0,0,.08,9.366c-.114,2-.114,8.013,0,10.017A7.185,7.185,0,0,0,2.041,24.47a7.242,7.242,0,0,0,5.087,1.961c2,.114,8.013.114,10.017,0a7.185,7.185,0,0,0,5.087-1.961,7.232,7.232,0,0,0,1.961-5.087C24.308,17.379,24.308,11.376,24.194,9.371ZM21.6,21.534A4.1,4.1,0,0,1,19.3,23.842c-1.6.634-5.391.488-7.157.488s-5.564.141-7.157-.488a4.1,4.1,0,0,1-2.308-2.308c-.634-1.6-.488-5.391-.488-7.157s-.141-5.564.488-7.157A4.1,4.1,0,0,1,4.983,4.913c1.6-.634,5.391-.488,7.157-.488s5.564-.141,7.157.488A4.1,4.1,0,0,1,21.6,7.221c.634,1.6.488,5.391.488,7.157S22.238,19.941,21.6,21.534Z"
                  transform="translate(0.005 -2.238)"
                  fill="white"
                />
              </svg>
            </a>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      errors: "",
      lastName: null,
      firstName: null,
      email: null,
      message: null,
    };
  },
  methods: {
    form(e) {
      e.preventDefault()
      if (!this.lastName || !this.firstName || !this.email || !this.message) {
        this.errors = "Certains champs sont vides";
      } else if (!this.checkRegex(this.email)) {
        this.errors = "La syntaxe de l'email n'est pas correct";
      } else if (this.message.length < 15) {
        this.errors = "Message trop court ( minimun 15 caractères )";
      } else {
        this.errors = `Merci pour votre message ${
          this.firstName.charAt(0).toUpperCase() + this.firstName.substring(1)
        }`;
        this.$refs.message.classList.add("succes-message");
        (this.lastName = null),(this.firstName = null),(this.email = null),(this.message = null);
        setTimeout(() => {
          this.$refs.message.classList.remove("succes-message");
          this.errors = "";
        }, 2000);
      }
    },
    checkRegex(value) {
      const regex =
       /^(([^<>()[\]\\.,;:#$&!\s@"]+(\.[^<>()[\]\\.,;:#$&!\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(value);
    },
  },
};
</script>

<style>
.modal-contact {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
.btn-close{
  position: absolute;
  top: 30px;
  right: 70px;
  background-color: white;
  z-index: 9999;
}
.modal-contact__left{
  position: relative;
   clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);
  width: 63%;
    background-color: white;
}
.bg-imgForm{
  background-image: url(~/assets/img-bg/bg_grandPlace.webp);
  background-size: 17%;
  background-position: bottom left;
  opacity: 0.15;
}
.form-contact__lastName,
.form-contact__firstName{
    width: 43%;
}
.form-contact {
  width: 65%;
  margin: 0 auto;
}
fieldset {
  border: none;
}
.lbl {
  font-size: 1.1vw;
  margin-bottom: 20px;
}
.line-input {
  width:0%;
  height: 1px;
  background-color: #F2A800
}
.space-div {
  margin: 55px 0;
}
input,
textarea {
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
}
.error-message {
  color: red;
  width: 70%;
}
.succes-message {
  color: #5190b9;
}
button {
  border: none;
  cursor: pointer;
}
.contact-info{
  clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);
  width: 37%;
  background-color: #F2A800
}
.contact-info__txt{
  color: white;
}
.mail{
  display: block;
  text-decoration: underline;
}
.contact-info__social{
  margin-top: 15px;
}
.social-contact{
  display: inline-block;
  border: 1px solid white;
  margin-right: 10px;
}
@media (max-width: 1200px) {
  .lbl {
    font-size: 1rem;
  }
.space-div {
  margin: 50px 0;
}
}
@media (max-width: 992px) {
  .modal-contact__left {
    padding: 60px 0;
  }
  .form-contact{
    width: 90%;
  }
  .contact-info{
    padding: 50px 0;
  }
.contact-info, .modal-contact__left, 
.form-contact__lastName,
.form-contact__firstName{
    width: 100%;
}
.bg-imgForm{
  display: none;
}
  .modal-contact, .form-contact__wrapper-name {
    flex-direction: column;
  }
  .form-contact__lastName {
    margin-bottom: 50px;
  }
}
@media (max-width: 568px){
  .btn-close{
    right: 30px;
  }
  .modal-contact__left {
    padding: 100px 0;
  }
}
</style>