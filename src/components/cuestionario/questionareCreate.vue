<template>
	<div>
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="panel panel-default">
              <div class="panel-body">

        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		<div class="col-lg-6 col-lg-offset-6 col-md-8 col-md-offset-4 col-sm-12 col-xs-12">
				   <div @click="OptionQuestion('questionnaireText')" class="btn btn-primary"> texto</div>
				   <div @click="OptionQuestion('questionnaireSelect')" class="btn btn-primary">seleccion</div>
				   <div @click="OptionQuestion('questionnaireSelectMultiple')" class="btn btn-primary">seleccion multiple</div>
                   <!--<div @click="selectedQuestion = 'questionnaireText'" class="btn btn-primary">texto</div>
		            <div @click="selectedQuestion = 'questionnaireSelect'" class="btn btn-primary">seleccion</div>
		            <div @click="selectedQuestion = 'questionnaireSelectMultiple'" class="btn btn-primary">seleccion multiple</div>--> 
              
           
        </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        	<component :is="selectedQuestion" :positionQuestion="pruebaPosition"></component>	
        </div>
        </div>
            </div>

		</div>
	</div>
</template>
<script>
	import questionnaireText from './cuestionarioOption/questionnaireText'
	import questionnaireSelect from './cuestionarioOption/questionnaireSelect'
	import questionnaireSelectMultiple from './cuestionarioOption/questionnaireSelectMultiple'
	export default{
		name:'prueba',
		props:['pruebaPosition'],
		components:{
			questionnaireText,
			questionnaireSelect,
			questionnaireSelectMultiple
		},
		data(){
			return{
				selectedQuestion:'questionnaireText'

			}
		},
		created(){

		},
		methods:{
			OptionQuestion:function(data){
				if (data=='questionnaireText') {
					this.selectedQuestion='questionnaireText'
					this.$eventbus.$emit('tipotexto',this.pruebaPosition)
				}
				else if(data=='questionnaireSelect'){
					this.selectedQuestion='questionnaireSelect'
					this.$eventbus.$emit('tiposelect',this.pruebaPosition)
				}
				else if(data=='questionnaireSelectMultiple'){
					this.selectedQuestion='questionnaireSelectMultiple'
					this.$eventbus.$emit('tiposelectMultiple',this.pruebaPosition)
				}
			}	
		}
	}
</script>
<style>
	
</style>