<template>
		<div>
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="panel panel-default">
			  <div class="panel-body">
			  	<div v-if="!hEdit">
				  	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				  		<div class="form-group pull-right">
				  			<a class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true" v-on:click.prevent="opcionhabilitado"></i></a>
				  			<a class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></a>
				  		</div>
				  	</div>
				  	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				  		<label>Pregunta:</label>
						<h5 class="oblicuopru">{{dataQuestion.questionText}}</h5>
					</div>
					
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			            <center><h4 class="distanciaButton">Opciones</h4></center>
		            	<div v-for="op in dataQuestion.option">
		                	<div class="col-lg-4 col-md-3 col-sm-2 col-xs-12">
		                    	<label class="radio" disabled>
		                    	<input type="radio" name="rsvp" disabled>
		                    	{{op.TitleOption}}
		                    	
		                    	</label>
		                	</div>
		                </div>
			        </div>

					<div class="col-lg-3 col-lg-offset-9 col-md-4 col-md-offset-8 col-sm-12 col-xs-12 espacioob">
		              <div v-if="dataQuestion.requiredQuestion">
		              	<label class="oblicuopru">Obligatorio: <input type="checkbox" checked disabled></label>
		              </div>
		              <div v-else>
		              	<label class="oblicuopru">Obligatorio: <input type="checkbox" disabled></label>
		              </div>
		        	</div>
		        </div>
		        <div v-else>
		        	<editQuestionSelect :positionQuestion="positionQuestion" :dataQuestion="dataQuestion"></editQuestionSelect>
		        </div>
			</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'questionareSelectEdit',
		props:['positionQuestion','dataQuestion'],
		components:{
			editQuestionSelect:()=>import('./optionsEdit/editQuestionSelect')
		},
		data(){
			return{
				hEdit:false
			}
		},
		created(){
			this.$eventbus.$on('preguntaSelectEdit',(data)=>{
				this.hEdit=false
			})
			this.$eventbus.$on('cancelEditSelect',()=>{
				this.hEdit=false
				
			})
		},
		methods:{
			opcionhabilitado:function(){
				this.hEdit=!this.hEdit
			}
		}
	}
</script>
<style>
	.espacioob{
		margin-top:20;
	}
</style>