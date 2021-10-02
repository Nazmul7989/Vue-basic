<!--<template>-->
<!--  <div class="container-fluid">-->
<!--    <form>-->
<!--      <div class="row">-->
<!--        <div class="col-md-3">-->
<!--          <div class="form-group">-->
<!--            <input type="text" v-model="userData.name" class="form-control" placeholder="Name">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-3">-->
<!--          <div class="form-group">-->
<!--            <input type="email" v-model="userData.email" class="form-control" placeholder="Email">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-3">-->
<!--          <div class="form-group">-->
<!--            <input type="text" v-model.lazy="userData.phone" class="form-control" placeholder="Phone No">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-3">-->
<!--          <div class="form-group">-->
<!--            <div class="form-check form-check-inline">-->
<!--              <input class="form-check-input" v-model="userData.languages" type="checkbox" id="inlineCheckbox1" value="Bangla">-->
<!--              <label class="form-check-label" for="inlineCheckbox1">Bangla</label>-->
<!--            </div>-->
<!--            <div class="form-check form-check-inline">-->
<!--              <input class="form-check-input" v-model="userData.languages" type="checkbox" id="inlineCheckbox2" value="English">-->
<!--              <label class="form-check-label" for="inlineCheckbox2">English</label>-->
<!--            </div>-->
<!--            <div class="form-check form-check-inline">-->
<!--              <input class="form-check-input" v-model="userData.languages" type="checkbox" id="inlineCheckbox3" value="Hindi">-->
<!--              <label class="form-check-label" for="inlineCheckbox3">Hindi</label>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-3">-->
<!--          <div class="form-check form-check-inline">-->
<!--            <input class="form-check-input" v-model="userData.gender" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male">-->
<!--            <label class="form-check-label" for="inlineRadio1">Male</label>-->
<!--          </div>-->
<!--          <div class="form-check form-check-inline">-->
<!--            <input class="form-check-input" v-model="userData.gender" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female">-->
<!--            <label class="form-check-label" for="inlineRadio2">Female</label>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-3">-->
<!--          <div class="form-group">-->
<!--            <label for="">Select Skills:</label>-->
<!--            <select name="" id="" class="form-control" v-model="userData.selectedSkill">-->
<!--              <option v-for="skill in userData.skills" :key="skill">{{ skill }}</option>-->
<!--            </select>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-3">-->
<!--          <div class="form-group">-->
<!--            <textarea v-model="userData.message" id="message" cols="30" rows="4" placeholder="Message" class="form-control"></textarea>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-3">-->
<!--          <div class="form-group">-->
<!--            <input @click.prevent="submitData" type="submit" class="btn btn-primary" value="Send">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </form>-->

<!--    <div class="row" v-if="userData.isSubmitted">-->
<!--      <div class="col-md-6">-->
<!--        <p>Name:{{ userData.name }}</p>-->
<!--        <p>Email: {{ userData.email}}</p>-->
<!--        <p>Phone: {{ userData.phone}}</p>-->
<!--        <p>-->
<!--          <span> Language:</span>-->
<!--          <ul>-->
<!--            <li v-for="language in userData.languages" :key="language">-->
<!--              {{ language }}-->
<!--            </li>-->
<!--          </ul>-->
<!--        </p>-->
<!--        <p>Gender: {{ userData.gender }}</p>-->
<!--        <p>Skills: {{ userData.selectedSkill }}</p>-->
<!--        <p style="white-space: pre-line;">Message: {{ userData.message}}</p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data(){-->
<!--    return{-->
<!--      userData:{-->
<!--        name:'',-->
<!--        email:'',-->
<!--        phone:'',-->
<!--        languages: [],-->
<!--        gender: '',-->
<!--        skills:['HTML','CSS','JS','PHP'],-->
<!--        selectedSkill: 'CSS',-->
<!--        message:'',-->
<!--        isSubmitted: false-->
<!--      }-->
<!--    }-->
<!--  },-->

<!--  methods:{-->
<!--    submitData(){-->
<!--      this.userData.isSubmitted = true;-->
<!--    }-->
<!--  }-->

<!--}-->
<!--</script>-->