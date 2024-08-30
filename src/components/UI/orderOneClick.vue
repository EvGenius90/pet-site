<template>
  <div class="dark-fon d-none" @click="close">
    <div class="order-click">
      <div class="modal-close">&#215;</div>
      <div class="order-click__content">
        <h2>Для заказа в 1 клик укажите своё имя 
          <br>
          и телефон
        </h2>
        <form action="#">
          <label for="name">Имя</label>
          <input type="text" id="name" placeholder="Иван">
  
          <label for="phone">Телефон</label>
          <input type="tel" id="phone" placeholder="+7(000) 000 00 00">
  
          <button>Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    close(e){
      const modal = document.querySelector('.dark-fon')
      
      if(e.target.classList.contains('dark-fon') || e.target.classList.contains('modal-close')){
          modal.classList.add('d-none')
          document.body.style.overflow = ''
      }
    }
  }
}
</script>