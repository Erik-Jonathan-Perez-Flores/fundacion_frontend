<template>
		<div>
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="panel panel-default">
			  <div class="panel-body">
			  	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			  		<div class="form-group pull-right">
			  			<a class="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
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
	                    	<label class="checkbox" disabled>
	                    	<input type="checkbox" name="rsvp" disabled>
	                    	{{op.TitleOption}}
	                  		</label>
	                	</div>
	                </div>
		        </div>

				<div class="col-lg-3 col-lg-offset-9 col-md-4 col-md-offset-8 col-sm-12 col-xs-12 espacioob">
	              <div v-if="dataQuestion">
	              	<label class="oblicuopru">Obligatorio: <input type="checkbox" checked disabled></label>
	              </div>
	              <div v-else>
	              	<label class="oblicuopru">Obligatorio: <input type="checkbox" disabled></label>
	              </div>
	        	</div>


	          </div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'questionareSelectMultipleEdit',
		props:['positionQuestion','dataQuestion'],
		data(){
			return{

			}
		}
	}
</script>
<style>
	
</style>