<template>
    <div>
    	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 texttitle">
    		<h3>Editar pregunta</h3>
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
          <p class="text-danger ErrorHide" style="display:none">{{errors.textdimension}}</p>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="form-group pull-right">
            <button type="button" class="btn btn-success btn-md  buttonsave" v-on:click.prevent="  insertQuestion">Actualizar</button>
            <button type="button" class="btn btn-danger btn-md  buttoncancel" v-on:click.prevent="cancelarInsert">cancelar</button>
          </div>
        </div>
    </div>
</template>
<script>
	export default{
		name:'editQuestionText',
		props:['positionQuestion','dataQuestion'],
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
			this.preguntatext=this.dataQuestion.questionText
			this.oblitex=this.dataQuestion.requiredQuestion
		},
		methods:{
          	insertQuestion:function(){
            	this.$eventbus.$emit('preguntaTextEdit',{
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
            	this.$eventbus.$emit('CancelEdit')
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
    .texttitle{
    	text-align: center;
    }
</style>