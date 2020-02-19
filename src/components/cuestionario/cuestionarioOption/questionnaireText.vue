<template>
    <div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <h3 align="center">Pregunta de texto</h3>
      </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="form-group">
              <label>Ingresar Pregunta:</label>
              <textarea class="form-control" rows="4" v-model="preguntatext" v-on:keyup="dimensionText"></textarea>
            </div>
        </div>
        <div class="col-lg-3 col-lg-offset-9 col-md-4 col-md-offset-8 col-sm-12 col-xs-12">
              <label class="oblicuopru">Obligatorio: <input type="checkbox" v-model="oblitex"></label>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p class="text-danger ErrorHide" style="display:block">{{errors.textdimension}}</p>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="form-group pull-right">
            <button type="button" class="btn btn-success btn-md  buttonsave" v-on:click.prevent="  insertQuestion" disabled>Guardar</button>
            <button type="button" class="btn btn-danger btn-md  buttoncancel" v-on:click.prevent="cancelarInsert">cancelar</button>
          </div>
        </div>
    </div>
</template>
 
<script>
    export default {
      name:'questionnaireText',
      props:['positionQuestion'],
      data(){
        return{
         preguntatext:'',
         oblitex:false,
         errors:{
            textdimension:'* La pregunta debe tener mayor a 50 y menor a 500'
         }
        }
      },
      created(){
      },
      methods:{
          insertQuestion:function(){
            this.$eventbus.$emit('preguntaText',{
            positionTexto:this.positionQuestion,
            preguntatext:this.preguntatext,
            oblitex:this.oblitex,
            statusEdit:true
                })
              },
          dimensionText:function(){
            if (this.preguntatext.length>50
                &&this.preguntatext.length<300){
                $('.ErrorHide').css("display","none")
                $('.buttonsave').prop("disabled",false)
            }
            else{
              $('.ErrorHide').css("display","block")
              $('.buttonsave').prop("disabled",true)
            }
          },
          cancelarInsert:function(){
            this.$eventbus.$emit('deleteQuestion',this.positionQuestion)
          } 
      }
  }
</script>
 
<style scoped>
    div.card {
        color: #856404;
        border: 4px solid #ffeeba;
    }
    .oblicuopru{
      font-style: oblique;
    }
</style> 