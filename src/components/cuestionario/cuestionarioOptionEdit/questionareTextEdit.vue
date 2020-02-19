<template>
	<div>
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="panel panel-default">
			  <div class="panel-body">
			  	<div v-if="!hEdit">
			  	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			  		<div class="form-group pull-right">
			  			<a class="btn btn-warning" v-on:click="opcionhabilitado"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
			  			<a class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></a>
			  		</div>
			  	</div>
			  	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			  		<label>Pregunta:</label>
					<h5 class="oblicuopru">{{dataQuestion.questionText}}</h5>
				</div>
				<div class="col-lg-3 col-lg-offset-9 col-md-4 col-md-offset-8 col-sm-12 col-xs-12">
	              <div v-if="dataQuestion.requiredQuestion">
	              	<label class="oblicuopru">Obligatorio: <input type="checkbox" checked disabled></label>
	              </div>
	              <div v-else>
	              	<label class="oblicuopru">Obligatorio: <input type="checkbox" disabled></label>
	              </div>
	        	</div>
	        	</div>
	        	<div v-else>
	        		<editQuestionText :positionQuestion="positionQuestion" :dataQuestion="dataQuestion"></editQuestionText>
	        	</div>
	          </div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'questionareTextEdit',
		props:['positionQuestion','dataQuestion'],
		components:{
			editQuestionText:()=> import('./optionsEdit/editQuestionText')
		},
		data(){
			return{
				hEdit:false
			}
		},
		created(){
			this.$eventbus.$on('CancelEdit',()=>{
				this.hEdit=false
			})
			this.$eventbus.$on('preguntaTextEdit',(data)=>{
				this.hEdit=false
			})
		},
		methods:{
			opcionhabilitado:function(){
				this.hEdit=!this.hEdit;
			}
		}
	}
</script>
<style>
	 
    .oblicuopru{
      font-style: oblique;
    }
</style>