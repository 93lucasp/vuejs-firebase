<template>
  <form action="">
      <h3>Add new pizza</h3>
      <div class="form-group row">
         <label class="col-md-3">foto</label>
         <div class="col-md-9 position-relative">
 
             <input type="file" id="file-upload" @change="uploadFile">
            
             <button class="btn btn-primary w-100" type="button">Upload</button>
         </div>
        
      </div>
      <div class="form-group row">
         <label class="col-md-3">Name</label>
         <div class="col-md-9">
             <input type="text" class="form-control" v-model="newPizza.name">
         </div>
        
      </div>
      <div class="form-group row">
         <label class="col-md-3">description</label>
         <div class="col-md-9">
             <textarea type="text" class="form-control" rows="5" v-model="newPizza.description"></textarea>
         </div>
        
      </div>
      <p><strong>Option1:</strong></p>
      <div class="form-group row">
         <label class="col-md-3">size</label>
         <div class="col-md-9">
             <input type="text" class="form-control" v-model="newPizza.options[0].size">
         </div>
        
      </div>
      <div class="form-group row">
         <label class="col-md-3">price</label>
         <div class="col-md-9">
             <input type="text" class="form-control" v-model="newPizza.options[0].price">
         </div>
        
      </div>
       <p><strong>Option2:</strong></p>
      <div class="form-group row">
         <label class="col-md-3">size</label>
         <div class="col-md-9">
             <input type="text" class="form-control" v-model="newPizza.options[1].size">
         </div>
        
      </div>
      <div class="form-group row">
         <label class="col-md-3">price</label>
         <div class="col-md-9">
             <input type="text" class="form-control" v-model="newPizza.options[1].price">
         </div>
        
      </div>
      <div class="form-group row">
          <button type="button" class="btn btn-success w-100" @click="addMenuItem">Add</button>
      </div>
  </form>
</template>

<script>
import { dbMenuRef } from "../firebaseConfig";
import Firebase from "firebase";
// var storage = firebase.storage();
//  var storageRef = firebase.storage().ref();
//  var thisRef = storageRef.child(file.name);
export default {
  data() {
    return {
      newPizza: {
        photo: "path",
        name: "eg. 4 formaggi",
        description: "eg. A delcious margheritaaaa with 4 cheese",
        options: [
          {
            size: 9,
            price: 7.96
          },
          {
            size: 12,
            price: 12.95
          }
        ]
      }
    };
  },
  methods: {
    addMenuItem() {
      dbMenuRef.push(this.newPizza);
    },
    uploadFile(e) {
        var _this = this;
      var file = e.target.files[0];

      var test = Firebase.storage()
        .ref()
        .child("pizze/" + file.name);
      test.put(file).then(function(snapshot) {
        console.log("Uploaded a blob or file!");
      });
      test.getDownloadURL().then(function(url) {
        // _this.newPizza.photo = url;
        console.log(url);
      });
      
    }
  }
};
</script>
<style scoped>
#file-upload {
}
</style>
