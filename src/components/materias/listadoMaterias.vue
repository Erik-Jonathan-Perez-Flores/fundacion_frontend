<template>
	<div>
		<div class="content">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div v-for="ma in materias">
					<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 spaciofinal" >
						<li>
							<router-link :to="'/practicas/'+ma._id">{{ma.nombre}}</router-link>
						</li>		
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name:'listado',
	data(){
		return{
			materias:[],
			errors:[]
		}
	},
	created() {
	    this.$store.commit('SET_LAYOUT', 'login-layout')
	   	this.getMaterias()
	},
    methods:{
    	getMaterias(){

	    	this.$api.get('/materia').then(response=>{
	    		this.materias=response.data.materia
	    	})	
    	}
    }	

}
</script>
<style>
	
</style>